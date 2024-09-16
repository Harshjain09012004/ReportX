const express = require('express');
const cors = require('cors');
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('./models/user');
const complaintModel = require('./models/complaint');
const cookieparser = require('cookie-parser')
const bcryptSalt = bcrypt.genSaltSync(10);

require('dotenv').config();
const jwtsecret = process.env.jwtsecret;

const download = require('image-downloader');
const path = require('path');
const multer = require('multer');
const upload = multer({dest:'uploads/'});
const fs = require('fs');
console.log(jwtsecret);

app.use(cookieparser());
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173',
}));
app.use('/uploads',express.static(path.join(__dirname+'/uploads')));

app.post('/register',async function(req,res){
    try{
        const obj = await userModel.create({
        name:req.body.name,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.pass,bcryptSalt)
        })
        res.json({success:true});
    }
    catch(e){
        res.json({success:false});
    }
    
})

app.post('/login',async function(req,res){
    try{
        const target_user = await userModel.findOne({email:req.body.lname});
        if(target_user)
        {
            const passOk = bcrypt.compareSync(req.body.lpass,target_user.password);
            if(passOk){
                const token = jwt.sign({name:target_user.name,id:target_user._id,photo:target_user.profileimage},jwtsecret,{},(err,token)=>{
                    if(err) throw err;
                    res.cookie('token',token);
                    res.json({ success: true ,name:target_user.name,photo:target_user.profileimage});
                });
            }
            else res.json({ success: false, err: "Invalid password" });
        }
        else res.json({ success: false, err: "User not found" });
    }
    catch(e){res.status(500).json({ success: false, err: "Internal server error" })}
})

app.post('/logout',(req,res)=>{
    res.cookie('token','').json({success:true});
})

app.get('/profile',(req,res)=>{
    const {token} = req.cookies;
    if(token)
    {
        jwt.verify(token,jwtsecret,{},(err,user)=>{
            if(err) throw err;
            res.json(user);
        })
    }
    else res.json(null);
})

app.post('/uploadByLinks',(req,res)=>{
 let photourl = req.body.photoUrl;
  const newname = Date.now() + '.jpg';
  const options = {
  url: photourl,
  dest: __dirname + '/uploads/' + newname,
  };  

    download.image(options)
    .then(({ filename }) => {
        console.log('Saved to', filename);
        res.json(newname);
    })
    .catch((err) => console.error(err));
})

app.post('/uploadByButton',upload.array('photos',10),(req,res)=>{
    const upfiles = req.files;
    let filenames = [];
    for(let file of upfiles)
    {
        const orname = file.originalname;
        const ext = path.extname(orname);
        const filepath = file.path;
        const newname = Date.now() + ext;
        fs.renameSync(filepath,'uploads//' + newname);
        filenames.push(newname)
    }
    res.json(filenames)
})

app.post('/uploadByButtonProfile',upload.array('photos',10),async function(req,res){
    const {token} = req.cookies; let data = "";
    jwt.verify(token,jwtsecret,{},(err,user)=>{
        if(err) throw err;
        data = user;
    })

    const upfiles = req.files;
    let filename = [];
    for(let file of upfiles)
    {
        const orname = file.originalname;
        const ext = path.extname(orname);
        const filepath = file.path;
        const newname = Date.now() + ext;
        fs.renameSync(filepath,'uploads//' + newname);
        filename.push(newname)
    }

    const profilepicdet = await userModel.findOne({"_id":data.id},{"profileimage":1,"_id":0});

    await userModel.updateOne({"_id":data.id},{"profileimage":filename[0]});
    try{
        if(profilepicdet.profileimage){
            const filePathToDelete = path.join(__dirname, 'uploads', profilepicdet.profileimage);
            fs.unlinkSync(filePathToDelete);
        }
        res.json(filename);
    }
    catch(err){console.log(err);}
})

app.post('/SubmitForm',(req,res)=>{
    const det = req.body;
    const {token} = req.cookies;

    if(token)
    {
        jwt.verify(token,jwtsecret,{},async (err,user)=>{
            if(err) res.json('Unsuccessful');
            const complaint = await complaintModel.create({
            name:det.name,
            age:det.age,
            gender:det.gender,
            title:det.title,
            description:det.description,
            phone:det.phone,
            extraInfo:det.extrainfo,
            address:det.address, 
            date:det.date,
            tags:det.tags,
            photos:det.photos, 
            startTime:det.checkin,
            endTime:det.checkout,
            })
            await userModel.updateOne({_id:user.id},{$push:{"complaints":complaint._id}});
            res.json('Successful');
        })
    }
    else res.json('Unsuccessful');
})

app.get('/allcomplaints',(req,res)=>{
    const {token} = req.cookies;
    if(token)
    {
        jwt.verify(token,jwtsecret,{},async (err,user)=>{
            if(err) throw err;
            const data = await userModel.findOne({"_id":user.id},{complaints:1,_id:0}).populate("complaints",{title:1,description:1,date:1,photos:1,address:1,status:1,_id:0});
            res.json(data);
        })
    }
    else res.json({});
})

app.listen(5000);
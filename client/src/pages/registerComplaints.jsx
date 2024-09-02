import React, { useContext, useEffect, useState } from 'react'
import { usercontext } from '../UserContext';
import { IoAddOutline } from "react-icons/io5";
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { GiCancel } from "react-icons/gi";
import { Tags } from '../tags';
import { Uploadphotos } from '../uploadPhotos';

export const Registercomplaints = () => {
  const {user,ready,setuser} = useContext(usercontext);
  const {action} = useParams();
  const [name,setname] = useState("");
  const [title, settitle] = useState("");
  const [address, setaddress] = useState("");
  const [photos, setphotos] = useState("");
  const [photoUrl, setphotoUrl] = useState("")
  const [description, setdescription] = useState("");
  const [extrainfo, setextrainfo] = useState("");
  const [checkin, setcheckin] = useState("");
  const [checkout, setcheckout] = useState("");
  const [phone,setphone] = useState("");

  const [tags, settags] = useState({theft:false,threat:false,accounthacking:false,violence:false,property:false,childmarriage:false,bribery:false,hatespeech:false,scam:false});
  const [redirect, setredirect] = useState("");
  const [fieldsavailable, setfieldsavailable] = useState(true);

  function warningremover(){setfieldsavailable(true);}

  async function submitHandler(e)
  {
    e.preventDefault();
    const allfields = {
      name,title,address,photos,
      description,extrainfo,
      checkin,checkout,tags,phone,
    };

    let details = true;
    const fields = Object.values(allfields);
    for(let field of fields){if(!field){details=false;}}

    if(details)
    {
      const { data } = await axios.post("/SubmitForm", allfields);
      if (data === "Successful") {

        setname(""); settitle("");setaddress('');setphotos([]);
        setdescription('');setextrainfo('');setcheckin('');
        setcheckout('');settags({}); setphone(null);

        settags({theft:false,threat:false,accounthacking:false,violence:false,property:false,childmarriage:false,bribery:false,hatespeech:false,scam:false});

        setredirect("/account/accomodation");
      }
    }
    else {window.scrollTo(0,0); setfieldsavailable(false);}
  }

  return (
    <>
      {redirect && <Navigate to={redirect} />}

      {action !== "new" && (
        <Link to={"/account/register/new"} className="flex justify-center">
          <button
            className="flex gap-3 items-center text-white bg-red-500 rounded-xl px-3 py-2"
            onClick={() => {
              setredirect("");
            }}
          >
            <IoAddOutline className="text-xl" />
            Add New Complaint
          </button>
        </Link>
      )}

      {action === "new" && (
        <form className="flex flex-col gap-10 ml-16 mb-8 mt-8">
          {!fieldsavailable && (
            <div className=" bg-red-600 w-[43%] h-12 text-white font-bold flex gap-4 text-xl rounded-xl place-items-center px-4">
              <GiCancel
                className="text-2xl hover:scale-110"
                onClick={warningremover}
              />
              <p>Please Fill All The Details Before Submitting</p>
            </div>
          )}

          <div>
            <h3 className="font-bold text-2xl text">Name</h3>
            <h4>Name of targetted person</h4>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Ex : Money Snatching"
              className=" w-[700px] h-10 mt-4"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>

          <div>
            <h3 className="font-bold text-2xl text">Title</h3>
            <h4>Subject of your complaint</h4>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Ex : Money Snatching"
              className=" w-[700px] h-10 mt-4"
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
          </div>

          <div>
            <h3 className="font-bold text-2xl">Address</h3>
            <h4>Address of incident</h4>
            <input
              type="text"
              name="address"
              value={address}
              placeholder="Ex City Square"
              className="w-[700px] h-10 mt-4 "
              onChange={(e) => {
                setaddress(e.target.value);
              }}
            />
          </div>

          <div>
            <h3 className="font-bold text-2xl text">Phone No.</h3>
            <h4>Enter your phone no.</h4>
            <input
              type="tel"
              name="phone"
              value={phone}
              placeholder="Ex : 1234567890"
              className=" w-[700px] h-10 mt-4"
              onChange={(e) => {
                setphone(e.target.value);
              }}
            />
          </div>

          <Uploadphotos photoUrl={photoUrl} setphotoUrl={setphotoUrl} photos={photos} setphotos={setphotos}/>

          <div>
            <h3 className="font-bold text-2xl">Description</h3>
            <h4>Tell us about the incident in detail</h4>
            <textarea
              name="description"
              value={description}
              cols="100"
              rows="5"
              className="mt-4 px-2 py-1"
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            ></textarea>
          </div>

          <Tags tags={tags} settags={settags} />

          <div>
            <h3 className="font-bold text-2xl">Extra info</h3>
            <h4>Provide information which is not included yet</h4>
            <textarea
              name="extrainfo"
              value={extrainfo}
              cols="100"
              rows="5"
              className="mt-4 px-2 py-1"
              onChange={(e) => {
                setextrainfo(e.target.value);
              }}
            ></textarea>
          </div>

          <div>
            <h3 className="font-bold text-2xl">Time Interval of Incident</h3>
            <h4>Approx time interval of incident</h4>
            <div className="flex gap-32 mt-4">
              <div className="flex place-items-center gap-3">
                <p className="font-bold text-lg">From</p>
                <input
                  type="time"
                  name="checkin"
                  value={checkin}
                  placeholder="Ex 14 : 00"
                  className=" px-10"
                  onChange={(e) => {
                    setcheckin(e.target.value);
                  }}
                />
              </div>

              <div className="flex plac place-items-center gap-3">
                <p className="font-bold text-lg">To</p>
                <input
                  type="time"
                  name="checkout"
                  value={checkout}
                  placeholder="Ex 16 : 00"
                  className="px-10"
                  onChange={(e) => {
                    setcheckout(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white rounded-2xl py-4 w-48 mx-60 mt-5 font-semibold text-xl shadow-md active:scale-105"
            onClick={submitHandler}
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
}

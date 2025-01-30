import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Contacts() {
  return (
    <header>
      <div className="flex items-center justify-center bg-[url('https://www.redbulbinstitute.com/gallery/pictures/contacts.jpg')] w-full h-screen bg-cover bg-no-repeat bg-current">
        <h1 className="text-3xl font-bold lg:text-6xl text-red-700  m-5">
          Contact Us to Enroll{" "}
        </h1>
      </div>
      <article className=" grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-2 m-3">
        <div className="border-2 border-red-700 m-10 text-center rounded ">
          <FaWhatsapp
            size={30}
            color="red"
            className="bg-white relative bottom-10  m-2 inline h-16 w-16 p-2 border-2   
    rounded-full  border-red-700"
          />
          <h3 className="text-slate-600 ">+269 72204418</h3>
          <h3 className="text-slate-600 ">+269 71588790</h3>
        </div>
        <div className="  h-30 border-2  border-red-700 m-10 text-center rounded">
          <FaEnvelope
            size={30}
            color="red"
            className="bg-white relative m-2 inline bottom-10 h-16 w-16 p-2 rounded-full border-2  
    border-red-700 "
          />
          <h3 className="text-slate-600 ">admin@redbulbinstitute.com</h3>
          <h3 className="text-slate-600 text-lg">P O BOX 60633, Gaborone</h3>
        </div>
        <div className="border-2 border-red-700 m-10 text-center rounded">
          <FaLocationDot
            size={30}
            color="red"
            className="bg-white relative m-2 inline bottom-10 h-16 w-16 p-2 border-2 
   rounded-full  border-red-700 "
          />
          <h3 className="text-slate-600 ">Plot 4067,Tlokweng</h3>
        </div>
      </article>
    </header>
  );
}

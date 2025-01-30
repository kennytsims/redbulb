import React from "react";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-red-700 w-full h-3/4  border-bt-red-700">
      <div
        className=" bg-white  h-[45rem] md:h-[45rem] md:gap-3 lg:h-[100%]  w-full 
flex flex-col gap-3 md:flex-col lg:flex-row justify-center items-center 
 lg:gap-20 rounded-t-full"
      >
        <div>
          <h1 className="text-2xl text-center text-slate-600">Contact us on</h1>
          <hr className="text-white mb-4" />
          <h3 className="text-slate-600 text-lg">
            <FaWhatsapp size={30} color="red" className=" m-2 inline" />
            +269 72204418 / 71588790
          </h3>
          <div className="text-slate-600 text-lg">
            <FaEnvelope size={30} color="red" className=" m-2 inline" />
            admin@redbulbinstitute.com
          </div>
          <h3 className="text-lg text-slate-600">
            <FaLocationDot size={30} color="red" className="m-2 inline" />
            Plot 4067, Tlokweng
          </h3>
        </div>
        .
        <div>
          <h1 className="text-2xl text-center text-slate-600">Links</h1>
          <hr className="text-white mb-4" />
          <Link href="/" className=" text-lg">
            <h3 className="text-slate-600 text-lg">
              <FaHouse size={30} color="red" className=" m-2 inline" />
              Home
            </h3>
          </Link>
          <Link href="/services">
            <h3 className=" text-lg text-slate-600">
              <FaGear size={30} color="red" className=" m-2 inline" />
              Services
            </h3>
          </Link>
          <Link href="/about">
            <h3 className=" text-lg text-slate-600">
              <FaCircleInfo size={30} color="red" className="m-2 inline" />
              About
            </h3>
          </Link>
        </div>
        <div className="copyrights m-5">
          <Image
            src={"./gallery/logo.jpg"}
            width={200}
            height={150}
            alt="logo"
          />
          <h4 className="text-slate-600">
            &copy;2025 RedBulb, all rights reserved
          </h4>
        </div>
      </div>
      <div className="bg-red-700 h-16 w-full flex items-center justify-center">
        <FaXTwitter
          size={50}
          color="white"
          className=" m-2 inline p-3 cursor-pointer border-2 border-white rounded-full"
        />
        <FaFacebookF
          size={50}
          color="white"
          className=" m-2 inline p-3 border-2 border-white rounded-full cursor-pointer"
        />
        <FaInstagram
          size={50}
          color="white"
          className="m-2 inline p-3 border-2 border-white rounded-full cursor-pointer"
        />
      </div>
    </section>
  );
}

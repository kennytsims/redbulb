import React from "react";
import { FaRegHandshake } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { MdScience } from "react-icons/md";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
export default function Subsection() {
  return (
    <div className="bg-red-700 w-full   lg:h-[40rem]  text-white  ">
      <div className=" flex justify-center">
        <div className="lg:w-1/2  ">
          <h1 className="sm:text-xl font-bold lg:font-normal lg:text-4xl m-5">
            Changing Occupation Health & Safety together
          </h1>
          <p className=" sm:tex-base lg:text-2xl mx-4">
            At the heart of Rebulb is creativity and innovation, achieved by
            building synergies with various stakeholders in the health and
            safety industry. This approach has enabled us to deliver a superior
            product, uniquely designed and optimized to address specific
            customer needs. In our pursuit of excellence, we have embedded
            science and technology into our business model and philosophy, while
            driving innovation through research and collaboration
          </p>
        </div>
      </div>
      <div className=" bg-white h-[60rem] lg:h-[50rem] flex flex-col sm:flex-col  lg:flex-row justify-center items-center lg:items-start  gap-5 mx-16">
        <div className=" text-center  w-[20rem] bg-white text-red-600 shadow-md rounded-md h-[12rem] lg:my-24">
          <FaRegHandshake size={50} color="red" className="m-auto" />
          <h1 className="text- lg:text-3xl font-bold lg:font-normal m-4">
            Collaboration
          </h1>
          <p className="text-sm lg:text-base">
            Building synergies with partners and stakeholders in the health and
            safety industry
          </p>
        </div>

        <div className=" text-center  w-[20rem] bg-white text-red-600 shadow-md rounded-md h-[12rem] lg:my-24">
          <GrTechnology size={50} color="red" className="m-auto" />
          <h1 className="text-xl lg:text-3xl font-bold lg:font-normal m-4">
            Techology
          </h1>
          <p className="text-sm lg:text-base">
            Using advanced technology to deliver quicker and at scale
          </p>
        </div>
        <div className="text-center  w-[20rem] bg-white text-red-600 shadow-md rounded-md h-[12rem] lg:my-24">
          <HiDocumentMagnifyingGlass size={50} color="red" className="m-auto" />
          <h1 className="text-xl lg:text-3xl font-bold lg:font-normal m-4">
            Research
          </h1>
          <p className="text-sm lg:text-base">
            Finding the best ways to deliver health and safety
          </p>
        </div>
        <div className="text-center   w-[20rem] bg-white text-red-600 shadow-md rounded-md h-[12rem] lg:my-24">
          <MdScience size={50} color="red" className="m-auto" />
          <h1 className="text-xl lg:text-3xl font-bold lg:font-normal m-4">
            Science
          </h1>
          <p className="text-sm lg:text-base">
            Adopting groundbreaking discoveries and using evidence-based
            techniques in health and safety.
          </p>
        </div>
      </div>
    </div>
  );
}

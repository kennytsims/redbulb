import React from "react";
import { FaCheckDouble } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { FaPuzzlePiece } from "react-icons/fa6";
export default function Article() {
  return (
    <div className="w-full h-[35rem] bg-gray-100 flex items-center justify-center  gap-5">
      <div className="grid sm:grid-col-1 lg:grid-cols-3 gap-5">
        <div className="flex flex-col items-center justify-center ">
          <FaPuzzlePiece size={100} />
          <h1 className="text-xl ">Customised Training </h1>
          <p className="text-center">
            Tailored to fit unique business needs and requlatory standards
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <FaGraduationCap size={100} />
          <h1 className="text-xl ">Expertise Across Industries</h1>
          <p className="text-center">
            specialised knowledge and experience across diverse industries
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaCheckDouble size={100} className="" />
          <h1 className="text-xl ">Go Beyound Complience</h1>
          <p className="text-center">
            We don’t just aim for the standard; we exceed it, ensuring you do
            too.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Header() {
  return (
    <header className="h-screen w-full bg-red-700  items-center rounded-bt-[100%]">
      <div className=" bg-white h-[90%] w-full rounded-br-[100%] bg-fireExtinguisher lg:flex">
        <div className="  bg-fireExtinguisher h-44 lg:w-1/3 sm:w-full rounded-xl border border-red-700 bg-white lg:mx-10">
          <h1 className="sm:text-lg font-bold lg:text-2xl text-center m-5">
            Caltivating Complience ,Harvesting Safety
          </h1>
          <p className="m-5 text-xs lg:text-base">
            Invest in occupational health and safety by choosing a reliable
            partner with a wealth of accumulated knowledge and experience.
            Rebulb is tried and tested by the industry to provide high-value
            training in occupational health and safety
          </p>
        </div>
      </div>
    </header>
  );
}

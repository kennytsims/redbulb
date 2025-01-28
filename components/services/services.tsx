import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/app/data/data";
import { FaBriefcaseMedical } from "react-icons/fa6";

export default function Service() {
  return (
    <div className="mb-24">
      <header className=" h-screen w-full   bg-[url('./gallery/pictures/FirstAidkit.png')] bg-no-repeat bg-contain bg-center flex items-center justify-center flex-col">
        <h1 className=" text-2xl lg:text-6xl text-center font-bold  text-red-700">
          Be prepared for emergencies
        </h1>
        <p className="text-xl text-red-700 ">Learn First Aid </p>
      </header>
      <div className="flex items-center justify-center my-16">
        <h1 className="text-2xl font-bold lg:font-normal lg:text-3xl  inline m-3">
          Take your Safety to the Next Level by Trainning with Us
        </h1>
      </div>

      <div className="grid  w-1/2 sm:grid-cols-1 gap-10 items-center m-auto">
        {services.map((service) => (
          <div
            className="grid  sm:grid-cols-1  lg:grid-cols-2 border  shadow-xl rounded-md "
            key={service.id}
          >
            <div>
              <Image
                src={service.image}
                alt={service.title}
                width={200}
                height={200}
                className="rounded-l-md h-[17rem] w-[20rem]"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold m-3">{service.title}</h1>
              <p className="m-5"> {service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

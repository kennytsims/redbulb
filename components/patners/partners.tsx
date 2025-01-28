import React from "react";
import Image from "next/image";
import { clients } from "@/app/data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Partners() {
  return (
    <section>
      <div className=" flex items-center justify-center mt-24 text-3xl">
        <h1 className="text-center">Partners ,Affiliates and Customers</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 h-[30rem] lg:h-[20rem]  w-full ">
        {clients.map((client) => (
          <div key={client.id}>
            <Image
              src={client.image}
              alt={client.title}
              width={200}
              height={200}
              className=" shadow-md h-24 rounded-md border border-red-600"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

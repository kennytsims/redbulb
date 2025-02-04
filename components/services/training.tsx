import { trainingModules } from "@/app/data/data";
import Image from "next/image";
import React from "react";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

export default function TrainingModule() {
  return (
    <div className="m-16 ">
      <div className="flex items-center justify-center m-10">
        <h1 className="text-3xl  inline bold">
          Taking Occupational Health & Safety to the Next Level
        </h1>
      </div>
      <div className="flex items-center justify-center gap-5 ">
        <ul className="grid lg:grid-cols-3 gap-5">
          {trainingModules.map((training, index) => (
            <li className=" flex items-center justify-center" key={index}>
              <Link href={"/services"}>
                <Card className=" hover:border-red-600 hover:border-4 text-xl hover:shadow-lg  h-34 w-[18rem] shadow-lg  hover:cursor-pointer">
                  <CardHeader className="flex items-center justify-center">
                    <div>
                      <Image
                        src={training.image}
                        alt={training.title}
                        width={280}
                        height={200}
                        className="rounded-md shadow-md mb-5 h-24"
                      />
                    </div>
                    <CardTitle>{training.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription>
                      {training.description}
                      <span className="text-red-600">readmore...</span>
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

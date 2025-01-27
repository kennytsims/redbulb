import React from "react";
import { FaEye } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import { FaHands } from "react-icons/fa";
export default function About() {
  return (
    <section>
      <header className="flex flex-col items-center justify-center h-screen w-full bg-[url('/gallery/pictures/firstAid.jpg')]  bg-cover bg-no-repeat">
        <h1 className="text-6xl text-center font-bold  text-red-700 ">
          Keep Your Work Environment Safe
        </h1>
        <p className="text-2xl text-red-700 m-5">
          Stay up to date with our first aid, fire safety, rescue and life
          support, and driver safety programs
        </p>
      </header>
      <div className="grid  grid-cols-1 lg:grid-cols-3 shadow-2xl  bg-red-700 text-white">
        <div className="m-10">
          <h1 className="font-bold text-3xl my-2">who are we?</h1>
          <p>
            Redbulb is committed to elevating workplace safety through our broad
            range of Occupational Health & Safety services. Each solution is
            tailored to ensure not only legal compliance but also the highest
            safety and efficiency standards.
          </p>
        </div>
        <div className="m-10">
          <h1 className="text-3xl font-bold my-3">what do we do?</h1>
          <h2 className="font-bold text-xl my-2">
            Customized health and Safety Trainining to meet Specific Needs
          </h2>
          <p>
            We understand that each industry has unique safety challenges. Our
            expertise spans various sectors, enabling us to craft safety
            solutions specific to each field. Rejecting a one-size-fits-all
            approach, we delve into your operational environment, developing
            strategies that ensure compliance and effectiveness. With Redbulb ,
            it’s not just about meeting standards; it’s about exceeding them.
          </p>
          <h2 className="font-bold text-xl my-3">
            Beyond Compliance: Cultivating Safety Culture
          </h2>
          <p>
            We go beyond mere compliance. We’re in the business of cultivating a
            safety culture. By educating and engaging employees, we transform
            their approach to workplace safety. This shift goes beyond immediate
            environments, fostering long-term behavioral changes and elevating
            safety standards.
          </p>
        </div>

        <div className="m-10">
          <h1 className="text-3xl font-bold my-3">what do we stand for?</h1>
          <h2 className="text-xl font-bold my-2">Innovation and Creativity</h2>
          <p className="">
            Innovation is our cornerstone. We continuously integrate
            cutting-edge technologies and methods in occupational health and
            safety. From advanced risk assessment tools to innovative training
            techniques, our clients always have access to the forefront of
            safety advancements. With redbulb, your occupational health and
            safety needs are managed with the latest and most effective tools
            and knowledge
          </p>
        </div>
      </div>
      <article className="flex items-center justify-center">
        <div className="   grid sm:grid-cols-1 lg:grid-cols-[1fr,1fr,2fr] m-16 w-3/4  p-10 ">
          <div className="shadow-2xl">
            <FaEye size={50} color="red" className="m-auto mt-5" />
            <h1 className="text-2xl text-center font-bold m-3">Vission</h1>
            <p className="m-5 ">
              Redbulb vision is to be the go to service provider in occupational
              health and safety with superiour services.
            </p>
          </div>
          <div className="shadow-2xl">
            <MdRocketLaunch size={50} color="red" className="m-auto mt-5" />
            <h1 className="text-2xl font-bold text-center m-3">Mission</h1>
            <p className="m-5">
              Redbulb mission is to empower the nation with knowledge and tools
              by providing comprehensive customized training and guidance in
              occupational health and safety optimized for specific
              environments.
            </p>
          </div>
          <div className=" shadow-2xl">
            <FaHands size={50} color="red" className="m-auto mt-5" />
            <h1 className="text-2xl text-center font-bold m-3">Values</h1>
            <p className="mx-10 my-5">
              The attitudes,behaviours and characteristics that reflects
              Redbulb.
            </p>
            <ul className="mx-5">
              <li className="mx-5">
                <span className="font-bold ">Excellence:-</span>Effectiveness in
                reponsponding to the needs of the members and stakeholders.
              </li>
              <li className="mx-5">
                <span className="font-bold">Good Ethical Conduct(Botho):-</span>{" "}
                accountability , transparency , fairness and Intergrity
              </li>
              <li className="mx-5">
                <span className="font-bold">Teamwork Player:-</span>
                collaboration, cooperation, and information sharing.
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}

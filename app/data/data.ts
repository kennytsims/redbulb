import { IconType } from "react-icons";
import { createElement } from "react";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { GiLifeSupport } from "react-icons/gi";
import { FaFireExtinguisher } from "react-icons/fa6";

export const services = [
  {
    id: 1,
    image: "/gallery/pictures/cardio.jpg",
    title: "First Aid Training Services",
    description:
      "Our Primary First Aid course provides vital knowledge and practical skills to address emergencies, offering immediate and confident care until professional help arrives",
  },
  {
    id: 2,
    image: "/gallery/pictures/fireOutbreak.jpg",
    title: "Fire Safety Training ",
    description:
      "Our comprehensive training cultivates expertise in fire safety and emergency response, empowering participants to effectively manage fire risks and protect colleagues in case of an incident",
  },
  {
    id: 3,
    image: "/gallery/pictures/rescue.jpg",
    title: "Rescue & Life Support",
    description:
      " The program is designed to provide knowledge and skills on Emergency Medical Technician(EMT),prehospital trauma care, basic life support, cardiopulmonary resuscitation(CPR).It also prepare Paramedics who are competent in the cognitive (knowledge), psychomotor (skills), and affective (behavior) learning domains to enter the profession.",
  },
  {
    id: 4,
    image: "/gallery/pictures/driverTrainning.jpg",
    title: "Driver Safety Training ",
    description:
      " Motor vehicle collisions are the leading cause of death in the workplace. That’s why driver safety training is so important. No one is better prepared to provide that training than redbulb.From our flagship defensive driving classroom programs to our award-winning hand-on training.So let us deliver the training that can help prevent injuries and save lives.",
  },
  {
    id: 5,
    image: "/gallery/pictures/firstAidKit.jpg",
    title: "first aid kits sales | Audits",
    description:
      " Redbulb provides variety of first aid supplies such as a bandages , gauze, and other essential items. To refill your dwindling supplies we are a call away  ",
  },
  {
    id: 6,
    image: "/gallery/pictures/she.jpg",
    title: "Safety ,Health & Environment (SHE)",
    description:
      "Our SHE Representative program equips employees with essential skills as per the requirements of the Occupational Health and Safety Act, enabling them to proactively manage health and safety within the workplace, ensuring a safer environment for all staff  members",
  },
];

export const trainingModules = [
  {
    title: "First Aid Training Services",
    image: "/gallery/pictures/cardio.jpg",
    description:
      "Be prepared for an emergency: Learn first aid and Save a life.",
    icon: createElement(FaBriefcaseMedical, { size: 60, color: "red" }),
  },
  {
    title: "Fire Safety Training ",
    image: "/gallery/pictures/fireOutbreak.jpg",
    description:
      "Protect your workforce and  ensure your team  act in case of fire outbreaks",
    icon: createElement(FaFireExtinguisher, { size: 60, color: "red" }),
  },
  {
    title: "Driver Safety Training ",
    image: "/gallery/pictures/driverTrainning.jpg",
    description: "Drive defensively to avoid collisions and crashes.",
    icon: createElement(FaAmbulance, { size: 60, color: "red" }),
  },
  {
    title: "Rescue & Life Support",
    image: "/gallery/pictures/rescue.jpg",
    description:
      "In critical moments have a responsive rescue and life support mission",
    icon: createElement(GiLifeSupport, { size: 60, color: "red" }),
  },
  {
    title: "first aid kits sales | Audits",
    image: "/gallery/pictures/firstAidKit.jpg",
    description: "Do not run out of supplies when they are needed the most",
    icon: createElement(FaFireExtinguisher, { size: 60, color: "red" }),
  },
  {
    title: "Safety,Health & Environment (SHE)",
    image: "/gallery/pictures/she.jpg",
    description: "Pillar of safety and compliance ",
    icon: createElement(FaFireExtinguisher, { size: 60, color: "red" }),
  },
];

export const clients = [
  { image: "/gallery/pictures/hrdc.png", title: "HRDC" },
  { image: "/gallery/pictures/beq.png", title: "beq" },
  { image: "/gallery/pictures/filano.png", title: "mtc" },
  { image: "/gallery/pictures/wuc.png", title: "wuc" },
];

import React from "react";
import Heart from "../assets/heart.png";
import Plant from "../assets/plant.png";
import Teach from "../assets/teach.png";
import Image from "next/image";
import DonateBtn from "./DonateBtn";

const objesctivesInfo = [
  {
    icon: Heart,
    description:
      "To provide a Christian home environment that will enhance the holistic development of every child i.e. (Spiritual, Physical, emotional and educational needs).",
  },
  {
    icon: Plant,
    description:
      "To be a home where everyone can thrive as part of an extended family acquiring and developing key emotional, spiritual and social skills in early life.",
  },
  {
    icon: Teach,
    description:
      "To provide education and skills that will enrich individuals and prepare them to face the outside world responsibly using their God given potential.",
  },
];

const Objectives = () => {
  return (
    <>
      <section className="p-20">
        <div className="container mx-auto ">
          <h2 className="text-5xl font-bold text-green-700 text-center md:text-left">
            Our Objectives
          </h2>
          <div className="flex flex-col md:flex-row space-y-10 items-center justify-center md:justify-between mt-5">
            {objesctivesInfo.map((item, index) => {
              return (
                <div
                  className="flex flex-col items-center md:items-start mt-10"
                  key={index}
                >
                  <Image
                    src={item.icon}
                    height="60"
                    width="60"
                    className="mb-10"
                    alt="icon"
                  />
                  <p className="text-xl text-center md:text-left md:max-w-lg mt-8">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 flex justify-center md:justify-start">
            <DonateBtn name="Donate" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Objectives;

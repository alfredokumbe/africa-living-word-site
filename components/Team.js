import React from "react";
import Dennis from "../Assets/Dennis.jpeg";
import George from "../Assets/George.jpeg";
import Judith from "../Assets/Judith.jpeg";
import Min from "../Assets/Min.jpeg";
import Monica from "../Assets/Monica.jpeg";
import Nashon from "../Assets/Nashon.jpeg";
import Tolli from "../Assets/Tolli.jpeg";
import Lucy from "../Assets/Lucy.jpeg";
import Ruth from "../Assets/Ruth.jpeg";
import Image from "next/image";

const Team = () => {
  return (
    <>
      <section className="p-20">
        <div className="container mx-auto">
          <h1 className="text-green-800 text-5xl text-center font-bold mb-10">
            Our Team
          </h1>
          <div className="flex flex-wrap space-x-20 items-center justify-center transition-all ease-in-out delay-150">
            <div className="flex flex-wrap space-x-10 space-y-10 items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={Dennis}
                  width="200"
                  height="200"
                  className="rounded-full"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
                <p className="text-3xl font-semibold mt-2 mb-2 ">
                  Dennis VanWagner
                </p>
                <p>Foregin Visitors Liason Officer</p>
              </div>
            </div>
            <div className="flex flex-wrap space-x-10 space-y-10 items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={Min}
                  width="200"
                  height="200"
                  className="rounded-full"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
                <p className="text-3xl font-semibold mt-2 mb-2 ">
                  Min Kim Werkheiser
                </p>
                <p>US Support Coodinator</p>
              </div>
            </div>
            <div className="flex flex-wrap space-x-10 space-y-10 items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={Tolli}
                  width="200"
                  height="200"
                  className="rounded-full"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
                <p className="text-3xl font-semibold mt-2 mb-2 ">Tolli Butz</p>
                <p>US Support Coodinatorr</p>
              </div>
            </div>
            <div className="flex flex-wrap space-x-10 space-y-10 items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={Lucy}
                  width="200"
                  height="200"
                  className="rounded-full"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
                <p className="text-3xl font-semibold mt-2 mb-2 ">Lucy Akoth</p>
                <p>Foregin Visitors Liason Officer</p>
              </div>
            </div>
            <div className="flex flex-wrap space-x-10 space-y-10 items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={Nashon}
                  width="200"
                  height="200"
                  className="rounded-full"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
                <p className="text-3xl font-semibold mt-2 mb-2 ">Nashon Ooko</p>
                <p>Pastor &amp; Missionary Advisor</p>
              </div>
            </div>
            <div className="flex flex-wrap space-x-10 space-y-10 items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={Monica}
                  width="200"
                  height="200"
                  className="rounded-full"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
                <p className="text-3xl font-semibold mt-2 mb-2 ">Monica Ooko</p>
                <p>Director</p>
              </div>
            </div>
            <div className="flex flex-wrap space-x-10 space-y-10 items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={Ruth}
                  width="200"
                  height="200"
                  className="rounded-full"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
                <p className="text-3xl font-semibold mt-2 mb-2 ">Ruth Ooko</p>
                <p>Treasurer</p>
              </div>
            </div>
            <div className="flex flex-wrap space-x-10 space-y-10 items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={George}
                  width="200"
                  height="200"
                  className="rounded-full"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
                <p className="text-3xl font-semibold mt-2 mb-2 ">George Ouma</p>
                <p>Secretary</p>
              </div>
            </div>
            <div className="flex flex-wrap space-x-10 space-y-10 items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={Judith}
                  width="200"
                  height="200"
                  className="rounded-full"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
                <p className="text-3xl font-semibold mt-2 mb-2 ">
                  Judith Achieng
                </p>
                <p>Social Worker</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

import Image from "next/image";
import HeroImg from "../assets/hero-image.png";
import DonateBtn from "./DonateBtn";

function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-white text-5xl font-bold mb-5 text-center">
          Donate and Help Africa Living Word Children’s Home
        </h1>
        <p className="text-2xl font-light text-center mb-5 text-white max-w-5xl">
          We are an orphanage housing over 50 needy children and we need your
          help. We are located in a rural area of East Seme Ward, Seme
          Sub-County, Kisumu County, Kenya, North, several Km off of Hwy C27.
        </p>
        <DonateBtn name="Donate" />
      </div>
    </>
  );
}

export default Hero;

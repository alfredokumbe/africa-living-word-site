import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroImg from "../assets/heroimg.jpg";
import WeAccept from "../components/WeAccept";
import Objectives from "../components/Objectives";
import WhatWeDo from "../components/WhatWeDo";
import OurNeeds from "../components/OurNeeds";
import Power from "../components/Power";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Africa Living Word Children&apos;s Home</title>
        <meta
          name="description"
          content="We are an orphanage housing over 50 needy children and we need your
          help. We are located in a rural area of East Seme Ward, Seme
          Sub-County, Kisumu County, Kenya, North, several Km off of Hwy C27."
        />
      </Head>
      <div className="h-screen relative overflow-hidden">
        <div className="absolute h-full w-full overflow-hidden -z-10 brightness-20">
          <Image
            src={HeroImg}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
          />
        </div>
        <Header />
        <Hero />
      </div>

      <WeAccept />
      <Objectives />
      <WhatWeDo />
      <OurNeeds />
      <Power />
      <Footer />
    </>
  );
}

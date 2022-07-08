import React from "react";
import OtherHeader from "../components/OtherHeader";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Head from "next/head";
const OurTeam = () => {
  return (
    <>
      <Head>
        <title>Our Team</title>
        <meta
          name="description"
          content="We are an orphanage housing over 50 needy children and we need your
          help. This is our team."
        />
      </Head>
      <OtherHeader />
      <Team />
      <Footer />
    </>
  );
};

export default OurTeam;

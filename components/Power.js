import React from "react";
import DonateBtn from "./DonateBtn";

const Power = () => {
  return (
    <>
      <section className="p-20 bg-green-800 mt-10">
        <div className="flex flex-col items-center">
          <p className="text-white text-4xl mb-5 text-center">
            You Have The Power To Put A Smile On an Orphaned Child Today
          </p>
          <DonateBtn name="Donate" />
        </div>
      </section>
    </>
  );
};

export default Power;

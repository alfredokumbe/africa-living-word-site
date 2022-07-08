import React from "react";
import DonateBtn from "./DonateBtn";

const WeAccept = () => {
  return (
    <div className="bg-green-700 py-10 px-4">
      <div className="flex items-center justify-between container mx-auto">
        <p className="text-white text-xl font-light max-w-4xl">
          We accept any kind donations that include dry foodstuff, household
          items like. The items go a long way in supporting the needs of the
          children under our care.
        </p>

        <a href="#donations">
          {" "}
          <button className="py-4 px-20 rounded-lg bg-white hover:bg-green-600 text-green-700 md:text-xl text-bold">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
};

export default WeAccept;

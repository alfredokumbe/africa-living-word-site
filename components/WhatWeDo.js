import React from "react";

const WhatWeDo = () => {
  return (
    <>
      <section className="bg-gray-200 p-24">
        <div className="container mx-auto flex items-center justify-center flex-col h-full">
          <h2 className="text-5xl font-bold text-green-700 text-center">What We Do.</h2>
          <p className="text-xl leading-normal text-center mt-10 max-w-4xl">
            The home generally offers care and protection through the provision
            of shelter, feeding, clothing, education, rescue, health care,
            counseling, reintegration and tracings. It has the capacity to house
            55 boys and girls at any given time. Meals are provided on daily
            basis including breakfast. Lost children are rescued and traced back
            or referred to other relevant home for support. Counselling is an
            ongoing and this is done through volunteers coming on pro bono
            basis.
          </p>
          <button className="border-yellow-500 py-2 mt-10 text-2xl px-6 border-2 text-yellow-500 hover:bg-yellow-500 hover:text-white rounded-lg">
            Patner With Us
          </button>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;

import React from "react";

const DonateBtn = ({ name }) => {
  return (
    <>
      <button className="py-4 px-20 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white text-xl text-bold">
        {name}
      </button>
    </>
  );
};

export default DonateBtn;

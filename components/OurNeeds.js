import React from "react";

const Needs = [
  {
    title: "Personal Effects",
    description:
      "Bathing soaps, bar soaps, toothpastes, sanitary towels, tissue papers, body oils and shoe polish. Others include towels and underwears.",
  },
  {
    title: "Accomodations",
    description:
      "Mattresses, blankets, bed sheets, beds. (Need to be changed after a period of time)",
  },
  {
    title: "Food Items",
    description:
      "Dry maize, beans, green grams, maize floor, cooking oils/fats, salt, sugar, vegetables and porridge flour.",
  },
  {
    title: "Funds",
    description:
      "School fees for high school, Personnel support, maintenance and repairs.",
  },
  {
    title: "Hygiene",
    description: "Disinfectants and detergents.",
  },
  {
    title: "Utilities",
    description: "Water and electricity bills.",
  },
  {
    title: "Education",
    description:
      "School uniforms (Girls tunic, sweaters, shoe, socks, boy’s shorts and trousers, shirts and game skits) assorted exercise books and revision books.",
  },
];

const OurNeeds = () => {
  return (
    <>
      <section id="donations">
        <div className="container mx-auto p-20">
          <h2 className="text-5xl font-bold text-green-800 mt-5 mb-5 text-center">
            Our Needs
          </h2>
          <div className="flex flex-wrap justify-center">
            {Needs.map((item, index) => {
              return (
                <div key={index} className="bg-gray-100 p-4 w-72 m-10">
                  <div className="border-b-4 border-green-800">
                    <p className="mt-3  font-semibold">{item.title}</p>
                  </div>
                  <p className="mt-2 text-xl">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurNeeds;

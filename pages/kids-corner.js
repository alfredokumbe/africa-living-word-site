import React from "react";
import OtherHeader from "../components/OtherHeader";
import Image from "next/image";
import Head from "next/head";

import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl572uon14h5701ug1rlpgwcd/master"
);

const QUERY = gql`
  {
    children {
      name
      image {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { children } = await graphcms.request(QUERY);

  return {
    props: {
      children,
    },
    revalidate: 60,
  };
}

const KidsCorner = ({ children }) => {
  return (
    <>
      <Head>
        <title>Kid&apos;s Corner</title>
        <meta
          name="description"
          content="We are an orphanage housing over 50 needy children and we need your
          help."
        />
      </Head>
      <OtherHeader />
      <div className="container mx-auto">
        <h1 className="text-5xl mb-10 font-bold text-green-800 text-center">
          Our Children
        </h1>
        <div className="flex flex-wrap space-x-14 ">
          {children.map((child, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center"
                key={index}
              >
                <Image
                  src={child.image[0].url}
                  width="200"
                  height="200"
                  alt={child.name}
                  className="rounded-full"
                />
                <p className="text-2xl font-regular mt-2">{child.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default KidsCorner;

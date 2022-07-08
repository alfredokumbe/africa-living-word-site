import GallerySlugs from "../../components/GallerySlugs";
import OtherHeader from "../../components/OtherHeader";
import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import Head from "next/head";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl572uon14h5701ug1rlpgwcd/master"
);

const QUERY = gql`
  {
    contents {
      title
      slug
    }
  }
`;

export async function getStaticProps() {
  const { contents } = await graphcms.request(QUERY);

  return {
    props: {
      contents,
    },
    revalidate: 60,
  };
}
const index = ({ contents }) => {
  return (
    <>
      <Head>
        <title>Our Gallery</title>
        <meta
          name="description"
          content="We are an orphanage housing over 50 needy children and we need your
          help. Here are some our activities, facilities and progress over the years.
          We are a growing community and we invite you to help us make the lives
          of our children even better."
        />
      </Head>
      <OtherHeader />
      <main className="container mx-auto p-20">
        <h1 className="text-center text-5xl text-green-800 font-bold mb-10">
          Welcome To Our Gallery
        </h1>
        <p className="text-center text-xl text-green-800">
          Here are some our activities, facilities and progress over the years.
          We are a growing community and we invite you to help us make the lives
          of our children even better.
        </p>
        <div className="flex items-center justify-center flex-wrap mt-5 space-x-5">
          <GallerySlugs slugs={contents} />
        </div>
      </main>
    </>
  );
};

export default index;

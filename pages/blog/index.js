import React from "react";
import OtherHeader from "../../components/OtherHeader";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../../components/BlogCard";
import Head from "next/head";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl572uon14h5701ug1rlpgwcd/master"
);

const QUERY = gql`
  {
    blogs {
      title
      description
      slug
    }
  }
`;

export async function getStaticProps() {
  const { blogs } = await graphcms.request(QUERY);

  return {
    props: {
      blogs,
    },
    revalidate: 60,
  };
}
const index = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Our Gallery</title>
        <meta
          name="description"
          content="We are an orphanage housing over 50 needy children and we need your
          help. Read some of our stories."
        />
      </Head>
      <OtherHeader />
      <div className="container mx-auto mt-12">
        <h1 className="text-center text-green-800 text-5xl font-bold">
          Welcome To Our Blog
        </h1>
        <div className="flex justify-center flex-wrap space-x-10 mt-10">
          {blogs.map((item, index) => {
            return (
              <BlogCard
                title={item.title}
                description={item.description}
                slug={item.slug}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default index;

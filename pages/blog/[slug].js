import { GraphQLClient, gql } from "graphql-request";
import Footer from "../../components/Footer";
import OtherHeader from "../../components/OtherHeader";
import Power from "../../components/Power";
import Head from "next/head";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl572uon14h5701ug1rlpgwcd/master"
);

const QUERY = gql`
  query Content($slug: String!) {
    blog(where: { slug: $slug }) {
      title
      description
      content {
        html
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    blogs {
      slug
    }
  }
`;

const Post = ({ blog }) => {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
      </Head>
      <OtherHeader />
      <div className="container mx-auto">
        <h1 className="text-5xl text-center mt-10 font-bold">{blog.title}</h1>
        <div className="max-w-7xl mx-auto mt-10">
          <div
            dangerouslySetInnerHTML={{ __html: blog.content.html }}
            className="text-2xl blog-content"
          />
        </div>
      </div>
      <Power />
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const { blogs } = await graphcms.request(SLUGLIST);

  return {
    paths: blogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const { blog } = await graphcms.request(QUERY, { slug });

  return {
    props: {
      blog,
    },
    revalidate: 10,
  };
}

export default Post;

import { GraphQLClient, gql } from "graphql-request";
import Footer from "../../components/Footer";
import Power from "../../components/Power";
import ImageGallery from "react-image-gallery";
import GallerySlugs from "../../components/GallerySlugs";
import OtherHeader from "../../components/OtherHeader";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl572uon14h5701ug1rlpgwcd/master"
);

const QUERY = gql`
  query Content($slug: String!) {
    content(where: { slug: $slug }) {
      image {
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    contents {
      slug
    }
  }
`;
const SLUGQUERY = gql`
  {
    contents {
      title
      slug
    }
  }
`;

const Post = ({ content, contents }) => {
  const imgObj = content.image;

  const images = imgObj.map(({ url: original }) => ({ original }));

  return (
    <>
      <OtherHeader />
      <div className="flex items-center justify-center flex-wrap mt-5 space-x-5 container mx-auto">
        <GallerySlugs slugs={contents} />
      </div>
      <div className="container mx-auto p-20 h-screen">
        <ImageGallery items={images} />
      </div>
      <Power />
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const { contents } = await graphcms.request(SLUGLIST);

  return {
    paths: contents.map((content) => ({ params: { slug: content.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const { content } = await graphcms.request(QUERY, { slug });
  const { contents } = await graphcms.request(SLUGQUERY);

  return {
    props: {
      content,
      contents,
    },
    revalidate: 10,
  };
}

export default Post;

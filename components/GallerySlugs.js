import Link from "next/link";

const GallerySlugs = ({ slugs }) => {
  return (
    <>
      {slugs.map((item, index) => {
        return (
          <>
            <Link href={`/gallery/${item.slug}`}>
              <a
                key={index}
                className="p-3 text-green-800 border border-green-800 mt-3 rounded-md hover:bg-green-800 hover:text-white hover:cursor-pointer"
              >
                {item.title}
              </a>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default GallerySlugs;

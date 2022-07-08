import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="bg-black h-32">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <ul className=" mr-6 text-lg text-white flex flex-wrap mt-5">
            <Link href="/our-team">
              <a>
                <li className="mr-10 cursor-pointer hover:text-yellow-500">
                  Our Team
                </li>
              </a>
            </Link>
            <Link href="/kids-corner">
              <a>
                <li className="mr-10 cursor-pointer hover:text-yellow-500">
                  Kid&apos;s Corner
                </li>
              </a>
            </Link>
            <Link href="/gallery">
              <a>
                <li className="mr-10 cursor-pointer hover:text-yellow-500">
                  Gallery
                </li>
              </a>
            </Link>
            <li className="mr-10 cursor-pointer hover:text-yellow-500">Blog</li>
          </ul>
          <p className="text-white text-xl mt-4">
            2022 Africa Living Word Children&apos;s Home | All Rights Reserved
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;

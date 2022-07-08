import React from "react";
import Logo from "../Assets/logo.png";
import Image from "next/image";
import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const OtherHeader = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggle = () => {
    setNavIsOpen(!navIsOpen);
  };
  return (
    <>
      <div className={`${!navIsOpen ? "hidden" : ""} transition-opacity`}>
        <XIcon
          className="h-20 w-20 absolute top-5 right-5 font-light "
          onClick={toggle}
        />
        <ul className=" flex items-center justify-center flex-col space-y-8 h-screen w-screen text-3xl md:hidden">
          <Link href="/our-team">
            <li className="cursor-pointer hover:text-green-500">Our Team</li>
          </Link>
          <Link href="/kids-corner">
            <li className="cursor-pointer hover:text-green-500">
              Kid&apos;s Corner
            </li>
          </Link>
          <Link href="/gallery">
            <li className="cursor-pointer hover:text-green-500">Gallery</li>
          </Link>
          <Link href="/blog">
            <li className="cursor-pointer hover:text-green-500">Blog</li>
          </Link>
        </ul>
      </div>

      <div className="container mx-auto pt-10 px-4 md:px-0">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a>
              <Image
                src={Logo}
                alt="logo"
                width="200"
                height="50"
                className="cursor-pointer"
              />
            </a>
          </Link>
          <div className="flex items-center">
            <ul className=" mr-6 text-lg  hidden md:flex ">
              <Link href="/our-team">
                <a>
                  <li className="mr-10 cursor-pointer hover:text-green-500">
                    Our Team
                  </li>
                </a>
              </Link>
              <Link href="/kids-corner">
                <a>
                  <li className="mr-10 cursor-pointer hover:text-green-500">
                    Kid&apos;s Corner
                  </li>
                </a>
              </Link>
              <Link href="/gallery">
                <a>
                  <li className="mr-10 cursor-pointer hover:text-green-500">
                    Gallery
                  </li>
                </a>
              </Link>
              <Link href="/blog">
                <a>
                  <li className="mr-10 cursor-pointer hover:text-green-500">
                    Blog
                  </li>
                </a>
              </Link>
            </ul>

            <button className="border-green-800 py-2 px-6 border-2 text-green-800 hover:bg-green-900 hover:text-white rounded-lg">
              Contact Us
            </button>
            <MenuIcon
              className="h-10 w-10 text-green-500 ml-3 md:hidden"
              onClick={toggle}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherHeader;

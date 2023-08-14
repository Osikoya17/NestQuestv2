"use client";
import "./globals.css";
import Image from "next/legacy/image";
import { Raleway } from "next/font/google";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  Twitter,
  AlignJustify,
  X,
} from "lucide-react";
import { Button } from "antd";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import { useRef, useState } from "react";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [user, setUser] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toogleNav = () => {
    expanded ? setExpanded(false) : setExpanded(true);
  };

  return (
    <html lang="en">
      <body style={raleway.style}>
        <nav className="flex flex-row justify-between bg-white z-50 shadow-sm w-full h-16 p-5 sticky top-0">
          <div className="lg:basis-1/4 flex justify-center text-sm ">
            <Button
              onClick={toogleNav}
              className="flex items-center justify-start border-none lg:hidden"
            >
              {expanded ? <X size={30} /> : <AlignJustify size={30} />}
            </Button>
            <Image src={Logo} alt="" />
          </div>
          <div className=" hidden basis-1/2 md:flex font-medium  justify-evenly ">
            <Link href={"/"}>
              <h6 className="text-sm font-bold border-b-2 border-black text-black cursor-pointer ">
                Home
              </h6>
            </Link>
            <Link href={"about"}>
              <h6 className="text-sm cursor-pointer">About Us</h6>
            </Link>
            <Link href={"/faqs"}>
              <h6 className="text-sm cursor-pointer">FAQs</h6>
            </Link>
            <Link href={"/contact"}>
              <h6 className="text-sm cursor-pointer">Contact Us</h6>
            </Link>
          </div>
          {user && (
            <div className="basis-1/4 flex mb-5 justify-center">
              <div className="leading-2">
                <h1 className="font-semibold">John Doe</h1>
                <p className="text-sm text-right -mt-2">Student</p>
              </div>
              <div className="bg-slate-200 rounded-full w-8 h-8 ml-1">
                {/* <Image
              /> */}
              </div>
            </div>
          )}
          {!user && (
            <div className="basis-1/4 flex justify-center">
              <Link href={"/login"}>
                <Button type="text" className="text-sm" style={raleway.style}>
                  Sign In
                </Button>
              </Link>
              <Link href={"/signup"}>
                <Button
                  type="primary"
                  className="bg-[#0042EC] border-none text-sm ml-2 h-8 text-white"
                  style={raleway.style}
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </nav>
        {expanded && (
          <div className="w-full block lg:hidden absolute bg-white shadow-md z-50">
            <Link href={"/home"}>
              <h3 className="border flex text-center p-5">Home</h3>
            </Link>
            <Link href={"/about-us"}>
              <h3 className="border flex text-center p-5">About Us</h3>
            </Link>
            <Link href={"/faqs"}>
              <h3 className="border flex text-center p-5">FAQs</h3>
            </Link>
            <Link href={"/contact"}>
              <h3 className="border flex text-center p-5">Contact Us</h3>
            </Link>
          </div>
        )}
        {children}
        <footer className="bg-[#1080cf] relative w-full" style={raleway.style}>
          {/* DESKTOP */}
          <div className="absolute -z-20 w-full h-full hidden lg:block">
            <Image
              src="/footpng2x.png"
              alt=""
              className="w-full h-full"
              width={2000}
              height={820}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <section className="lg:flex px-5 lg:pl-20 lg:pr-20 lg:pt-20 pt-6 lg:p-0 lg:justify-between flex-wrap text-white">
            <div className="basis-1/4 lg:pl-7 text-left mt-7 lg:mt-0">
              <h2 className="text-2xl font-semibold">NestQuest</h2>
              <p className="mt-2 text-sm">
                Unlock Your Dream Home: The Trusted Choice for House Rentals
              </p>
            </div>
            <div className="basis-1/2 mt-8 lg:mt-0 mr-16 lg:px-20 text-left lg:text-center">
              <h2 className="text-2xl font-semibold">Connect with Us:</h2>
              <h3 className="text-2xl font-semibold">
                Your Journey Starts Here!
              </h3>
              <Button className="border text-white mt-3 border-l-white">
                Contact Us
              </Button>
            </div>
          </section>
          <div className="px-6">
            <div className="border-b-2 w-full mt-10 lg:mt-24 px-10"></div>
          </div>
          <div className="text-white text-center text-sm mt-16 hidden lg:block">
            <span className="ml-16">About Us</span>
            <span className="ml-16">FAQs</span>
            <span className="ml-16">Terms and Conditions</span>
            <span className="ml-16">Contact Us</span>
          </div>
          <div className="text-white text-center mt-12 flex justify-center">
            <Twitter className="ml-6" />
            <FacebookIcon className="ml-6" />
            <InstagramIcon className="ml-6" />
            <GithubIcon className="ml-6" />
          </div>
          <p className="text-center mt-10 text-white">
            2023 NestQuest Inc. All rights reserved.
          </p>
          ssss
        </footer>
      </body>
    </html>
  );
}

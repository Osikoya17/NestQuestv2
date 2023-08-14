import React from "react";
import { Button } from "antd";
import { Inter } from "next/font/google";
// import { PlusIcon } from "../components/icon";
import { PlusIcon } from "lucide-react";
import { BigSearchIcon } from "../utils/util_icon";

const inter = Inter({
  subsets: ["latin"],
});

export default function faqs() {
  return (
    <main
      className="px-2 md:px-0 bg-[#F8F8F9] h-screen py-10"
      style={inter.style}
    >
      <section className="sm:px-4 flex justify-center mt-8">
        <div className="flex flex-col gap-y-6">
          <div
            id="A"
            className="border-8 border-white shadow-lg  bg-[#FFFFFF] "
          >
            <div id="content" className="flex gap-x-6">
              <div id="icon">
                <span>
                  <PlusIcon className="fill-[#376FFF]" />
                </span>
              </div>
              <p>How do i get started with NestQuest?</p>
            </div>
          </div>
          <div
            id="A"
            className="border-8 border-white shadow-lg  bg-[#FFFFFF] "
          >
            <div id="content" className="flex gap-x-6">
              <div id="icon">
                <span>
                  <PlusIcon className="fill-[#376FFF]" />
                </span>
              </div>
              <p>How do i get started with NestQuest?</p>
            </div>
          </div>
          <div
            id="A"
            className="border-8 border-white shadow-lg  bg-[#FFFFFF] "
          >
            <div id="content" className="flex gap-x-6">
              <div id="icon">
                <span>
                  <PlusIcon className="fill-[#376FFF]" />
                </span>
              </div>
              <p>How does NestQuest&apos;s roommate matching work?</p>
            </div>
          </div>
          <div
            id="A"
            className="border-8 border-white shadow-lg  bg-[#FFFFFF] "
          >
            <div id="content" className="flex gap-x-6">
              <div id="icon">
                <span>
                  <PlusIcon className="fill-[#376FFF]" />
                </span>
              </div>
              <p>Is NestQuest safe and secure for transactions ?</p>
            </div>
          </div>
          <div
            id="A"
            className="border-8 border-white shadow-lg  bg-[#FFFFFF] "
          >
            <div id="content" className="flex gap-x-6">
              <div id="icon">
                <span>
                  <PlusIcon className="fill-[#376FF]" />
                </span>
              </div>
              <p>Can i communicate with landlord directly on NestQuest?</p>
            </div>
          </div>
          <div
            id="A"
            className="border-8 border-white shadow-lg  bg-[#FFFFFF] "
          >
            <div id="content" className="flex gap-x-6">
              <div id="icon">
                <span>
                  <PlusIcon />
                </span>
              </div>
              <p>What if I encounter issues with app or have questions ?</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-4 sm:px-4 flex mt-8 justify-center">
        <div
          id="searchbar"
          className=" shadow-lg border-3 min-h-24 p-6  grid grid-cols-2 bg-[#E8EEFF] md:flex gap-x-8 items-center"
        >
          <div id="searchIcon">
            <BigSearchIcon />
          </div>
          <div
            id="content"
            className="flex flex-col gap-y-3 md:flex-col md:gap-y-0"
          >
            <h4>Cant find what you are looking for?</h4>
            <p className="text-[#898989]">
              Get articles to get up and running quick and easy
            </p>
          </div>

          <Button className="ml-48 mt-3 bg-[#E8EEFF] flex justify-center w-40  border-[#376FFF] rounded-lg h-10 items-center text-[#376FFF] md:ml-0  lg:mt-0 ">
            Write Us
          </Button>
        </div>
      </section>
    </main>
  );
}

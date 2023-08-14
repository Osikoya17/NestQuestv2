"use client";
import { Button, Input } from "antd";
import React from "react";
import { TextField } from "@mui/material";
import {
  TwitterIcon,
  FacebookIcon,
  SmallMessageIcon,
  InstagramIcon,
  SemiMediumBlackIcon,
  SemiMediumGreyIcon,
  SemiMediumBlueIcon,
} from "../utils/util_icon";

export default function contact() {
  return (
    <main className="bg-[#F8F8F9] h-screen px-2 mt-10 md:pt-14 md:mt-44 flex flex-col relative items-center">
      <div id="container" className="text-center md:text-start">
        <h2 className="italic   font-bold text-lg md:text-3xl tracking-widest">
          Say hi to the team!
        </h2>
        <p className="text-sm md:text-md">
          Feel free to contact us and we will get back to you as soon as we can
        </p>
      </div>
      <div id="middle_container" className="mr-8 flex items-center gap-x-10">
        <form action="" className="flex flex-col gap-y-6" onSubmit={""}>
          <div id="input">
            <TextField
              id="standard-basic"
              placeholder="Name"
              variant="standard"
              className="italic w-64"
              name="name"
              type="text"
            />
          </div>
          <div id="input">
            <TextField
              id="standard-basic"
              placeholder="Email"
              variant="standard"
              className="italic w-64"
              type="email"
            />
          </div>
          <div id="input">
            <TextField
              id="standard-basic"
              placeholder="Your message"
              variant="standard"
              className="italic w-64 md:mb-6"
            />
          </div>
        </form>
        <div className="invisible md:visible border-l-2 border-[#343434] h-72 w-full mt-3 mb-7"></div>
        <div
          id="middle_container"
          className="hidden md:visible md:flex flex-col gap-y-8 mt-14"
        >
          <article className="flex gap-x-3">
            <div id="icon">
              <SmallMessageIcon />
            </div>
            <div id="">
              <p className="text-[#343434] text-md">
                Nestquestsupport@gmail.com
              </p>
            </div>
          </article>
          <article className="flex gap-x-3">
            <div id="icon">
              <InstagramIcon />
            </div>
            <div id="">
              <p className="text-[#343434] text-md">OfficialNestQuest</p>
            </div>
          </article>
          <article className="flex gap-x-3">
            <div id="icon">
              <TwitterIcon />
            </div>
            <div id="">
              <p className="text-[#343434] text-md">@NestQuest</p>
            </div>
          </article>
          <article className="flex gap-x-3">
            <div id="icon">
              <FacebookIcon />
            </div>
            <div id="">
              <p className="text-[#343434] text-md">Nestquestofficial</p>
            </div>
          </article>
        </div>
      </div>
      <div
        id="Blue_Icon"
        className="invisible md:visible absolute top-36 right-56 "
      >
        <SemiMediumBlackIcon />
      </div>
      <div
        id="Blue_Icon"
        className="invisible md:visible absolute bottom-80 right-96"
      >
        <SemiMediumBlueIcon />
      </div>
      <div
        id="Blue_Icon"
        className="invisible md:visible absolute bottom-6 left-10"
      >
        <SemiMediumGreyIcon />
      </div>
      <div
        id="Blue_Icon"
        className="invisible md:visible absolute top-6 right-96"
      >
        <SemiMediumBlueIcon />
      </div>
      <div id="button" className="flex mt-4 justify-center">
        <Button
          type="submit"
          className="bg-[#376FFF] w-52 h-12 text-white rounded-full hover:text-white focus:text-white"
        >
          Message Us
        </Button>
      </div>
    </main>
  );
}

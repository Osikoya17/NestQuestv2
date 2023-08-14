import { Button } from "antd";
import { Lato } from "next/font/google";
import Image from "next/image.js";

import { CiLocationOn } from "react-icons/ci";

import { AiOutlineStar } from "react-icons/ai";
import { IoIosArrowDropright, IoIosArrowDropleft, Io } from "react-icons/io";

import {
  HomeIcon,
  SearchIcon,
  SmallYellowDot,
  SmallPurpleDot,
  StarIcon,
  SmallBlueDot,
  SmallBrownDot,
  SmallGreenDot,
  Line,
  MessagingIcon,
  PeopleIcon,
  LocationIcon,
  MediumGreenDot,
  SmallStarIcon,
  MessagingIconLeft,
} from "./utils/util_icon.js";

const lat = Lato({
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata = {
  title: "NestQuest",
  description:
    "Welcome to NestQuest,where the quest for your dream student begins with a smile.",
};

// // const url = "";
// // async function getHomes(url) {
// //   const res = axios(url);
// }
// const homes = await getHomes();

export default async function Home() {
  return (
    <main className="mx-4 md:mx-28">
      {/* header section */}
      <section className="mt-6 flex relative flex-col-reverse md:flex-row ">
        <div id="list1" className="mt-6 md:flex-[2]  flex flex-col space-y-10">
          <div
            id="heading-tags"
            className="text-4xl font-bold text-center md:text-start"
          >
            <h2 className={lat.className}>Your Home,</h2>
            <h2 className={lat.className}>
              Your
              <span className="ml-2 text-blue-800 font-bold text-4xl">
                Quest
              </span>
            </h2>
          </div>
          <div
            id="paragraph"
            className="w-full text-center font-normal leading-[190%] text-md md:text-start "
          >
            <p className="text-[#524F4F]">
              Welcome to Nest Quest,where the quest
            </p>
            <p className="text-[#524F4F]">
              for your dream student home begins with
            </p>
            <p className="text-[#524F4F]">
              a smile.Find,connect, and thrive in
            </p>
            <p className="text-[#524F4F]">
              the perfect place to call your own.
            </p>
          </div>
          <div id="button" className="flex justify-center md:justify-start">
            <Button className="text-white bg-blue-800 text-center ">
              Begin Quest
            </Button>
          </div>
          <div id="green_dot" className="invisible md:visible ml-96">
            <MediumGreenDot />
          </div>
        </div>
        <div id="Hero_Section_Image" className="justify-items-center">
          <Image
            src="/HeroSection.png"
            alt=""
            // className="w-full ssh-full"
            width={250}
            height={250}
            layout="responsive"
          />
        </div>
      </section>

      {/* Showcase section */}
      <section id="showcase" className="mt-6">
        <div id="Content" className="space-y-2">
          <div id="show1">
            <h2 className="text-[#376FFF] tracking-widest  text-center font-semibold text-xl text-wider md:text-start">
              Top 10 Apartments
            </h2>
          </div>
          <div
            id="show_paragraph"
            className="text-center text-lg md:text-start "
          >
            <p className="text-md text-[#524F4F]">
              Your Quest Awaits: Discover Our Top Ten Apartments
            </p>
          </div>
          <div id="button" className="flex justify-center md:justify-start">
            <Button
              className="text-white bg-blue-800 text-center"
              href="/signup"
            >
              Begin Quest
            </Button>
          </div>
        </div>

        <div id="Carousel" className="flex mt-12 gap-x-6 justify-center ">
          <div id="Carousel" className="flex mt-12 gap-x-6 justify-center ">
            {/* {homes.map((home) => {
            <MyComponent key={home.id} {...home} />;
          })} */}

            <div className="flex-col items-center mt-32">
              <IoIosArrowDropleft className="fill-[#376FFF] " />
            </div>
            <div
              id=""
              className="invisible md:visible max-w-60  min-h-60 shadow-2xl px-4 bg-white relative rounded-xl"
            >
              <div id="image">
                <Image
                  src="/CarouselImages.png"
                  width={250}
                  height={100}
                  alt="NestQuest"
                />
              </div>
              <div id="content" className="mt-2">
                <h5 className="font-bold">$1250/year</h5>
                <p>2 bedroom flat</p>
                <p className="flex items-center">
                  <span>
                    <CiLocationOn className="fill-[#376FFF]" />
                  </span>
                  Damico,Ile-Ife
                </p>
              </div>
              <div className="p-1 top-1 bg-red-500 text-white absolute ">
                <p>10% OFF</p>
              </div>
            </div>
            {/* Second product */}
            <div
              id="2"
              className="max-w-2xl min-h-60 shadow-2xl px-4 bg-white relative rounded-xl"
            >
              <div id="image">
                <Image
                  src="/CarouselImages.png"
                  width={250}
                  height={100}
                  alt="NestQuest"
                />
              </div>
              <div id="content" className="mt-2">
                <h5 className="font-bold">$1250/year</h5>
                <p>2 bedroom flat</p>
                <p className="flex items-center">
                  <span>
                    <CiLocationOn className="fill-[#376FFF]" />
                  </span>
                  Damico,Ile-Ife
                </p>
              </div>
              <div className="p-1 top-1 bg-red-500 text-white absolute ">
                <p>10% OFF</p>
              </div>
            </div>
            {/* third home */}
            <div
              id="3"
              className="invisible md:visible max-w-60  min-h-60 shadow-2xl px-4 bg-white relative rounded-xl"
            >
              <div id="image">
                <Image
                  src="/CarouselImages.png"
                  width={250}
                  height={100}
                  alt="NestQuest"
                />
              </div>
              <div id="content" className="mt-2">
                <h5 className="font-bold">$1250/year</h5>
                <p>2 bedroom flat</p>
                <p className="flex items-center">
                  <span>
                    <CiLocationOn className="fill-[#376FFF]" />
                  </span>
                  Damico,Ile-Ife
                </p>
              </div>
              <div className="p-1 top-1 bg-red-500 text-white absolute ">
                <p>10% OFF</p>
              </div>
            </div>
            <div className="flex flex-col items-center mt-32 ">
              <IoIosArrowDropright className="fill-[#376FFF] " />
            </div>
          </div>
        </div>
      </section>
      <section className=" flex flex-col mt-14  lg:flex-row gap-28 ">
        <div
          id="1"
          className="flex text-center flex-col space-y-4 md:text-start"
        >
          <div className="font-bold text-3xl">
            <h2 className="">What We</h2>
            <h2 className="text-blue-400">Offer</h2>
          </div>
          <div id="2">
            <p className="text-[#524F4F] md:text-md ">
              Heres our top ten ranking apartments,
            </p>
            <p className="text-[#030303]">Rated by our top experts!</p>
          </div>
          <div id="button" className="flex justify-center md:justify-start">
            <Button
              className="text-white bg-blue-800 text-center"
              href="/signup"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div id="2" className="mb-24 md:mt-10 text-center grid grid-cols-1 ">
          <div
            id="before_extension"
            className="flex flex-col gap-4 md:flex-row gap-x-10"
          >
            <div id="item1" className="flex flex-col space-y-1">
              <div className=" flex justify-center">
                <div
                  id="svg_1"
                  className="bg-[#82FF80;] w-[50px] h-[50px] rounded-lg flex justify-center items-center"
                >
                  <SearchIcon />
                </div>
              </div>
              <h5 className="font-bold">Smart Search Algorithm</h5>
              <p className="text-[#524F4F] md:text-sm">
                Tailored student homes,just
              </p>
              <p className="text-[#524F4F]  md:text-sm">
                for you—budget-friendly
              </p>
              <p className="text-[#524F4F]  md:text-sm">and personalized.</p>
            </div>
            {/* list 2 */}
            <div id="item2" className="flex flex-col space-y-1">
              <div className="flex justify-center">
                <div
                  id="svg_2"
                  className="bg-[#80A3FF] w-[50px] relative h-[50px] rounded-lg flex justify-center items-center"
                >
                  <div className="absolute top-6 right-4 ">
                    <MessagingIconLeft />
                  </div>
                  <MessagingIcon />
                </div>
              </div>
              <h4 className="font-bold">Transparent Communication</h4>
              <p className="text-[#524F4F]  md:text-sm">
                Build trust with direct landlord
              </p>
              <p className="text-[#524F4F] md:text-sm">
                communication,informed
              </p>
              <p className="text-[#524F4F] md:text-sm">decisions made easy.</p>
            </div>
            {/* item 3 */}
            <div
              id="item3"
              className="flex flex-col justify-items-center space-y-1"
            >
              <div className="flex justify-center">
                <div
                  id="svg_3"
                  className="bg-[#FFA680] w-[50px] h-[50px] flex justify-center items-center rounded-lg"
                >
                  <PeopleIcon />
                </div>
              </div>
              <h4 className="font-bold">Roommate Matching</h4>
              <p className="text-[#524F4F] md:text-sm">Discover compatible</p>
              <p className="text-[#524F4F] md:text-sm">roommates through our</p>
              <p className="text-[#524F4F] md:text-sm">
                cutting-edge algorithm.
              </p>
            </div>
          </div>
          <div
            id="extension"
            className="flex flex-col gap-4 ml-2 md:flex-row mt-6 lg:ml-40 "
          >
            {/* item 4 */}
            <div
              id="item4"
              className="flex flex-col justify-items-center space-y-1"
            >
              <div className="flex justify-center">
                <div
                  id="svg_4"
                  className="bg-[#BF80FF] w-[50px] h-[50px] flex justify-center items-center rounded-lg"
                >
                  <HomeIcon />
                </div>
              </div>
              <h4 className="font-bold">List Houses Effectively</h4>
              <p className="text-[#524F4F] text-center md:text-sm">
                Hassle-free property
              </p>
              <p className="text-[#524F4F] text-center  md:text-sm">
                showcase,reaching eager
              </p>
              <p className="text-[#524F4F] text-center  md:text-sm">
                student renters
              </p>
            </div>
            {/* item 5 */}
            <div
              id="item3"
              className="ml-1 md:flex flex-col justify-items-center space-y-1 lg:ml-4"
            >
              <div className="flex justify-center">
                <div
                  id="svg_5"
                  className="bg-[#F66] w-[50px] h-[50px] flex-wrap flex justify-center items-center rounded-lg"
                >
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
              </div>
              <h4 className="font-bold">Strong Ratings</h4>
              <p className="text-[#524F4F] text-center md:text-sm">
                Community-backed
              </p>
              <p className="text-[#524F4F] text-center md:text-sm">
                assurance for well-informed.
              </p>
              <p className="text-[#524F4F] md:text-sm">
                accommodation choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Further Information Sections */}
      <section
        id="further_information_section"
        className="mt-24 flex flex-col "
      >
        <div
          id="a"
          className="flex flex-col gap-y-8  md:flex-row gap-x-44 items-center"
        >
          <div id="imageA">
            <Image
              src="/Unlock Potential (2).png"
              alt="NestQuest"
              width={300}
              height={250}
            />
          </div>
          <div id="ContentA" className=" flex flex-col space-y-6">
            <h2 className="font-bold w-[60%] text-lg">
              Unlock your property&apos;s potential
            </h2>
            <p className="text-[#524F4F] text-sm">
              Unlock your property&apos;s potential by effortlessly
            </p>
            <p className="text-[#524F4F] text-sm">
              listing with us, reaching a vast audiences eager
            </p>
            <p className="text-[#524F4F] text-sm">
              students, and building trust through direct
            </p>
            <p className="text-[#524F4F] text-sm">
              communication–making renting easier and more
            </p>
            <p className="text-[#524F4F] text-sm">rewarding!</p>
          </div>
        </div>
        <div
          id="b"
          className="mr-0 flex  flex-col gap-y-9 md:flex-row-reverse items-center lg:mr-80 gap-x-44 "
        >
          <div id="imageB">
            <Image
              src="/Your information.png"
              alt="NestQuest"
              width={300}
              height={250}
              // layout="responsive"
            />
          </div>
          <div id="ContentB" className="flex flex-col space-y-4">
            <h2 className="font-bold w-[65%] text-lg ">
              Your Information, Our Priority
            </h2>
            <p className="text-[#524F4F] text-sm">
              Rest easy as we prioritize your security and
            </p>
            <p className="text-[#524F4F] text-sm">
              privacy,implementing robust safety
            </p>
            <p className="text-[#524F4F] text-sm">
              measures to protect your personal
            </p>
            <p className="text-[#524F4F] text-sm">
              information and ensure a worry-free
            </p>
            <p className="text-[#524F4F] text-sm">
              experience in finding the perfect student
            </p>
            <p className="text-[#524F4F] text-sm">home with NestQuest.</p>
          </div>
        </div>
      </section>
      {/* Faqs Section */}
      <section
        id="Faqs_section"
        className="grid mt-20 grid-cols-1 gap-6 sm:grid-cols-2"
      >
        <div id="faq_list_a" className="space-y-6">
          <div id="freq_top_heading" className="mt-3 flex space-x-3">
            <div id="heading_line">
              <Line />
            </div>
            <div id="freq_top_heading_content">
              <h1 className="font-bold">Frequently Asked Questions</h1>
              <p className="text-[#524F4F] text-sm">
                Your Top Questions Thoughtfully Answered by NestQuest&apos;s
                Accommodation Experts!
              </p>
            </div>
          </div>
          {/* question 1 */}
          <div id="freq_top_heading" className="flex space-x-3 -space-y-1">
            <div id="heading_line">
              <SmallYellowDot />
            </div>
            <div id="freq_top_heading_content flex flex-col ">
              <h5 className="font-bold text-md">
                Is NestQuest available in my city?
              </h5>
              <p className="text-[#524F4F] text-sm">
                Ans: NestQuest is continuously expanding its reach. Currently,we
                operate in major cities and university towns, and we are
                actively working to include more locations.
              </p>
            </div>
          </div>
          {/* question 2 */}
          <div id="freq_top_heading" className="flex space-x-3 -space-y-1.5">
            <div id="heading_line">
              <SmallGreenDot />
            </div>
            <div id="freq_top_heading_content">
              <h5 className="font-bold text-md">
                Can I leave reviews for the accommodations I&apos;ve
                experienced?
              </h5>
              <p className="text-[#524F4F] text-sm">
                Ans: Absolutely! We encourage users to share their feedback and
                leave reviews for the accommodations they&apos;ve used, helping
                the community make well-informed decisions.
              </p>
            </div>
          </div>
        </div>
        <div id="faq_list_b" className="sm:mt-2 space-y-6 ">
          {/* question 3 */}
          <div id="freq_top_heading" className="flex space-x-3 -space-y-1.5">
            <div id="heading_line">
              <SmallBlueDot />
            </div>
            <div id="freq_top_heading_content">
              <h5 className="font-bold text-sm">
                How does NestQuest work for students?
              </h5>
              <p className="text-[#524F4F] text-sm">
                Ans: NestQuest&apos;s smart search matches student preferences
                with available accommodations, enabling direct landlord
                communication for transparency.
              </p>
            </div>
          </div>
          {/* question 4 */}
          <div id="freq_top_heading" className="flex space-x-3 -space-y-1.5">
            <div id="heading_line">
              <SmallBrownDot />
            </div>
            <div id="freq_top_heading_content">
              <h5 className="font-bold text-md">
                How does NestQuest work for students?
              </h5>
              <p className="text-sm">
                Ans: NestQuest&apos;s smart search matches student preferences
                with available accommodations, enabling direct landlord
                communication for transparency.
              </p>
            </div>
          </div>
          {/* question 5 */}
          <div id="freq_top_heading" className="flex space-x-3 -space-y-1.5">
            <div id="heading_line">
              <SmallPurpleDot />
            </div>
            <div id="freq_top_heading_content">
              <h5 className="font-bold text-md">
                How does NestQuest work for students?
              </h5>
              <p className="text-[#524F4F] text-sm">
                Ans: NestQuest&apos;s smart search matches student preferences
                with available accommodations, enabling direct landlord
                communication for transparency.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
    </main>
  );
}

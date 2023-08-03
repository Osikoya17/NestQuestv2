import { Button } from "antd";
import { Lato } from "next/font/google";
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
} from "./components/icon.js";
// import { Railway } from "next/font/google";

const lat = Lato({
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata = {
  title: "NestQuest",
  description:
    "Welcome to NestQuest,where the quest for your dream student begins with a smile.",
};

export default async function Home() {
  return (
    <>
      <main className="mx-28">
        {/* header section */}
        <section className="">
          <div id="list1" className="flex flex-col space-y-4">
            <div
              id="heading-tags"
              className=" text-4xl font-bold text-center md:text-start"
            >
              <h2 className={lat.className}>Your Home,</h2>
              <h2 className={lat.className}>
                Your
                <span className="text-blue-800 font-bold text-4xl">Quest</span>
              </h2>
            </div>
            <div
              id="paragraph"
              className="text-center font-normal leading-[190%] text-md md:text-start w-[28%]"
            >
              <p className="text-[#524F4F]">
                Welcome to NestQuest,where the quest for your dream student home
                begins with a smile.Find,connect, and thrive in the perfect
                place to call your own.
              </p>
            </div>
            <div id="button" className="flex justify-center md:justify-start">
              <Button className="text-white bg-blue-800 text-center ">
                Begin Quest
              </Button>
            </div>
          </div>
        </section>
        {/* Showcase section */}
        <section id="showcase" className="mt-6">
          <div id="Content">
            <div id="show1">
              <h2 className="text-[#376FFF] text-center font-bold text-xl text-wider md:text-start">
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
              <Button className="text-white bg-blue-800 text-center">
                Begin Quest
              </Button>
            </div>
          </div>
          <div id="image" className="flex space-x-4"></div>
        </section>
        {/* What We Offer Section */}

        <section className="grid grid-cols-1 mt-4  md:grid-cols-2">
          <div
            id="1"
            className="flex text-center flex-col space-y-4 md:text-start"
          >
            <div className="font-bold">
              <h2 className="md:text-md">What We</h2>
              <h2 className="text-blue-400 md:text-md ">Offer</h2>
            </div>
            <div id="2">
              <p className="md:text-md w-[60%]">
                Heres our top ten ranking apartments, Rated by our top experts!
              </p>
            </div>
            <div id="button" className="flex justify-center md:justify-start">
              <Button className="text-white bg-blue-800 text-center">
                Learn More
              </Button>
            </div>
          </div>
          <div id="2" className="text-center md:flex space-x-10">
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
              <p className="md:text-xs">Tailored student homes,just</p>
              <p className="px-4 md:text-xs">for you—budget-friendly</p>
              <p className="px-6 md:text-xs">and personalized.</p>
            </div>
            {/* list 2 */}
            <div id="item2" className="flex flex-col space-y-1">
              <div className="flex justify-center">
                <div
                  id="svg_2"
                  className="bg-[#80A3FF] w-[50px] h-[50px] rounded-lg flex justify-center items-center"
                >
                  <MessagingIcon />
                </div>
              </div>
              <h4 className="font-bold">Transparent Communication</h4>
              <p className="md:text-xs">Build trust with direct landlord</p>
              <p className="md:text-xs">communication,informed</p>
              <p className="md:text-xs">decisions made easy.</p>
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
              <p className="md:text-xs">Discover compatible</p>
              <p className="md:text-xs">roommates through our</p>
              <p className="md:text-xs">cutting-edge algorithm.</p>
            </div>
          </div>
          <div id="extension" className="mt-6 md:flex ml-48 space-x-6">
            {/* item 4 */}
            <div
              id="item4"
              className="flex flex-col justify-items-center space-y-1"
            >
              <div className="flex justify-center">
                <div
                  id="svg_4"
                  className="bg-[#FFA680] w-[50px] h-[50px] flex justify-center items-center rounded-lg"
                >
                  <HomeIcon />
                </div>
              </div>
              <h4 className="font-bold">Roommate Matching</h4>
              <p className="md:text-xs">Discover compatible</p>
              <p className="md:text-xs">roommates through our</p>
              <p className="md:text-xs">cutting-edge algorithm.</p>
            </div>
            {/* item 5 */}
            <div
              id="item3"
              className="flex flex-col justify-items-center space-y-1"
            >
              <div className="flex justify-center">
                <div
                  id="svg_3"
                  className="bg-[#FFA680] w-[50px] h-[50px] flex-wrap flex justify-center items-center rounded-lg"
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <h4 className="font-bold">Roommate Matching</h4>
              <p className="md:text-xs">Discover compatible</p>
              <p className="md:text-xs">roommates through our</p>
              <p className="md:text-xs">cutting-edge algorithm.</p>
            </div>
          </div>
        </section>
        {/*Further Information Sections */}
        <section id="further_information_section">
          <div id="a">
            <div id="imageA"></div>
            <div id="ContentA" className="flex flex-col space-y-4">
              <h2>Unlock your property&apos;s potential</h2>
              <p className="text-xs md:w-[70%]">
                Unlock your property&apos;s potential by effortlessly listing
                with us, reaching a vast audience of eager students, and
                building trust through direct communication–making renting
                easier and more rewarding!
              </p>
            </div>
          </div>
          <div id="b">
            <div id="imageB"></div>
            <div id="ContentB" className="flex flex-col space-y-4">
              <h2 className="font-bold text-center">
                Your Information, Our Priority
              </h2>
              <p className="text-xs md:w-[80%]">
                Rest easy as we prioritize your security and privacy,
                implementing robust safety measures to protect your personal
                information and ensure a worry-free experience in finding the
                perfect student home with NestQuest.
              </p>
            </div>
          </div>
        </section>
        {/* Faqs Section */}
        <section
          id="Faqs_section"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <div id="faq_list_a" className="space-y-6">
            <div id="freq_top_heading" className="mt-3 flex space-x-3">
              <div id="heading_line">
                <Line />
              </div>
              <div id="freq_top_heading_content">
                <h1 className="font-bold">Frequently Asked Questions</h1>
                <p className="text-xs">
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
                <h5 className="font-bold text-xs">
                  Is NestQuest available in my city?
                </h5>
                <p className="text-xs">
                  Ans: NestQuest is continuously expanding its reach.
                  Currently,we operate in major cities and university towns, and
                  we are actively working to include more locations.
                </p>
              </div>
            </div>
            {/* question 2 */}
            <div id="freq_top_heading" className="flex space-x-3 -space-y-1.5">
              <div id="heading_line">
                <SmallGreenDot />
              </div>
              <div id="freq_top_heading_content">
                <h5 className="font-bold text-xs">
                  Can I leave reviews for the accommodations I&apos;ve
                  experienced?
                </h5>
                <p className="text-xs">
                  Ans: Absolutely! We encourage users to share their feedback
                  and leave reviews for the accommodations they&apos;ve used,
                  helping the community make well-informed decisions.
                </p>
              </div>
            </div>
          </div>
          <div id="faq_list_b" className="sm:mt-6 space-y-6 ">
            {/* question 3 */}
            <div id="freq_top_heading" className="flex space-x-3 -space-y-1.5">
              <div id="heading_line">
                <SmallBlueDot />
              </div>
              <div id="freq_top_heading_content">
                <h5 className="font-bold text-xs">
                  How does NestQuest work for students?
                </h5>
                <p className="text-xs">
                  Ans: NestQ uest&apos;s smart search matches student
                  preferences with available accommodations, enabling direct
                  landlord communication for transparency.
                </p>
              </div>
            </div>
            {/* question 4 */}
            <div id="freq_top_heading" className="flex space-x-3 -space-y-1.5">
              <div id="heading_line">
                <SmallBlueDot />
              </div>
              <div id="freq_top_heading_content">
                <h5 className="font-bold text-xs">
                  How does NestQuest work for students?
                </h5>
                <p className="text-xs ">
                  Ans: NestQuest&apos;s smart search matches student preferences
                  with available accommodations, enabling direct landlord
                  communication for transparency.
                </p>
              </div>
            </div>
            {/* question 3 */}
            <div id="freq_top_heading" className="flex space-x-3 -space-y-1.5">
              <div id="heading_line">
                <SmallBlueDot />
              </div>
              <div id="freq_top_heading_content">
                <h5 className="font-bold text-xs">
                  How does NestQuest work for students?
                </h5>
                <p className="text-xs">
                  Ans: NestQ uest&apos;s smart search matches student
                  preferences with available accommodations, enabling direct
                  landlord communication for transparency.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* footer */}
      </main>
    </>
  );
}

import Image from "next/image";
import "./home.module.css";
import { Button } from "antd";
import { Lato } from "next/font/google";
import {
  HomeIcon,
  SearchIcon,
  SmallYellowDot,
  SmallPurpleDot,
  SmallBlueDot,
  SmallBrownDot,
  SmallGreenDot,
  Line,
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
      <main className="px-4">
        {/* header section */}
        <section className="px-3  sm:px-4 ">
          <div id="list1" className="flex flex-col space-y-4">
            <div
              id="heading-tags"
              className=" text-4xl font-bold text-center md:text-start"
            >
              <h2 className={lat.className}>Your Home,</h2>
              <h2 className={lat.className}>
                Your
                <span className="text-blue-800 font-bold text-md md:text-xl">
                  Quest
                </span>
              </h2>
            </div>
            <div
              id="paragraph"
              className="text-center font-normal leading-[190%] text-md"
            >
              <p>
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
        <section id="showcase">
          <div id="Content">
            <div id="show1" class>
              <h2 className="text-blue-800 text-center font-bold text-lg md:text-start">
                Top 10 Apartments
              </h2>
            </div>
            <div
              id="show_paragraph"
              className="text-center text-md md:text-start "
            >
              <p>Your Quest Awaits: Discover Our Top Ten Apartments</p>
            </div>
            <div id="button" className="flex justify-center">
              <Button className="text-white bg-blue-800 text-center">
                Begin Quest
              </Button>
            </div>
          </div>
        </section>
        {/* What We Offer Section */}

        <section>
          <div id="1" className="flex flex-col space-y-4">
            <div>
              <h2 className="text-center">What We</h2>
              <h2 className="text-blue-700 text-center">Offer</h2>
            </div>
            <div id="2">
              <p className="text-center">
                Heres our top ten ranking apartments, Rated by our top experts!
              </p>
            </div>
            <div id="button" className="flex justify-center">
              <Button className="text-white bg-blue-800 text-center">
                Begin Quest
              </Button>
            </div>
          </div>
        </section>
        {/*Further Information Section */}
        <section id="further_inform">
          <div id="a">
            <div id="imageA"></div>
            <div id="ContentA" className="flex flex-col space-y-4">
              <h2 className="font-bold text-center">
                Unlock your property&apos;s potential
              </h2>
              <p className="text-center">
                Unlock your property&apos;s potential by effortlessly listing
                with us, reaching a vast audience of eager students, and
                building trust through direct communication – making renting
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
              <p className="text-center">
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
          <div id="faq_list_a" className="space-y-4">
            <div id="freq_top_heading" className="mt-3 flex space-x-3">
              <div id="heading_line">
                <Line />
              </div>
              <div id="freq_top_heading_content">
                <h1 className="font-bold">Frequently Asked Questions</h1>
                <p>
                  Your Top Questions Thoughtfully Answered by NestQuest&apos;s
                  Accommodation Experts!
                </p>
              </div>
            </div>
            {/* question 1 */}
            <div id="freq_top_heading" className="flex space-x-3 -space-y-0.5">
              <div id="heading_line">
                <SmallYellowDot />
              </div>
              <div id="freq_top_heading_content">
                <h5 className="font-bold">
                  {" "}
                  Is NestQuest available in my city?
                </h5>
                <p>
                  Ans: NestQuest is continuously expanding its reach. Currently,
                  we operate in major cities and university towns, and we are
                  actively working to include more locations.
                </p>
              </div>
            </div>
            {/* question 2 */}
            <div id="freq_top_heading" className="flex space-x-3 -space-y-0.5">
              <div id="heading_line">
                <SmallGreenDot />
              </div>
              <div id="freq_top_heading_content">
                <h4 className="font-bold">
                  Can I leave reviews for the accommodations I&apos;ve
                  experienced?
                </h4>
                <p>
                  Ans: Absolutely! We encourage users to share their feedback
                  and leave reviews for the accommodations they&apos;ve used,
                  helping the community make well-informed decisions.
                </p>
              </div>
            </div>
          </div>
          <div id="faq_list_b" className="sm:mt-6 space-y-6 ">
            {/* question 3 */}
            <div id="freq_top_heading" className="flex space-x-3 -space-y-0.5">
              <div id="heading_line">
                <SmallBlueDot />
              </div>
              <div id="freq_top_heading_content">
                <h5 className="font-bold">
                  How does NestQuest work for students?
                </h5>
                <p>
                  Ans: NestQuest&apos;s smart search matches student preferences
                  with available accommodations, enabling direct landlord
                  communication for transparency.
                </p>
              </div>
            </div>
            {/* question 4 */}
            <div id="freq_top_heading" className="flex space-x-3 -space-y-0.5">
              <div id="heading_line">
                <SmallBrownDot />
              </div>
              <div id="freq_top_heading_content">
                <h5 className="font-bold">
                  What benefits does NestQuest offer to landlords?
                </h5>
                <p>
                  Ans: NestQuest provides landlords with an easy-to-use platform
                  for listing properties, accessing a large student audience,
                  and facilitating direct communication with potential tenants.
                </p>
              </div>
            </div>
            {/* question 5 */}
            <div id="freq_top_heading" className="flex space-x-3 -space-y-0.5">
              <div id="heading_line">
                <SmallPurpleDot />
              </div>
              <div id="freq_top_heading_content">
                <h5 className="font-bold">
                  How can I contact NestQuest for support or inquiries?
                </h5>
                <p class>
                  Ans: You can reach our support team through the Contact Us
                  button below on our website. We are available to assist you
                  with any questions or concerns you may have.
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

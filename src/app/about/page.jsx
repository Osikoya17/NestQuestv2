import { Raleway, Lato } from "next/font/google";
import {
  WhitePeopleIcon,
  WebIcon,
  WhiteSyncIcon,
  WhiteSearchIcon,
  HandShakeIcon,
  GoogleIcon,
} from "../utils/util_icon";
import Image from "next/image";
import { Button } from "antd";
const lat = Lato({
  subsets: ["latin"],
  weight: ["700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400"],
});

export default function about() {
  return (
    <main className="flex flex-col px-3 justify-center md:px-32 ">
      {/* hero section */}
      <section
        id="hero_section"
        className="font-bold flex flex-col-reverse gap-y-5 md:flex-row items-center"
      >
        <div id="content" className="flex flex-col gap-y-3 md:flex-grow-[1]">
          <h3
            className="text-center text-[#3A3A3E]  text-2xl font-normal md:text-start "
            style={lat.style}
          >
            About Us
          </h3>
          <p
            className="w-full text-[#a2a2b3] font-normal text-md leading-[179.023%] text-center  sm:w-[55%] md:text-start"
            style={raleway.style}
          >
            At NestQuest, we believe that finding the ideal student
            accommodation should be an exciting and empowering journey. Our
            mission is to revolutionize the housing landscape for students,
            providing a direct and efficient platform that connects them with
            landlords, eliminating the need for intermediaries.
          </p>
        </div>
        <div id="Image" className="flex flex-grow-[2]">
          <Image src={"/people.png"} width={674} height={674} alt="NestQuest" />
        </div>
      </section>

      {/* middle section */}
      <section className="mt-6 flex flex-col gap-y-6  md:flex-row justify-center gap-x-8 py-24  ">
        <article
          id="A"
          className="flex flex-col p-4 gap-y-4 text-center bg-[#376FFF] max-w-56 min-h-64 rounded-lg"
        >
          <div id="Icon" className="flex justify-center">
            <GoogleIcon />
          </div>
          <h3 id="heading" className="text-xl  text-white" style={lat.style}>
            Our Mission
          </h3>

          <p
            id="paragraph"
            style={raleway.style}
            className="text-sm text-white font-normal leading-[179%]"
          >
            We are a team of dedicated individuals passionate about creating a
            positive impact in the lives of students. Our diverse backgrounds
            and experiences converge to drive innovation and excellence in our
            platform.
          </p>
        </article>
        {/* second article */}
        <article
          id="B"
          className="flex p-4 flex-col gap-y-4 text-center rounded-lg bg-[#376FFF] max-w-56 min-h-64"
        >
          <div id="Icon" className="flex justify-center">
            <HandShakeIcon />
          </div>
          <h3 className="text-xl text-white" style={lat.style}>
            Our Commitments
          </h3>
          <p
            className="text-sm text-[#FFF] font-normal leading-[179%]"
            style={raleway.style}
          >
            We empower students in their housing search, providing them with the
            tools and resources to make informed decisions.We priotize the
            privacy and security of our user&apos;s
          </p>
        </article>
        {/* third article */}
        <article
          id="C"
          className="flex flex-col  gap-y-4 text-center bg-[#376FFF] max-w-64 p-4 rounded-lg h-72"
        >
          <div id="Icon" className="flex justify-center">
            <WebIcon />
          </div>
          <h3 id="heading" className="text-xl text-white" style={lat.style}>
            Our Story
          </h3>
          <p
            id="paragraph"
            className="text-sm text-[#FFF] font-normal leading-[179%]"
            style={raleway.style}
          >
            Fueled by innovation and a commitment to empower students, we set
            out to transform housing. Recognizing the need for a platform that
            simplifies finding accommodations while fostering connections and
            community among students.
          </p>
        </article>
      </section>

      {/* What sets us apart section */}
      <section
        id="what_sets_us_apart_section"
        className="mt-10 flex flex-col justify-center"
      >
        <div id="heading">
          <h1 className="text-[#376FFF] text-center tracking-widest text-3xl md:text-6xl ">
            WHAT SETS US APART
          </h1>
        </div>
        <div
          id="contents"
          className="mt-6 flex flex-col gap-y-4 md:flex-row justify-center "
        >
          {/* article 1 */}
          <article className="flex flex-col justify-center text-center gap-y-3">
            <div className="flex justify-center">
              <div
                id="icon"
                className="
                h-24 w-24 bg-[#376FFF] rounded-[50%] flex justify-center items-center"
              >
                <WhiteSyncIcon />
              </div>
            </div>
            <div id="header" className="font-bold">
              <h3>Direct Connection</h3>
            </div>
            <div id="paragraph">
              <p className="w-[70%] text-[#3A3A3E] ml-12">
                NestQuest Enables direct communication between students and
                landlords,ensuring transparency,trust and personalized
                interactions
              </p>
            </div>
          </article>
          {/* article 2 */}
          <article className="flex flex-col  text-center gap-y-3 ">
            <div className="flex justify-center">
              <div
                id="icon"
                className="
                h-24 w-24 bg-[#376FFF] rounded-[50%] flex justify-center items-center"
              >
                <WhiteSearchIcon />
              </div>
            </div>
            <div id="header">
              <h3 className="font-bold">Smart Search Algorithm</h3>
            </div>
            <div id="paragraph">
              <p className="w-[70%] text-[#3A3A3E] ml-12">
                Our intelligent search algorithm matches students preferences
                with the best accommodation options, streamlining the housing
                search process.
              </p>
            </div>
          </article>
          {/* article 3 */}
          <article className="flex flex-col text-center gap-y-3">
            <div className="flex justify-center">
              <div
                id="icon"
                className="
                h-24 w-24 bg-[#376FFF] rounded-[50%] flex justify-center items-center"
              >
                <WhitePeopleIcon />
              </div>
            </div>
            <div id="header">
              <h3 className="font-bold">Roommmate Matching</h3>
            </div>
            <div id="paragraph">
              <p className="w-[70%] text-[#3A3A3E] ml-12">
                We do more than list rooms – our advanced algorithm considers
                compatibility to help students find the ideal roommates
              </p>
            </div>
          </article>
        </div>
      </section>
      {/* last section */}
      <section
        id="last_section"
        className="flex flex-col gap-y-5 mb-4 md:flex-row mt-24  gap-x-10  "
      >
        <article
          id="A"
          className="flex flex-grow-[2] max-w-56 p-6 min-h-56 rounded-2xl bg-[#376FFF]  flex-col gap-y-4 xs:w-96"
        >
          <div id="heading">
            <h2 className="text-white font-bold">WHO WE ARE</h2>
          </div>
          <div id="paragraph">
            <p className="text-sm  text-[#FFF] font-normal leading-[179%]">
              Fueled by innovation and a commitment to empower students, we set
              out to transform housing. Recognizing the need for a platform that
              simplifies finding accommodations while fostering connections and
              community among students.
            </p>
          </div>
          <Button className="text-white rounded-full outline-2 hover:outline-4 hover:text-whites focus:text-white">
            Contact us
          </Button>
        </article>
        <article
          id="B"
          className="flex max-w-56 flex-grow-[2] p-6 min-h-56 rounded-2xl bg-[#376FFF]  flex-col gap-y-4 xs:w-96"
        >
          <div id="heading">
            <h2 className="text-white font-bold">JOIN US NOW</h2>
          </div>
          <div id="paragraph">
            <p className="text-sm text-[#FFF] font-normal leading-[179%]">
              Fueled by innovation and a commitment to empower students, we set
              out to transform housing. Recognizing the need for a platform that
              simplifies finding accommodations while fostering connections and
              community among students.
            </p>
          </div>
          <Button className="text-white rounded-full outline-2">Sign Up</Button>
        </article>
      </section>
    </main>
  );
}

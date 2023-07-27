import Image from "next/image";

export const metadata = {
  title: "NestQuest",
  description:
    "Welcome to NestQuest,where the quest for your dream student begins with a smile.",
};

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <div className="flex">
        <div>
          <h2>Your Home</h2>
          <h2>
            Your <span className="text-blue-800">Quest</span>
          </h2>
          <button className="flex justify-center align-center gap-[0.625rem] w-48 bg-blue-800 text-white ">
            Begin Quest
          </button>
        </div>
      </div>
      {/* Carousel Section */}
      <div>
        <h4 className="text-blue-800 font-600 ">Top 10 Apartment</h4>
        <p>Your Quest Awaits: Discover Our Top Ten Apartments</p>
      </div>
      <div>
        <h3>What we</h3>
        <span className="text-blue-800">Offer</span>
      </div>
    </main>
  );
}

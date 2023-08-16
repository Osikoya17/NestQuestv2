import { Raleway, Lato } from "next/font/google";

import Link from "next/link";
import { Button, Input } from "antd";
import { DatePicker } from "antd";

import {
  LayoutDashboard,
  CreditCard,
  Search,
  ListMinus,
  Users2,
  Headphones,
  Settings,
  Rocket,
} from "lucide-react";
import { BluePenIcon, PlusIcon } from "../utils/util_icon";

const lato = Lato({
  subsets: ["latin"],
  weight: ["700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400"],
});

export default function settings() {
  return (
    // <div className="bg-[#E8EEFF] p-2">
    //   <h2>Settings</h2>
    // </div>
    <main className="flex">
      <aside
        id="sidenav"
        className="basis-[16%] border-r-2 sticky left-0 top-0 border-slate-300 min-h-screen shadow-lg"
      >
        <nav className="">
          <ul className="" style={lato.style}>
            <li
              className={`flex items-center justify-center
              font-medium cursor-pointer p-3`}
            >
              <Link href={"/dashboard"}>
                <div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
                  <LayoutDashboard className="" />
                  <span className="w-52 ml-3 hidden md:block">Dashboard</span>
                </div>
              </Link>
            </li>
            <li
              className={`flex items-center justify-center
              font-medium cursor-pointer p-3`}
            >
              <Link href={""}>
                <div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
                  <Users2 />
                  <span className="w-52 ml-3 hidden md:block">
                    Room matching
                  </span>
                </div>
              </Link>
            </li>
            <li
              className={`flex items-center justify-center
              font-medium cursor-pointer p-3`}
            >
              <Link href={""}>
                <div className="flex p-3   hover:bg-[#E8EEFF] rounded-full">
                  <Headphones />
                  <span className="w-52 ml-3 hidden md:block">
                    Customer Support
                  </span>
                </div>
              </Link>
            </li>
            <li
              className={`flex items-center justify-center
              font-medium cursor-pointer p-3`}
            >
              <Link href={"/#"}>
                <div className="flex bg-[rgb(232,238,255)]  p-3 hover:bg-[#E8EEFF] rounded-full">
                  <Settings />
                  <span className="w-52 ml-3 hidden md:block">Setting</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <section className="w-full  mb-12">
        <header className=" bg-[#E8EEFF]  w-full flex items-center h-12 pl-3">
          <h1 className="font-bold text-md" style={raleway.style}>
            Settings
          </h1>
        </header>
        <div id="grouped_buttons" className="ml-2 mt-3 flex gap-x-10">
          <Link href={""}>
            <Button className="bg-[#E8EEFF] text-blue-400">Personal</Button>
          </Link>
          <Link href={""}>
            <Button type="text" className="text-sm">
              Profile
            </Button>
          </Link>
          <Link href={""}>
            <Button type="text" className="text-sm">
              Password
            </Button>
          </Link>
          <Link href={""}>
            <Button type="text" className="text-sm">
              Subscriptions
            </Button>
          </Link>
          <Link href={""}>
            <Button type="text" className="text-sm">
              Billing
            </Button>
          </Link>
        </div>
        <div id="personal_details" className="flex ml-4  flex-col gap-y-2">
          <h2>Personal</h2>
          <p>View and update your personal details</p>
        </div>
        <div className="border-t-2 ml-4 border-slate-200 w-full mt-3 mb-7"></div>
        <section className="ml-4">
          <article className="flex gap-x-72 ">
            <h3>Name</h3>
            <div id="form" className="flex flex-col gap-y-3">
              <label htmlFor="First name">First name</label>
              <input
                type="text"
                placeholder="John"
                className="rounded-sm p-2 outline-0 bg-gray-100"
              />
              <label htmlFor="First name">Last name</label>
              <input
                type="text"
                placeholder="Doe"
                className="rounded-sm p-2 outline-0 bg-[#F0F0F0] w-72"
              />
            </div>
            <div
              id="blue"
              className="w-12 h-12 flex justify-center items-center rounded-lg bg-[#E8EEFF]"
            >
              <BluePenIcon />
            </div>
          </article>
          <div className="border-t-2 border-slate-200 w-full mt-3 mb-7"></div>
          <article className="flex gap-x-72">
            <h3>D.O.B</h3>
            <div id="form" className="flex flex-col gap-y-3">
              <label htmlFor="First name">Enter D.O.B</label>
              <DatePicker className="outline-0 bg-[#E8EEFF] w-72 pp-" />
            </div>
          </article>
          <div className="border-t-2 border-slate-200  w-full mt-3 mb-7"></div>
          <article className="flex gap-x-72 ">
            <h3>Email</h3>
            <div id="form" className="flex flex-col gap-y-3">
              <label htmlFor="First name">Email address</label>
              <input
                type="email"
                placeholder="Janedoe123@gmail.com"
                className="rounded-sm p-2 outline-0 bg-[#F0F0F0] w-72"
              />
              <Button
                type="input"
                className="text-sm bg-[#E8EEFF] text-blue-500 flex gap-x-3 items-center"
              >
                <i>
                  <PlusIcon />
                </i>
                Add new email
              </Button>
            </div>
            <div
              id="blue"
              className="  w-12 h-12 flex justify-center items-center rounded-lg bg-[#E8EEFF]"
            >
              <BluePenIcon />
            </div>
          </article>
          <div className="border-t-2 border-slate-200 w-full mt-3 mb-7"></div>
          <article className="flex gap-x-24">
            <div className="flex flex-col gap-y-2">
              <h3>Your photo</h3>
              <p>This will be displayed on your profile</p>
            </div>
            <div id="form" className="flex flex-col gap-y-3">
              <div
                id="image_div"
                className="bg-[#E8EEFF] rounded-[50%] w-24 h-24"
              ></div>
            </div>
            <div id="crud_buttons" className="flex gap-x-4">
              <Button type="text" className="text-sm">
                Delete
              </Button>
              <Button type="text" className="text-sm text-[#376FFF]">
                Update
              </Button>
            </div>
          </article>
          <div className="border-t-2 border-slate-200 w-full mt-3 mb-7"></div>
          <article className="flex  gap-x-72">
            <h3>Bio</h3>
            <div id="form" className="flex flex-col gap-y-3">
              <label htmlFor="First name">Add Bio</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Getting overwhelmed? Get articles to get you up and running quick and easy? Getting overwhelmed? Get articles to get you up and running quick and easy? Getting overwhelmed? Get articles to get you up and running quick and easy?"
                className="outline-[#CECECE] w-72"
              ></textarea>
            </div>
          </article>
          <div className="border-t-2 border-slate-200 w-full mt-3 mb-7"></div>
          <article className="flex gap-x-56 ">
            <h3>Country/City</h3>
            <div id="form" className="flex flex-col gap-y-3">
              <select
                name="country"
                id=""
                className="rounded-sm p-2 outline-0 bg-[#F0F0F0] w-72"
              >
                <option value="">Nigeria,Ife</option>
                <option value="">Lagos,Ikeja</option>
                <option value="">Oyo,Ibadan</option>
              </select>
            </div>
          </article>
          <div className="border-t-2 border-slate-200 w-full mt-6"></div>
        </section>
      </section>
      {/* <div className="border-t-2 border-slate-200 w-screen mt-4"></div> */}
    </main>
  );
}

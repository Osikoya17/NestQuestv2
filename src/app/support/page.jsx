/* eslint-disable react/no-unescaped-entities */
import Sidebar from "../../../components/Sidebar"
import {LayoutDashboard,
  CreditCard,
  Search,
  Users2, 
  User2,
  Headphones,
  Settings,
  Rocket
} from 'lucide-react'
import {Lato, Raleway} from 'next/font/google'
import {Button, Input} from 'antd'
import Link from "next/link"
import Image from "next/legacy/image"
import Lady from '../../../public/lady.svg'

const lato = Lato({subsets:['latin'],weight:"700"})
const raleway = Raleway({subsets:['latin']})

export default function faqs() {
  return (
    <main className="flex">
      <aside id="sidenav" className="basis-[16%] border-r-2 stickty left-0 top-0 border-slate-300 min-h-screen shadow-lg">
        <nav className="">
          <ul className="" style={lato.style}>
            <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-3`}>
            <Link href={"/dashboard"}><div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
            <LayoutDashboard className=""/>
            <span className="w-52 ml-3 hidden md:block">Dashboard</span>    
            </div>
            </Link>
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-3`}>
            <Link href={""}><div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
            <Users2 />
            <span className="w-52 ml-3 hidden md:block">Room matching</span>    
            </div>
            </Link>
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-3`}>
            <Link href={"/#"}><div className="flex p-3 bg-[#E8EEFF]  hover:bg-[#E8EEFF] rounded-full">
            <Headphones color="#0042EC" />
            <span className="w-52 ml-3 hidden md:block">Customer Support</span>    
            </div>
            </Link>
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-3`}>
            <Link href={""}><div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
            <Settings />
            <span className="w-52 ml-3 hidden md:block">Setting</span>
            </div>
            </Link>
        </li> 
        <section className=" mt-7 pr-7 lg:ml-7 hidden lg:block flex-col items-center pb-5">
              <div className="flex justify-center items-center h-72 w-full basis-1/2 bg-slate-100 rounded">ADS</div>
              <div className="flex justify-center items-center h-36 mt-5 w-full basis-1/2 bg-slate-100 rounded">ADS</div>
        </section>
        </ul> 

        </nav>
    </aside>
    <section className="lg:basis-[84%] basis-[80%] w-full mb-12">
      <header className=" bg-[#E8EEFF] flex flex-col items-center w-full p-7 h-40">
        <h1 className="text-center text-3xl" style={raleway.style}>How can we help?</h1>
        <Input style={raleway.style} className="lg:w-[30rem] mt-7 text-lg text-slate-600" placeholder="Ask a question"/>
      </header>
          <section className="lg:flex lg:p-10 p-3" style={raleway.style}>
            <div className="lg:basis-[80%] w-full ">
              <h2 className="font-bold text-xl">FAQs</h2>
              <div className="border-t-2 border-slate-200 w-full mt-3 mb-7"></div>
              <div className="flex flex-wrap justtify-evenly ">
                <div className="flex p-3 lg:basis-1/2 mt-3 lg:mt-0">
                  <Rocket size={40} color="#0042EC"/>
                  <div className="ml-5 leading-3 w-56 ">
                    <h1 className="font-semibold text-xl">Getting Started</h1> 
                    <h5 className="text-sm leading-3 ">Getting overwhelmed? Get articles to get you up and running, quick and easy.</h5>
                  </div>
                </div>
                <div className="flex p-3 lg:basis-1/2 mt-3 lg:mt-0">
                  <User2  size={40} color="#0042EC"/>
                  <div className="ml-5 leading-3 w-56">
                    <h1 className="font-semibold text-xl">Getting Started</h1> 
                    <h5 className="text-sm leading-3">Simplify your housing journey with easy-to-follow steps and personalized assistance</h5>
                  </div>
                </div>
              </div>
              <div className="flex  flex-wrap justtify-evenly lg:mt-5 ">
                <div className="flex p-3 lg:basis-1/2 mt-3 lg:mt-0">
                  <Rocket size={40} color="#0042EC"/>
                  <div className="ml-5 leading-3 w-56">
                    <h1 className="font-semibold text-xl">Getting Started</h1> 
                    <h5 className="text-sm leading-3">Simplify your housing journey with easy-to-follow steps and personalized assistance</h5>
                  </div>
                </div>
                <div className="flex p-3 lg:basis-1/2 mt-3 lg:mt-0">
                  <Rocket size={40} color="#0042EC"/>
                  <div className="ml-5 leading-3 w-56">
                    <h1 className="font-semibold text-xl">Getting Started</h1> 
                    <h5 className="text-sm leading-3">Simplify your housing journey with easy-to-follow steps and personalized assistance</h5>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justtify-evenly lg:mt-5">
                <div className="flex p-3 lg:basis-1/2 mt-3 lg:mt-0">
                  <CreditCard size={40} color="#0042EC"/>
                  <div className="ml-5 leading-3 w-56">
                    <h1 className="font-semibold text-xl">Getting Started</h1> 
                    <h5 className="text-sm leading-3">Simplify your housing journey with easy-to-follow steps and personalized assistance</h5>
                  </div>
                </div>
                <div className="flex p-3  lg:basis-1/2 mt-3 lg:mt-0">
                  <Rocket size={40} color="#0042EC"/>
                  <div className="ml-5 leading-3 w-56">
                    <h1 className="font-semibold text-xl">Getting Started</h1> 
                    <h5 className="text-sm leading-3">Simplify your housing journey with easy-to-follow steps and personalized assistance</h5>
                  </div>
                </div>
              </div>
              <div className="w-full justify-evenly flex flex-wrap mt-14 p-5 h-15 items-center bg-[#E8EEFF] rounded">
              <Search size={50} color="#0042EC"/>
              <div className="ml-5 leading-3">
                    <h1 className="font-semibold mt-3 lg:mt-0 text-xl">Can't find what you are looking for?</h1> 
                    <h5 className="text-sm leading-3 lg:mt-0 mt-3">Get articles to get you up and running, quick and easy</h5>
              </div>
              <div>
              <Button className="text-[#0042EC] mt-5 lg:mt-0 border-[#0042EC] border">Write us</Button>
              </div>
              </div>
            </div>
            <section className="basis-[20%] mt-7 lg:ml-7 flex-col items-center">
              <div className="flex justify-center items-center h-72 w-full basis-1/2 bg-slate-100 rounded">ADS</div>
              <div className="flex justify-center items-center h-36 mt-5 w-full basis-1/2 bg-slate-100 rounded">ADS</div>
            </section>
          </section>
          

    </section>
    </main>
  )
}
/* eslint-disable react/no-unescaped-entities */
import Sidebar from "../../../components/Sidebar"
import {LayoutDashboard, 
  ListMinus, 
  MessageSquare,
  Star, 
  Users2, 
  Headphones,
  Settings,
  Rocket
} from 'lucide-react'
import {Lato, Raleway} from 'next/font/google'
import {Button} from 'antd'

const lato = Lato({subsets:['latin'],weight:"700"})
const raleway = Raleway({subsets:['latin']})

export default function faqs() {
  return (
    <main className="flex">
      <aside id="sidenav" className="lg:basis-1/4 md:basis-1/5 border-r-2 sticky left-0 top-0 border-slate-300 min-h-screen shadow-lg">
        <nav className="">
          <ul className="px-10" style={lato.style}>
            <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-3`}>
            <div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
            <LayoutDashboard className=""/>
            <span className="w-52 ml-3 hidden md:block">Dashboard</span>    
            </div>
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-3`}>
            <div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
            <ListMinus />
            <span className="w-52 ml-3 hidden md:block">Listing</span>   
            </div> 
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-3`}>
            <div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
            <MessageSquare/>
            <span className="w-52 ml-3 hidden md:block">Messaging</span>    
            </div>
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-3`}>
            <div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
            <Star />
            <span className="w-52 ml-3 hidden md:block">Favourite</span>    
            </div>
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-3`}>
            <div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
            <Users2 />
            <span className="w-52 ml-3 hidden md:block">Roomates</span>    
            </div>
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-3`}>
            <div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
            <Headphones />
            <span className="w-52 ml-3 hidden md:block">Customer Support</span>    
            </div>
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-3`}>
            <div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
            <Settings />
            <span className="w-52 ml-3 hidden md:block">Setting</span>
            </div>
        </li> 
        </ul> 
        </nav>
    </aside>
    <section className="basis-3/4 w-full mb-12">
      <header className=" bg-[#E8EEFF] w-full p-7 h-40">
        <h1 className="text-center text-2xl" style={raleway.style}>How can we help?</h1>
      </header>
          <section className="lg:flex lg:p-10 p-3" style={raleway.style}>
            <div className="lg:basis-3/4 w-full ">
              <h2 className="font-bold text-xl">FAQs</h2>
              <div className="border-t-2 border-slate-200 w-full mt-3 mb-7"></div>
              <div className="flex flex-wrap justtify-evenly ">
                <div className="flex p-3 lg:basis-1/2 mt-3 lg:mt-0">
                  <Rocket size={40} color="#0042EC"/>
                  <div className="ml-5 leading-3">
                    <h1 className="font-semibold text-xl">Getting Started</h1> 
                    <h5 className="text-sm leading-3">Simplify your housing journey with easy-to-follow steps and personalized assistance</h5>
                  </div>
                </div>
                <div className="flex p-3 lg:basis-1/2 mt-3 lg:mt-0">
                  <Rocket size={40} color="#0042EC"/>
                  <div className="ml-5 leading-3">
                    <h1 className="font-semibold text-xl">Getting Started</h1> 
                    <h5 className="text-sm leading-3">Simplify your housing journey with easy-to-follow steps and personalized assistance</h5>
                  </div>
                </div>
              </div>
              <div className="flex  flex-wrap justtify-evenly lg:mt-5 ">
                <div className="flex p-3 lg:basis-1/2 mt-3 lg:mt-0">
                  <Rocket size={40} color="#0042EC"/>
                  <div className="ml-5 leading-3">
                    <h1 className="font-semibold text-xl">Getting Started</h1> 
                    <h5 className="text-sm leading-3">Simplify your housing journey with easy-to-follow steps and personalized assistance</h5>
                  </div>
                </div>
                <div className="flex p-3 lg:basis-1/2 mt-3 lg:mt-0">
                  <Rocket size={40} color="#0042EC"/>
                  <div className="ml-5 leading-3">
                    <h1 className="font-semibold text-xl">Getting Started</h1> 
                    <h5 className="text-sm leading-3">Simplify your housing journey with easy-to-follow steps and personalized assistance</h5>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justtify-evenly lg:mt-5">
                <div className="flex p-3 lg:basis-1/2 mt-3 lg:mt-0">
                  <Rocket size={40} color="#0042EC"/>
                  <div className="ml-5 leading-3">
                    <h1 className="font-semibold text-xl">Getting Started</h1> 
                    <h5 className="text-sm leading-3">Simplify your housing journey with easy-to-follow steps and personalized assistance</h5>
                  </div>
                </div>
                <div className="flex p-3  lg:basis-1/2 mt-3 lg:mt-0">
                  <Rocket size={40} color="#0042EC"/>
                  <div className="ml-5 leading-3">
                    <h1 className="font-semibold text-xl">Getting Started</h1> 
                    <h5 className="text-sm leading-3">Simplify your housing journey with easy-to-follow steps and personalized assistance</h5>
                  </div>
                </div>
              </div>
              <div className="w-full justify-evenly flex flex-wrap mt-7 p-5 h-15 items-center bg-[#E8EEFF] rounded">
              <Rocket size={50} color="#0042EC"/>
              <div className="ml-5 mt-5 leading-3">
                    <h1 className="font-semibold text-xl">Can't find what you are looking for?</h1> 
                    <h5 className="text-sm leading-3 mt-4">Get articles to get you up and running, quick and easy</h5>
              </div>
              <div>
              <Button className="text-[#0042EC] mt-7 border-[#0042EC] border">Write us</Button>
              </div>
              </div>
            </div>
            <section className="basis-1/4 mt-7 lg:ml-7 flex-col items-center">
              <div className="flex justify-center items-center h-72 w-full basis-1/2 bg-slate-100 rounded">ADS</div>
              <div className="flex justify-center items-center h-36 mt-5 w-full basis-1/2 bg-slate-100 rounded">ADS</div>
            </section>
          </section>


    </section>
    </main>
  )
}
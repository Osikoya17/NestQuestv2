/* eslint-disable react/no-unescaped-entities */
import {LayoutDashboard,
    Users2, 
    Headphones,
    Settings,
    ListMinus,
    Star,
    ThumbsUp,
    MessageSquare,
    Share,
    Heart
  } from 'lucide-react'
  import {Lato, Raleway} from 'next/font/google'
  import {Button, Input} from 'antd'
import Link from 'next/link'
import Image from "next/legacy/image"
import Lady from '../../../public/people.svg'
import Maps from '../../../public/map.svg'

import Room from '../../../public/room.svg'

const lato = Lato({subsets:['latin'],weight:["100","700"]})
const raleway = Raleway({subsets:['latin']})
export default function page() {
  return (
    <main className="flex" style={lato.style}>
        <aside id="sidenav" className="basis-[16%] font-semibold border-r-2 stickty left-0 top-0 border-slate-300 min-h-screen shadow-lg">
        <nav className="">
          <ul className="font-semibold " style={lato.style}>
            <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-3`}>
            <Link href={"/#"}><div className="flex p-3 bg-[#E8EEFF]  hover:bg-[#E8EEFF] rounded-full">
            <LayoutDashboard color="#0042EC"/>
            <span className="w-52 ml-3 hidden md:block font-semibold ">Dashboard</span>    
            </div>
            </Link>
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-3`}>
            <Link href={""}><div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
            <Users2 />
            <span className="w-52 ml-3 hidden md:block font-semibold ">Room matching</span>    
            </div>
            </Link>
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-3`}>
            <Link href={"/support"}><div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
            <Headphones  />
            <span className="w-52 ml-3 hidden md:block font-semibold ">Customer Support</span>    
            </div>
            </Link>
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-3`}>
            <Link href={""}><div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
            <Settings />
            <span className="w-52 ml-3 hidden md:block font-semibold ">Setting</span>
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
        <section className="lg:basis-[54%] basis-[80%] w-full mb-12">
            <header className='bg-[#E8EEFF] flex justify-evenly items-center w-full h-44 rounded'>
                <div className='' style={lato.style}>
                    <h1 className='text-2xl font-semibold'>Hi, Jane</h1>
                    <h5 className='text-[#515151] font-medium'>Ready to find your perfect apartment?</h5>
                </div>
                <div>
                <Image
                    src={Lady}
                    alt=''
                    />
                </div>
            </header>
            <section className='flex p-5 px-10 text-lg font-light'  style={lato.style}>
                <div className='flex p-3 px-5 justify-center bg-[#E8EEFF] rounded items-center'>
                    <ListMinus />
                    <span className='ml-1 font-light'>Listing</span>
                </div>
                <div className='flex p-3 justify-center items-center'>
                    <Star />
                    <span className='ml-1 font-light'> Favourites</span>
                </div>
            </section>
            <section className='p-3'>
                <div className='flex shadow-md rounded p-3 border border-slate-300'>
                    <div className='flex items-center'>
                        <Image
                        src={Room}
                        alt=''
                        />
                    </div>
                    <div className='ml-5 text-[#515151] space-y-2'>
                        <h1 className='text-xl font-semibold w-48'>2 bedroom flat lorem</h1>
                        <h5 className='w-44'>Lara's avenue, Damico, Ile-ife</h5>
                        <h6 className='flex items-center'>4.5 <Star size={15}/></h6>
                        <h3 className='flex items-center'><ThumbsUp size={20}/>1.1k <Share className='ml-3' size={20}/>1.1k <MessageSquare className='ml-3' size={20}/>1.1k  </h3>
                    </div>
                    <div className='flex flex-col justify-between items-end basis-[40%]'>
                        <Heart/>
                        <span className='text-lg font-bold text-[#3d6ef4]'>$1,150 / year</span>
                    </div>
                </div>
            </section>
            <section className='p-3'>
                <div className='flex shadow-md rounded p-3 border border-slate-300'>
                    <div className='flex items-center'>
                        <Image
                        src={Room}
                        alt=''
                        />
                    </div>
                    <div className='ml-5 text-[#515151] space-y-2'>
                        <h1 className='text-xl font-semibold w-48'>2 bedroom flat lorem</h1>
                        <h5 className='w-44'>Lara's avenue, Damico, Ile-ife</h5>
                        <h6 className='flex items-center'>4.5 <Star size={15}/></h6>
                        <h3 className='flex items-center'><ThumbsUp size={20}/>1.1k <Share className='ml-3' size={20}/>1.1k <MessageSquare className='ml-3' size={20}/>1.1k  </h3>
                    </div>
                    <div className='flex flex-col justify-between items-end basis-[40%]'>
                        <Heart/>
                        <span className='text-lg font-bold text-[#3d6ef4]'>$1,150 / year</span>
                    </div>
                </div>
            </section>
            <section className='p-3'>
                <div className='flex shadow-md rounded p-3 border border-slate-300'>
                    <div className='flex items-center'>
                        <Image
                        src={Room}
                        alt=''
                        />
                    </div>
                    <div className='ml-5 text-[#515151] space-y-2'>
                        <h1 className='text-xl font-semibold w-48'>2 bedroom flat lorem</h1>
                        <h5 className='w-44'>Lara's avenue, Damico, Ile-ife</h5>
                        <h6 className='flex items-center'>4.5 <Star size={15}/></h6>
                        <h3 className='flex items-center'><ThumbsUp size={20}/>1.1k <Share className='ml-3' size={20}/>1.1k <MessageSquare className='ml-3' size={20}/>1.1k  </h3>
                    </div>
                    <div className='flex flex-col justify-between items-end basis-[40%]'>
                        <Heart/>
                        <span className='text-lg font-bold text-[#3d6ef4]'>$1,150 / year</span>
                    </div>
                </div>
            </section>
            <section className='p-3'>
                <div className='flex shadow-md rounded p-3 border border-slate-300'>
                    <div className='flex items-center'>
                        <Image
                        src={Room}
                        alt=''
                        />
                    </div>
                    <div className='ml-5 text-[#515151] space-y-2'>
                        <h1 className='text-xl font-semibold w-48'>2 bedroom flat lorem</h1>
                        <h5 className='w-44'>Lara's avenue, Damico, Ile-ife</h5>
                        <h6 className='flex items-center'>4.5 <Star size={15}/></h6>
                        <h3 className='flex items-center'><ThumbsUp size={20}/>1.1k <Share className='ml-3' size={20}/>1.1k <MessageSquare className='ml-3' size={20}/>1.1k  </h3>
                    </div>
                    <div className='flex flex-col justify-between items-end basis-[40%]'>
                        <Heart/>
                        <span className='text-lg font-bold text-[#3d6ef4]'>$1,150 / year</span>
                    </div>
                </div>
            </section>
            <div>
                
            </div>
        </section>
        <section className='basis-[30%]'>
            <div>
                <Image
                src={Maps}
                alt=''
                />
            </div>
            <div className=''>
                <h6>images</h6>
                <div className='flex justify-evenly flex-wrap'>
                </div>

            </div>
        </section>
    </main>
  )
}

import './globals.css'
import Image from 'next/legacy/image'

import {Button} from 'antd'
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <nav className='flex flex-row justify-between bg-white z-50 shadow-sm w-full h-16 p-5 sticky top-0'>
          <div className="basis-1/4 flex justify-center text-sm"><h1>logo<b>NestQuest</b></h1></div>
          <div className=" hidden basis-1/2 md:flex  justify-evenly text-slate-500">
            <h6 className='text-sm font-bold border-b-2 border-black text-black '>Home</h6>
            <h6 className='text-sm'>Search</h6>
            <h6 className='text-sm'>FAQs</h6>
            <h6 className='text-sm'>Contact Us</h6>
          </div>
          <div className="basis-1/4 flex justify-center">
            <Link href={"/login"} ><Button type='text' className='text-sm'>Sign In</Button></Link>
            <Link href={"/signup"} ><Button type='primary' className='bg-[#0042EC] border-none text-sm ml-2 h-8 text-white'>Sign Up</Button></Link>
          </div>
        </nav>
        {children}
        <footer className='bg-[#376FFF] px-5 lg:pl-20 lg:pr-20 lg:pt-20 mt-10  w-full'>
        {/* <div>
        <Image
        src="/footpng2x.png"
        alt=""
        width={500}
        height={500}
        // layout='fill'
        objectFit='cover'
    />
          </div> */}
            <section className='lg:flex p-6 pt-6 lg:p-0  lg:pt-0 lg:justify-between flex-wrap text-white'>
            <div className='basis-1/4 text-left mt-7 lg:mt-0'>
              <h2 className='text-2xl font-semibold'>NestQuest</h2>
              <p className='mt-2 text-sm'>Unlock Your Dream Home: The Trusted Choice for House Rentals</p>
            </div>
            <div className='basis-1/2 mt-8 lg:mt-0 mr-16 lg:px-20 text-left lg:text-center'>
              <h2 className='text-2xl font-semibold'>Connect with Us:</h2>
              <h3 className='text-2xl font-semibold'>Your Journey Starts Here!</h3>
              <Button  className='border text-white mt-3 border-l-white'>Contact Us</Button>
            </div>
            </section>
            <div className='border-b-2 w-full lg:mt-24'></div>
            <div className='text-white text-center mt-5 hidden lg:block'>
              <span className='ml-16'>About</span>
              <span className='ml-16'>Blog</span>
              <span className='ml-16'>Lorem</span>
              <span className='ml-16'>Lpsum</span>
              <span className='ml-16'>Dolor</span>
            </div>
            <div className='text-white text-center mt-5 hidden lg:block'>
              <span className='ml-10'>Facebook</span>
              <span className='ml-10'>Instagram</span>
              <span className='ml-10'>Twitter</span>
              <span className='ml-10'>GitHub</span>
            </div>

            <p className='text-center mt-16 text-white'>c 2023 NestQuest Inc. All rights reserved.</p>
          </footer>
      </body>
    </html>
  )
}

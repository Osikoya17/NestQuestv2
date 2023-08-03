import './globals.css'
import Image from 'next/legacy/image'
import {FacebookIcon, GithubIcon, InstagramIcon, Twitter} from 'lucide-react'
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
        <footer className='mt-10 relative w-full'>
        <div className='absolute -z-20 w-full h-full hidden md:block'>
        <Image 
        src="/footpng2x.png"
        alt=''
        className='w-full h-full'
        width={2000}
        height={820}
        layout='responsive'
        objectFit='cover'/>
          </div>
          <div className='absolute -z-20 w-full h-full md:hidden'>
          <Image 
          src="/footpng2x.png"
          alt=''
          className='w-full h-full'
          width={2000}
          height={2500}
          layout='responsive'
          objectFit='cover'/>
          </div>
          <section className='lg:flex px-5 lg:pl-20 lg:pr-20 lg:pt-20 pt-6 lg:p-0 lg:justify-between flex-wrap text-white'>
            <div className='basis-1/4 lg:pl-7 text-left mt-7 lg:mt-0'>
              <h2 className='text-2xl font-semibold'>NestQuest</h2>
              <p className='mt-2 text-sm'>Unlock Your Dream Home: The Trusted Choice for House Rentals</p>
            </div>
            <div className='basis-1/2 mt-8 lg:mt-0 mr-16 lg:px-20 text-left lg:text-center'>
              <h2 className='text-2xl font-semibold'>Connect with Us:</h2>
              <h3 className='text-2xl font-semibold'>Your Journey Starts Here!</h3>
              <Button  className='border text-white mt-3 border-l-white'>Contact Us</Button>
            </div>
            </section>
            <div className='px-6'>
            <div className='border-b-2 w-full mt-10 lg:mt-24 px-10'></div>
            </div>
            <div className='text-white text-center text-sm mt-16 hidden lg:block'>
              <span className='ml-16'>About</span>
              <span className='ml-16'>Blog</span>
              <span className='ml-16'>Lorem</span>
              <span className='ml-16'>Lpsum</span>
              <span className='ml-16'>Dolor</span>
            </div>
            <div className='text-white text-center mt-12 hidden mt- lg:flex justify-center'>
              <Twitter className='ml-6'/>
              <FacebookIcon className='ml-6'/>
              <InstagramIcon className='ml-6'/>
              <GithubIcon className='ml-6'/>
            </div>

            <p className='text-center mt-10 text-white'>2023 NestQuest Inc. All rights reserved.</p>
          </footer>
      </body>
    </html>
  )
}

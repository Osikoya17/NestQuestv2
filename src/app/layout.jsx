import './globals.css'

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
          <footer className='bg-[#0042EC] p-20  w-full h-full'>
            <section className='flex justify-between text-white'>
            <div className='basis-1/4'>
              <h2 className='text-2xl font-semibold'>NestQuest</h2>
              <p className='mt-2 text-sm'>Unlock Your Dream Home: The Trusted Choice for House Rentals</p>

            </div>
            <div className='basis-1/2'>
              <h2 className='text-2xl text-center font-semibold'>Connect with us: Your Journey Starts Here!</h2>
              <Button type='text' className='border border-l-white'>Contact Us</Button>
            </div>
            </section>
          </footer>
      </body>
    </html>
  )
}

"use client"
import { Button, Checkbox, Input } from "antd";
import {Lato} from "next/font/google";
import Link from 'next/link'
import {useState} from 'react'


const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
export default function Signup() {
  const [landlord, setLandlord] = useState(false)
  const createLandlord = () =>{
    !landlord?setLandlord(true):""
  }
  const createStudent = () =>{
    landlord?setLandlord(false):"";
  }
  const createUser = ()=>{
    
  }
  return (
    <main
      style={lato.style}
      className="flex items-center mb-10 p-10 lg:pt-10 flex-col"
    >
      <h4 className="mt-2 text-xl font-bold text-[#343434]">
        Create an account{" "}
      </h4>
      <section className="w-full  mt-5 flex flex-col font-medium shadow-lg p-4 lg:w-[40%] border border-slate-100">
        <div className="p-2">
          <label htmlFor="fullname" className="text-sm text-[#353535]">
            Fullname
          </label>
          <Input className="h-8" name="fullname" placeholder="Firstname, Lastname" />
        </div>
        <div className="p-2 mt-3">
          <label htmlFor="email" className="text-sm text-[#353535]">
            Email address
          </label>
          <Input className="h-8" name="email" />
        </div>
        {landlord && (
          <div className="p-2">
            <label htmlFor="number" className="text-sm text-[#353535]">
            Phone number <span className="font-light text-slate-400">(whatsapp preferably)</span>
            </label>
            <Input className="h-8" name="number"/>
          </div>
        )}
        {landlord && (
        <div className="p-2">
          <label htmlFor="address" className="text-sm text-[#353535]">
            Address
          </label>
          <Input className="h-8" name="address" />
        </div>
        )}
        <div className="p-2 mt-3">
          <label htmlFor="password" className="text-sm text-[#353535]">
            Password
          </label>
          <Input className="h-8" name="password" label="Fullname" />
        </div>
        <div className="p-2 mt-3">
          <label htmlFor="password" className="text-sm text-[#353535]">
            Confirm Password 
          </label>
          <Input className="h-8" name="password" label="Fullname" />
        </div>
        <div className="flex justify-between  p-2 mt-3">
          <Button
            className="w-48 h-10 lg:h-7 text-[#ABA5A5] focus:bg-[#0042EC] focus:text-white"
            style={lato.style}
            onClick={createStudent}
          >
          I am a Student
          </Button>
          <Button
            className="w-48 h-10 lg:h-7 text-[#ABA5A5] focus:bg-[#0042EC] focus:text-white"
            style={lato.style}
            onClick={createLandlord}
          >
          I am a LandLord
          </Button>
        </div>
        <Checkbox className="p-2 text-[#353535] mt-3" style={lato.style}>
          I agree to all <span className="text-[#0042EC]">Terms and Conditions</span>
        </Checkbox>
        <Button
          type="primary"
          className="mt-4 h-10 bg-[#0042EC] border-none text-sm ml-2 text-white"
          style={lato.style}
          
        >
          Sign Up
        </Button>
      </section>
      <h6 className="mt-5 text-sm">
        {" "}
        Already have an account? <Link href={"/login"}><span className="text-[#0042EC]">Sign In</span></Link>
      </h6>
    </main>
  );
}

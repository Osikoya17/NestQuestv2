'use client'
/* eslint-disable react/no-unescaped-entities */
import {Button,Input,Checkbox,notification} from 'antd'
import {Raleway, Lato} from 'next/font/google'
import Image from 'next/legacy/image'
import {useState} from 'react'
import Link from 'next/link'


const raleway = Raleway({subsets:['latin']})
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
export default function Login() {
  const url = "https://nest-quest.onrender.com"
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [api, contextHolder] = notification.useNotification();


  const loginUser = async()=>{
    if(email =="" || password == ""){
      api["error"]({
        message: 'Error',
        description:
          'Please Fill all The Field Provided',
      });
    }else{
      await fetch (`${url}/login/`,{
        method:'POST',
        body: JSON.stringify({
          email:email,
          password:password
        }),
        headers:{
          'Content-Type' : 'application/json'
        }
      })
    }
  }
  // async function signinUsers (data){
  //   'use server'
  //   const email = data.get("email").valueOf()
  //   const password = data.get("password").valueOf()
  //   if(typeof email !== "string" || email.length === 0 || email.includes("@") === "false"){
  //     throw new Error('Invalid Email')
  //     console.log("okay");
  //   }else if (password.length === 0 ){}
  // }

  return (
    <main style={lato.style} className="flex items-center mb-10 justify-center p-10 lg:pt-10 flex-col">
      {contextHolder}
        <h4 className="lg:mt-5 text-xl font-bold text-[#343434]">Sign in to your account</h4>
        {/* FORM Section */}
        <section className=" w-full mt-10  lg:mt-5 flex flex-col shadow-md p-4 lg:w-[35%] border border-slate-100">
            <div className='p-2 mt-3'>
            <label htmlFor="email" className='text-sm text-[#353535]'>Email address</label>
            <Input 
            className=' h-10 lg:h-8' 
            name='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='p-2 mt-3'>
            <label htmlFor="password" className='text-sm text-[#353535]'>Password</label>
            <Input 
            className='h-10 lg:h-8' 
            name='password' 
            value={password}
            onChange={(f)=>setPassword(f.target.value)}/>
            </div>
            <div className='flex justify-between  p-2 mt-3'>
            <Checkbox style={lato.style}>
            Remember me
            </Checkbox >
            <p className='text-xs text-[#0042EC]'>Forgot Password?</p>
            </div>
            <button  onClick={loginUser} className=' h-10 mt-4 bg-[#0042EC] border-none rounded text-sm ml-2 text-white' style={lato.style}>Sign in</button>
            <h5 className='text-center text-sm text-[#353535] mt-5'>Or</h5>
            <Button className='mt-4 h-10 border border-slate-200 text-sm ml-2 text-black' style={lato.style}> Sign in with Google</Button>
        </section>

        <h6 className='mt-5 text-sm'>Don't have an account? <Link href={"/signup"}><span className='text-[#0042EC]'>Sign Up</span></Link></h6>

      </main>
  )
}

 
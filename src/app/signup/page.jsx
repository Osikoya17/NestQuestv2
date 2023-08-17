"use client"
import { Button, Checkbox, Input,notification } from "antd";
import {Lato} from "next/font/google";
import Link from 'next/link'
import { useRouter } from "next/navigation";
import {useState,useEffect} from 'react'


const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
export default function Signup() {
  const url = "https://nest-quest.onrender.com"
  const [landlord, setLandlord] = useState(false)
  const [ comments, setComments ] = useState([])
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [error, setError]= useState(false)
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();
  useEffect(() => {
    const getUsers= async()=>{
      const response = await fetch(`${url}/user/`);
      const comments =  await response.json();
      setComments ( comments )
    }
    getUsers()
  }, [])
  console.log(comments);
  
  const createLandlord = () =>{
    !landlord?setLandlord(true):""
  }
  const createStudent = () =>{
    landlord?setLandlord(false):"";
  }
  const createUser = async()=>{
    if(firstname == "" || lastname=="" || email =="" || password == ""){
      api["error"]({
        message: 'Error',
        description:
          'Please fill all the fields provided',
      });
    }
    else{
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

      // Add the new user to the existing array
      const newUser = {         
        firstname:firstname,
        lastname:lastname,
        email: email,
        password:password};
      existingUsers.push(newUser);
  
      // Save the updated array back to localStorage
      localStorage.setItem('users', JSON.stringify(existingUsers));
      api["success"]({
        message: 'Success',
        description:
          'User Created sucessfully',
      })
      router.push('/dashboard')
    }}
    //   await fetch (`${url}/signup/`,{
    //     method:'POST',
    //     body: JSON.stringify({
    //       username:firstname,
    //       email:email,
    //       password1:password,
    //       password2:password
    //     }),
    //     headers:{
    //       'Content-Type' : 'application/json'
    //     }
    //   })
    // }
  return (
    <main
      style={lato.style}
      className="flex items-center mb-10 p-10 lg:pt-10 flex-col"
    >
      {contextHolder}
      <h4 className="mt-2 text-xl font-bold text-[#343434]">
        Create an account{" "}
      </h4>
      <section className="w-full  mt-5 flex flex-col font-medium shadow-lg p-4 lg:w-[40%] border border-slate-100">
        <div className="p-2">
          <label htmlFor="firstname" className="text-sm text-[#353535]">
            Firstname
          </label>
          <Input className="h-8" name="firstname" value={firstname} onChange={(r)=>setFirstname(r.target.value)} />
        </div>
        <div className="p-2">
          <label htmlFor="lastname" className="text-sm text-[#353535]">
            Lastname
          </label>
          <Input className="h-8" name="lastname" value={lastname} onChange={(g)=>setLastname(g.target.value)}/>
        </div>
        <div className="p-2 mt-3">
          <label htmlFor="email" className="text-sm text-[#353535]">
            Email address
          </label>
          <Input 
          className="h-8" 
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
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
          <Input className="h-8" 
          type="password"
          name="password" 
          label="Fullname"
          value={password}
          onChange={(f)=>setPassword(f.target.value)} />
        </div>
        <div className="p-2 mt-3">
          <label htmlFor="password" className="text-sm text-[#353535]">
            Confirm Password 
          </label>
          <Input className="h-8" 
          type="password"
          name="password" 
          label="Fullname"
          value={password}
          onChange={(q)=>setPassword(q.target.value)} />
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
          onClick={createUser}
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

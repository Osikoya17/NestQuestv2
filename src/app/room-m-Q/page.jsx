'use client'



import React from "react"
import { Divider } from 'antd';
import { Radio } from 'antd';
import { useState } from "react";
import { Button,Checkbox, Input} from 'antd';
import Link from "next/link";

import Image from "next/legacy/image";




// components needed
import ContactCArd from "@/components/ContactCArd";
import { Sidebar } from "@/components/Sidebar";



// constants and functions




    





export default function Roomq(){



    const [value,setvalue] = useState(null);

    const [value1,setvalue1] = useState(null);

    const [value2,setvalue2] = useState(null);

    const [value3,setvalue3] = useState(null);

    const [value4,setvalue4] = useState(null);

    const [value5,setvalue5] = useState(null);

    const [value6,setvalue6] = useState(null);

    const onChange = (e)=>{
        console.log('radio checked',e.target.value);
        setvalue(e.target.value)    
    }

    const onChange1 = (e)=>{
        console.log('radio checked',e.target.value1);
        setvalue1(e.target.value1)    
    }
    const onChange2 = (e)=>{
        console.log('radio checked',e.target.value);
        setvalue2(e.target.value)    
    }

    const onChange3 = (e)=>{
        console.log('radio checked',e.target.value);
        setvalue3(e.target.value3)    
    }
    const onChange4 = (e)=>{
        console.log('radio checked',e.target.value);
        setvalue4(e.target.value)    
    }
    const onChange5 = (e)=>{
        console.log('radio checked',e.target.value5);
        setvalue5(e.target.value)    
    }
    const onChange6 = (e)=>{
        console.log('radio checked',e.target.value);
        setvalue6(e.target.value)    
    }




    return(

        <main className="flex">

            <Sidebar />
        <div className={`flex gap-[20px] space-y-1 m-30 flex-col my-[10px] w-[650px] sm:max-w-screen-sm px-[0px]` }>

            <div className="flex items-center justify-between p-[20px] h-[180px] bg-[#E8EEFF]">
                <div className="flex flex-col text-black">
                    <h2 className="text-[23px] font-semibold">Unlock Your Ideal Roomates</h2>
                    <h6 className="text-[15px] font-medium">Prepared for your perfect match?</h6>
                </div>

                <div>
                    <Image src={'/Asset 2 3.png'} width={250} height={250} alt="icon" className="flex object-contain"/>
                </div>
            </div>

        {/* Question form */}


            <div className="flex flex-col px-[10px]">

            <div className="flex flex-col gap-[5px]">
                <h3 className="font-medium">Create Profile</h3>
                <p className="text-[12px]  text-[#515151]">By sharing a bit about yourself, you're taking the first step towards a harmonious and fulfilling living experience. Let's embark on this quest together – share your story, and we'll find your perfect match!</p>
            </div>
            <Divider />
            <div className="flex flex-col gap-[20px] px-[10px] ">
                <div>
                    <h2 className="font-semibold text-[13px]">How would you describe your daily routine, including sleeping patterns and social activities?</h2>
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}><h6 className="font-normal  text-[13px]">Early Riser</h6></Radio>
                        <Radio value={2}><h6 className="font-normal  text-[13px]">Night Owl</h6></Radio>
                        <Radio value={3}><h6 className="font-normal  text-[13px]">Active Social Life</h6></Radio>
                        <Radio value={4}><h6 className="font-normal  text-[13px]">Quiet and Reserved</h6></Radio>
                    </Radio.Group>
                </div>
                <div>
                    <h2 className="font-semibold text-[13px]">What are your hobbies and interests that you enjoy spending your free time on?</h2>
                    <Radio.Group onchange={onChange1} value1={value1}>
                        <Radio value={1}><h6 className="font-normal  text-[13px]">Outdoor Activities</h6></Radio>
                        <Radio value={2}><h6 className="font-normal  text-[13px]">Arts and Creativity</h6></Radio>
                        <Radio value={3}><h6 className="font-normal  text-[13px]">Sports and Fitness</h6></Radio>
                        <Radio value={4}><h6 className="font-normal  text-[13px]">Gaming and Tech</h6></Radio>
                    </Radio.Group>
                </div>
                <div>
                    <h2 className="font-semibold text-[13px]">What is your typical study routine, and do you prefer a quiet or collaborative study environment?</h2>
                    <Radio.Group onchange={onChange2} value2={value2}>
                        <Radio value={1}><h6 className="font-normal  text-[13px]">Prefer Quiet Study Space</h6></Radio>
                        <Radio value={2}><h6 className="font-normal  text-[13px]">Enjoy Collaborative Study</h6></Radio>
                        <Radio value={3}><h6 className="font-normal  text-[13px]">Mix of Both</h6></Radio>
                    </Radio.Group>
                </div>
                <div>
                    <h2 className="font-semibold text-[13px]">How would you describe your communication style and your approach to resolving conflicts?</h2>
                    <Radio.Group onchange={onChange3} value3={value3}>
                        <Radio value={1}><h6 className="font-normal  text-[13px]">Assertive Communicator</h6></Radio>
                        <Radio value={2}><h6 className="font-normal  text-[13px]">Easygoing and Flexible</h6></Radio>
                        <Radio value={3}><h6 className="font-normal  text-[13px]">Diplomatic Problem Solver</h6></Radio>
                    </Radio.Group>
                </div>
                <div>
                    <h2 className="font-semibold text-[13px]">Are you comfortable with socializing and having guests over in the living space?</h2>
                    <Radio.Group onchange={onChange4} value4={value4}>
                        <Radio value={1}><h6 className="font-normal  text-[13px]">Highly Sociable</h6></Radio>
                        <Radio value={2}><h6 className="font-normal  text-[13px]">Moderate Socializing</h6></Radio>
                        <Radio value={3}><h6 className="font-normal  text-[13px]">Prefer Private Space</h6></Radio>
                    </Radio.Group>
                </div>
                <div>
                    <h2 className="font-semibold text-[13px]">Do you have any preferences or habits related to smoking and drinking?</h2>
                    <Radio.Group onchange={onChange5} value5={value5}>
                        <Radio value={1}><h6 className="font-normal  text-[13px]">Non-Smoker/Non-Drinker</h6></Radio>
                        <Radio value={2}><h6 className="font-normal  text-[13px]">Occasional Smoker/Drinker</h6></Radio>
                        <Radio value={3}><h6 className="font-normal  text-[13px]">Regular Smoker/Drinker</h6></Radio>
                    </Radio.Group>
                </div>
                <div>
                    <h2 className="font-semibold text-[13px]">Are you comfortable with socializing and having guests over in the living space?</h2>
                    <Radio.Group onchange={onChange6} value6={value6}>
                        <Radio value={1}><h6 className="font-normal  text-[13px]">Highly Sociable</h6></Radio>
                        <Radio value={2}><h6 className="font-normal  text-[13px]">Moderate Socializing</h6></Radio>
                        <Radio value={3}><h6 className="font-normal  text-[13px]">Prefer Private Space</h6></Radio>
                    </Radio.Group>
                </div>
            
        </div>

        <div className=" flex items-center w-[100px] h-[40px] py-[50px] px-[10px]">
            <Link href={'/room-m'} >
                <Button type="primary" style={{background:'#376FFF'}} block>
                    Submit
                </Button>
            </Link>
            
        </div>



        </div>

        {/* right Profile Panel */}

        </div>
        <div className='hidden contact  w-[390px] h-[570px] border-2 mx-[10px] my-[10px] sm:flex overflow-x-auto overflow-y-auto'>
            <ContactCArd Name='Omotola Bolaji Adeyemi' img='/lady.svg' Details='I am 200level Student of Obafemi Awolowo University, I am studying Computer Science and Engineering' Numbers='0908855774532'email='@gmail.com' />
        </div>


        </main>



        

    )
}

  
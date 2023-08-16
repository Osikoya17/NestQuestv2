'use client'
 
import { useState } from "react";

import React from 'react'
import {LayoutDashboard, 
  ListMinus, 
  MessageSquare,
  Star, 
  Users2, 
  Headphones,
  Settings,ArrowRightCircle,
  ArrowLeftCircle
  
} from 'lucide-react'

import { Sidebar } from "../../components/Sidebar";
import Mysilder from '../../components/Mysilder';
import Rmlist from '../../components/Rmlist'
import RmCard from "@/components/RmCard";
import ContactCArd from "@/components/ContactCArd";

export default function Roomm(){
    const [status,setStatus]= useState(null);
    const [status1, setStatus3]=useState(null)
    const [status2, setStatus4]=useState(null)
    const [status3, setStatus5]=useState(null)
    return(


        <main className="flex">
        <Sidebar />
        <div className="flex gap-[20px] space-y-1 m-30 flex-col my-[10px] w-[650px]">
            <div className=" w-full px-8 py-4 bg-[#E8EEFF] font-medium ">Room Matching</div>
            <div>
                <Mysilder />
            </div>
            <div>
                <div className="fon-medium text-[19px] px-4">
                    <h3>Explore Roommates</h3>
                </div>
            </div>
            <div>
                {/* lower list */}
                <Rmlist />  
            </div>
        </div>
        <div className="className='hidden contact w-[390px] h-[570px] border-2 mx-[10px] my-[10px] sm:flex overflow-x-hidden">   
        <ContactCArd Name='Omotola Bolaji Adeyemi' img='/lady.svg' Details='I am 200level Student of Obafemi Awolowo University, I am studying Computer Science and Engineering' Numbers='0908855774532'email='@gmail.com' />
        </div>
        </main>
    )
}
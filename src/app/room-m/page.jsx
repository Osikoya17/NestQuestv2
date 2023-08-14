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

import Myslider from '../../../components/Myslider'
import Rmlist from '../../../components/Rmlist'
import ContactCArd from '../../../components/ContactCArd'
import RmCard from '../../../components/RmCard'
import Sidebar from '../../../components/Sidebar'


export default function roomm(){

  const [status,setStatus]= useState(null);
  
  const [status1, setStatus3]=useState(null)

  const [status2, setStatus4]=useState(null)

  const [status3, setStatus5]=useState(null)



  return(
    

   

    <main className="flex ">
    

  <Sidebar   />
  <div className={`flex gap-[20px] space-y-1 m-30 flex-col my-[10px] w-[650px] sm:max-w-screen-sm ` }>
    <div className={`w-full px-8 py-4 bg-[#E8EEFF] font-medium rounded-lg sm:text-sm`}>Room Matching</div>


    {/* Slider section */}

    <div>
      <div className=''>
        <Myslider />
        <img src="" alt="" />
      </div>
    </div>
  
    <div>
      <div className='font-medium text-[19px] px-4 '>
        <h3>Explore Roomates</h3>
      </div>
      <div>

        {/* lower list */}
        <Rmlist />
        <div className='flex gap-[12px] h-[300px] px-[10px] flex-col overflow-y-auto'>
                <div onClick={()=>{setStatus(true);setStatus3(false);setStatus4(false); setStatus5(false)}}><RmCard img='tt.png'/></div>
                <div onClick={()=>{setStatus3(true);setStatus(false);setStatus4(false); setStatus5(false)}}><RmCard img='n.webp' /></div>
                <div onClick={()=>{setStatus4(true);setStatus(false);setStatus3(false); setStatus5(false)}} ><RmCard img='tt.png' /></div>
                <div onClick={()=>{setStatus5(true);setStatus(false);setStatus3(false); setStatus4(false)}}><RmCard img='tt.png' /></div>
        </div>
      </div>
    </div>





        {/* Profile Bar */}
  </div>
  <div className='hidden w-[325px] h-[570px] border-2 mx-[10px] my-[10px] sm:flex overflow-x-hidden'>



     <div id='1' className=''>
      {
        status?<ContactCArd Name='Omotola Bolaji Adeyemi' img='tt.png' Details='I am 200level Student of Obafemi Awolowo University, I am studying Computer Science and Engineering' Numbers='0908855774532'email='@gmail.com' />:false
      }
      
    </div>
    <div>
      {
        status1?<ContactCArd Name='Omotola Bolaji Adeyemi' img='n.webp' Details='I am 200level Student of Obafemi Awolowo University, I am studying Computer Science and Engineering' Numbers='08123456799'email='oojk@gmail.com' />:false
      }
    </div>
    <div>
      {
        status2?<ContactCArd Name='Omotola Bolaji Adeyemi' img='d.webp' Details='I am 200level Student of Obafemi Awolowo University, I am studying Computer Science and Engineering' Numbers='00980456799'email='455k@gmail.com' />:false
      }
    </div>
    <div>
      {
        status3?<ContactCArd img='m.webp' Details='I am 200level Student of Obafemi Awolowo University, I am studying Computer Science and Engineering' Numbers='00980456799'email='455k@gmail.com' />:false
      }
    </div> 
  </div>
  </main>

  )
}

'use client'
import {  } from 'react'
import {LayoutDashboard, 
    ListMinus, 
    MessageSquare,
    Star, 
    Users2, 
    Headphones,
    Settings,ArrowRightCircle,
    ArrowLeftCircle,GripVertical
    
  } from 'lucide-react'


import Image from 'next/legacy/image'




export default function RmCard({img}){
    return(

        <div className='flex justify-between items-center h-[100px] mx-[5px] my-[19px] px-[20px] rounded-lg shadow-md hover:bg-slate-300 hover:cursor-pointer'>
            <div className='flex gap-[20px]'>
                <Image src={img} alt='dp' width={80} height={80} className='w-[88px] h-[88px] object-cover rounded-full ' />
                <div>
                    <div className='font-medium text-[18px] my-[2px] text-[#515151]'>Student Name</div>
                    <div className='text-[15px]'>Student@OAU</div>
                    <div className='text-[15px]'>Ile-Ife,Nigeria</div>
                </div>
            </div>
            <div>
                 <button>
                    <GripVertical></GripVertical>
                </button>
            </div>
       
       
       
        </div>



    )
}
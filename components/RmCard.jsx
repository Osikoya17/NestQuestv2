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









export default function Myslider({img}) {
    return (

        <div className='flex justify-between items-center max-w-[639px] max-h-[114px] rounded-lg shadow-md sm:max-[50px]:px-9 py-5 hover:bg-slate-300 hover:cursor-pointer'  >
            <div className='flex gap-[20px]'>
                <img className='w-[88px] h-[88px] object-cover rounded-full ' src={img} alt="dp" />
                <div className=' flex flex-col gap-[3px]'>
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
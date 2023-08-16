'use client'
import {  } from 'react'
import { Button,Checkbox, Input} from 'antd';
import Image from 'next/legacy/image';
import {LayoutDashboard, 
    ListMinus, 
    MessageSquare,
    Star, 
    Users2, 
    Headphones,
    Settings,ArrowRightCircle,
    ArrowLeftCircle,Phone
    
    
  } from 'lucide-react'



export default function ContactCArd({img,Name,Details,Numbers,email,age}){
    return(

        <div className="flex flex-col w-full h-[600px] items-center gap-[40px]   p-[10px]">
        <div>
            
        </div>
        <div className='flex flex-col items-center'>
            <Image src={img} width={100} height={100} className='object-cover rounded-full' alt='dp'/>
            {/* <img className="w-[100px] h-[100px] object-cover rounded-full" src={img} alt="dp" /> */}
            <div className='text-center' >
                <h2 className='font-medium' >{Name}</h2>
                <p className='text-[14px] font-normal'>Student @ OAU</p>
                <p className='text-[14px] font-normal'>Ile-Ife, Nigeria</p>
            </div>
        </div>
        
        <div className='text-[13px] text-left'>
            <p>{Details}</p>
        </div>
        <div className='flex flex-col items-center gap-[20px]'>
            <div className='flex justify-between gap-[10px]'>
                <Button className='w-[250px] h-[30px] rounded-lg bg-[#376FFF] text-white text-[11px]'>
                    Send Request
                </Button>
                
                <button className=' flex items-center w-[30px] px-[5px] rounded-lg bg-[#E8EEFF] fill-white'><Phone color='#376FFF' /></button>
            </div>
            <div className='flex gap-[50px]'>
                <button><a href=""><Image width={22} height={20} src={'/WhatsApp svg.png'} alt="" /></a></button>
                <button><a href=""><Image width={22} height={20} src={'/Facebook svg.png'} alt="" /></a></button>
                <button><a href=""><Image width={22} height={20} src={'/instagram svg.png'} alt="" /></a></button>
            </div>
        </div>
        <div className='flex flex-col text-left gap-[10px] w-full px-[20px] '>
            <div className='flex gap-[50px]'>
                <p className='font-thin text-[13px] justify-between'>Phone:</p>
                <p className='font normal text-[12px] font-semibold text-left'>{Numbers}</p>
            </div>
            <div className='flex gap-[50px]'>
                <p className='font-thin text-[13px] justify-between'>Email:</p>
                <p className='font normal text-[12px] font-semibold text-left'>{email}</p>
            </div>
            <div className='flex gap-[50px]'>
                <p className='font-thin text-[13px] justify-between'>Age:</p>
                <p className='font normal text-[12px] font-semibold text-left'>{age}years</p>
            </div>
        </div>

        <div>

        </div>
    </div>


    )



}
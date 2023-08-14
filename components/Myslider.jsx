'use client'
import {  } from 'react'
import Card from '../components/Card'


import {LayoutDashboard, 
    ListMinus, 
    MessageSquare,
    Star, 
    Users2, 
    Headphones,
    Settings,ArrowRightCircle,
    ArrowLeftCircle
    
  } from 'lucide-react'

const data =[
    {img: '/tt.png'},
    {img: '/n.webp'},
    {img: '/m.webp'},
    {img: '/d.webp'},
    {img: '/v.jpg'},
    
]

const scrollLeft = () => {
    document.getElementById('content').scrollLeft -= 200;
}

const scrollRight = () => {
    document.getElementById('content').scrollLeft += 200;
}



export default function Myslider() {
    return (

        
        <div className='w-[700px] min-[120px] gap-[30px] m-0 sm:text-sm'>
            <div className={`flex flex-row justify-between gap w-full px-4`}>
                <div className={`font-medium text-xl`}>Recommended Roommates</div>
                <div className='flex items-center gap-2 md:h-full md:w-24'>
                    <button onClick={scrollLeft}><ArrowLeftCircle color='#376FFF' /></button>
                    <button onClick={scrollRight}><ArrowRightCircle color='#376FFF' /></button>
                </div>
            </div>
            <div id='content' className='relative carousel  h-[220px] flex items-center gap-[20px] justify-start overflow-x-auto w-full overflow-y-clip py-[40px]  '>
                <div className='w-[183px] h-[235px] m-2 p-2'> <Card img='tt.png' /></div>
                <div className='w-[183px] h-[235px] m-2 p-2'><Card img='n.webp' /></div>
                <div className='w-[183px] h-[235px] m-2 p-2'><Card img='d.webp' /></div>
                <div className='w-[183px] h-[235px] m-2 p-2'><Card img='m.webp' /></div>
                <div className='w-[183px] h-[235px] m-2 p-2'><Card img='v.jpg' /></div>
                <div className='w-[183px] h-[235px] m-2 p-2'><Card img='tt.png' /></div> 
            </div>
        </div>
        
    )
  }
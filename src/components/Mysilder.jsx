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


  const scrollLeft = () => {
    document.getElementById('content').scrollLeft -= 200;
}

const scrollRight = () => {
    document.getElementById('content').scrollLeft += 200;
}  



export default function Mysilder(){
    return(

        <div className='w-[650px] gap-[30px] m-0'>
            <div className='flex flex-row justify-between px-4'>
                <div className='font-medium text-xl'>Recommended Roommates</div>
                <div className='flex items-center gap-2'>
                    <button onClick={scrollLeft}><ArrowLeftCircle color='#376FFF' /></button>
                    <button onClick={scrollRight}><ArrowRightCircle color='#376FFF' />  </button>
                    
                </div>

            </div>
            <div id='content' className='carousel h-[250px] flex items-center gap-[20px] justify-start overflow-x-auto overflow-y-clip py-[40px]'>
                <div className='w-[183px] h-[235px] m-2 p-2'><Card img={'/lady.svg'} /></div>
                <div className='w-[183px] h-[235px] m-2 p-2'><Card img={'/lady.svg'} /></div>
                <div className='w-[183px] h-[235px] m-2 p-2'><Card img={'/lady.svg'} /></div>
                <div className='w-[183px] h-[235px] m-2 p-2'><Card img={'/lady.svg'} /></div>
                <div className='w-[183px] h-[235px] m-2 p-2'><Card img={'/lady.svg'} /></div>
                <div className='w-[183px] h-[235px] m-2 p-2'><Card img={'/lady.svg'} /> </div>

            </div>
        </div>




    )



}
/* eslint-disable react/no-unescaped-entities */
import {LayoutDashboard,
    Users2, 
    Headphones,
    Settings,
    ListMinus,
    Star,
    ThumbsUp,
    MessageSquare,
    Share,
    Heart
  } from 'lucide-react'
  import {Lato, Raleway} from 'next/font/google'
  import {Button, Input} from 'antd'
import Link from 'next/link'
import Image from "next/legacy/image"
import Lady from '../../../../public/people.svg'
import Maps from '../../../../public/map.svg'

import Room from '../../../../public/room.svg'
import { Sidebar } from '@/components/Sidebar'

const lato = Lato({subsets:['latin'],weight:["400","700"]})
const raleway = Raleway({subsets:['latin']})
export default function page() {
  return (
    <main className="flex" style={lato.style}>
    <Sidebar/>
    <section className='flex basis-[84%] mb-12 flex-wrap'>
        <section className="lg:basis-[65%] basis-[100%]">
            <header className='bg-[#E8EEFF] px-3 flex justify-evenly items-center w-full h-44 rounded'>
                <div className='' style={lato.style}>
                    <h1 className='text-2xl font-semibold'>Hi, Jane</h1>
                    <h5 className='text-[#515151] font-'>Ready to find your perfect apartment?</h5>
                </div>
                <div>
                <Image
                    src={Lady}
                    alt=''
                    />
                </div>
            </header>
            <section className='flex p-5 px-3 text-lg font-light'  style={lato.style}>
                <div className='flex p-3 justify-center bg-[#E8EEFF] rounded items-center'>
                    <ListMinus />
                    <span className='ml-1 font-medium'>Listing</span>
                </div>
                <Link href={"/dashboard/favourites"}><div className='flex p-3 justify-center items-center'>
                    <Star />
                    <span className='ml-1 font-medium'> Favourites</span>
                </div>
                </Link>
            </section>
            <section className='p-3 mt-3 lg:mt-0'>
                <div className='flex flex-wrap lg:justify-between justify-center  shadow-md rounded p-3 border border-slate-300'>
                    <div className='flex items-center'>
                        <Image
                        src={Room}
                        alt=''
                        />
                    </div>
                    <div className='ml-5 text-[#515151] space-y-2'>
                        <h1 className='text-xl font-semibold w-48'>2 bedroom flat lorem</h1>
                        <h5 className='w-44'>Lara's avenue, Damico, Ile-ife</h5>
                        <h6 className='flex items-center'>4.5 <Star size={15}/></h6>
                        <h3 className='flex items-center'><ThumbsUp size={20}/>1.1k <Share className='ml-3' size={20}/>1.1k <MessageSquare className='ml-3' size={20}/>1.1k  </h3>
                    </div>
                    <div className='flex lg:flex-col justify-between  w-full lg:w-32 mt-3 lg:mt-0 items-end'>
                        <Heart/>
                        <span className='text-lg font-bold text-[#3d6ef4]'>$1,150 / year</span>
                    </div>
                </div>
            </section>
            <section className='p-3 mt-3 lg:mt-0'>
                <div className='flex flex-wrap lg:justify-between justify-center  shadow-md rounded p-3 border border-slate-300'>
                    <div className='flex items-center'>
                        <Image
                        src={Room}
                        alt=''
                        />
                    </div>
                    <div className='ml-5 text-[#515151] space-y-2'>
                        <h1 className='text-xl font-semibold w-48'>2 bedroom flat lorem</h1>
                        <h5 className='w-44'>Lara's avenue, Damico, Ile-ife</h5>
                        <h6 className='flex items-center'>4.5 <Star size={15}/></h6>
                        <h3 className='flex items-center'><ThumbsUp size={20}/>1.1k <Share className='ml-3' size={20}/>1.1k <MessageSquare className='ml-3' size={20}/>1.1k  </h3>
                    </div>
                    <div className='flex lg:flex-col justify-between  w-full lg:w-32 mt-3 lg:mt-0 items-end'>
                        <Heart/>
                        <span className='text-lg font-bold text-[#3d6ef4]'>$1,150 / year</span>
                    </div>
                </div>
            </section>
            <section className='p-3 mt-3 lg:mt-0'>
                <div className='flex flex-wrap lg:justify-between justify-center  shadow-md rounded p-3 border border-slate-300'>
                    <div className='flex items-center'>
                        <Image
                        src={Room}
                        alt=''
                        />
                    </div>
                    <div className='ml-5 text-[#515151] space-y-2'>
                        <h1 className='text-xl font-semibold w-48'>2 bedroom flat lorem</h1>
                        <h5 className='w-44'>Lara's avenue, Damico, Ile-ife</h5>
                        <h6 className='flex items-center'>4.5 <Star size={15}/></h6>
                        <h3 className='flex items-center'><ThumbsUp size={20}/>1.1k <Share className='ml-3' size={20}/>1.1k <MessageSquare className='ml-3' size={20}/>1.1k  </h3>
                    </div>
                    <div className='flex lg:flex-col justify-between  w-full lg:w-32 mt-3 lg:mt-0 items-end'>
                        <Heart/>
                        <span className='text-lg font-bold text-[#3d6ef4]'>$1,150 / year</span>
                    </div>
                </div>
            </section>
            <section className='p-3 mt-3 lg:mt-0'>
                <div className='flex flex-wrap lg:justify-between justify-center  shadow-md rounded p-3 border border-slate-300'>
                    <div className='flex items-center'>
                        <Image
                        src={Room}
                        alt=''
                        />
                    </div>
                    <div className='ml-5 text-[#515151] space-y-2'>
                        <h1 className='text-xl font-semibold w-48'>2 bedroom flat lorem</h1>
                        <h5 className='w-44'>Lara's avenue, Damico, Ile-ife</h5>
                        <h6 className='flex items-center'>4.5 <Star size={15}/></h6>
                        <h3 className='flex items-center'><ThumbsUp size={20}/>1.1k <Share className='ml-3' size={20}/>1.1k <MessageSquare className='ml-3' size={20}/>1.1k  </h3>
                    </div>
                    <div className='flex lg:flex-col justify-between  w-full lg:w-32 mt-3 lg:mt-0 items-end'>
                        <Heart/>
                        <span className='text-lg font-bold text-[#3d6ef4]'>$1,150 / year</span>
                    </div>
                </div>
            </section>


            <div>
                
            </div>
        </section>
        {/* <section className='basis-[35%] bg-slate-400'>
            <div>
                <Image
                src={Maps}
                alt=''
                />
            </div>
            <div className=''>
                <h6>images</h6>
                <div className='flex justify-evenly flex-wrap'>
                </div>

            </div>
        </section> */}
    </section>
    </main>
  )
}

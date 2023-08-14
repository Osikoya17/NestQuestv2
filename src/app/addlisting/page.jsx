import { Sidebar } from "@/components/Sidebar";
import {Lato, Raleway} from 'next/font/google'
import Lady from '../../../public/people.svg'
import Image from "next/legacy/image"
import Link from 'next/link'
import {ListMinus,Plus} from 'lucide-react'


const lato = Lato({subsets:['latin'],weight:["400","700"]})
export default function Page() {
    return (
        <main className="flex" style={lato.style}>
            <Sidebar/>
            <section className="basis-[84%] mb-12">
            <header className='bg-[#E8EEFF] px-10 flex justify-between items-center w-full h-44 rounded'>
                <div className='' style={lato.style}>
                    <h1 className='text-2xl font-semibold'>Good afternoon, Jane</h1>
                </div>
                <div>
                <Image
                    src={Lady}
                    alt=''
                    />
                </div>
            </header>
            <section className='flex p-5 px-3 text-lg font-light'  style={lato.style}>
                <div className='flex px-5 py-1 justify-center bg-[#E8EEFF] rounded items-center'>
                    <ListMinus color="#0042EC" />
                    <span className='ml-1 font-medium'>Listing</span>
                </div>
            </section>
            <section className="p-3">
            <div
            style={{width:270}}
            className="border border-slate-300 rounded">
            <Link href="">
            <div
            style={{height:170}}
            className="bg-[#E8EEFF] flex justify-center items-center cursor-pointer">
                <Plus size={150} color="#0042EC"/>
            </div>
            </Link>
            <div className="p-3 flex flex-col justify-center items-center">
                <h3>Add Listing</h3>
                <h3 className="mt-3">Upload apartment</h3>
            </div>
            
            </div>
            </section>
            </section>
        </main>
    )
    }
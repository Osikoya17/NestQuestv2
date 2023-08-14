import { Sidebar } from "@/components/Sidebar";
import {Lato, Raleway} from 'next/font/google'
import Lady from '../../../public/people.svg'
import Image from "next/legacy/image"
import Link from 'next/link'


const lato = Lato({subsets:['latin'],weight:["400","700"]})
export default function Page() {
    return (
        <main className="flex" style={lato.style}>
            <Sidebar/>
        </main>
    )
    }
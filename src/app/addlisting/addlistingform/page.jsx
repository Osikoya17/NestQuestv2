'use client'
import { Sidebar } from "@/components/Sidebar";
import {Lato, Raleway} from 'next/font/google'
import Image from "next/legacy/image"
import Link from 'next/link'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef , useState } from 'react'


const lato = Lato({subsets:['latin'],weight:["400","700"]})
export default function Page() {
    const like = useRef();
    const ChangeColor = () => {
        if (like.current.style.color = "#909090"){
          like.current.style.color = "red"
        }else if(like.current.style.color = "red"){
          like.current.style.color = "gray"
        }
      };
    return (
        <main className="flex" style={lato.style}>
            <Sidebar/>

            <FontAwesomeIcon
                            icon={faHeart}
                            style={{ color: "#909090" }} 
                            ref={like}
                            onMouseOver={ChangeColor} 
            />
        </main>
    )
    }
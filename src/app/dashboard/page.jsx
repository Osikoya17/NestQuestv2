"use client";
/* eslint-disable react/no-unescaped-entities */
import { 
    ListMinus,
    Star,
    ThumbsUp,
    MessageSquare,
    Share,
    Heart,
    Phone,
    X
  } from 'lucide-react'
import {homes} from '../data' 
import {faHeart, faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Lato, Raleway} from 'next/font/google'
import Maps from '../../../public/map.svg'
import {Button, Input,Dropdown} from 'antd'
import Link from 'next/link'
import Image from "next/legacy/image"
import Lady from '../../../public/people.svg'
import Room from '../../../public/room.svg'
import { useRef , useState } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { comments } from './comment';

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const raleway = Raleway({ subsets: ["latin"] });
export default function Dashboard() {
  const [color,setColor] = useState("grey");
  const [starNo,setStartNo] =useState(0)
  const overlay = useRef()
  const [visible , setVisible] = useState(false)
  const ChangeColor = (id) => {
    color == "grey" ? setColor("red") : setColor('grey')
    
    // if (id.current.style.color = "#909090"){
    //   id.current.style.color = "red"
    // }else{
    //   id.current.style.color = "#909090"
    // }
  };
  const on =(no)=>{
    overlay.current.style.display = "flex"
    setStartNo(no)
  }
  const off =()=>{
    overlay.current.style.display = "none"
  }
  const viewInfo = () => {
    if(!visible)
      setVisible(true)
    }
  
  return (
    <main className="flex" style={lato.style}>
      <Sidebar />
      <section className="flex basis-[84%] mb-12 flex-wrap">
        <section className="lg:basis-[65%]  basis-[100%]">
        <div ref={overlay}  className="fixed hidden justify-center items-center  w-full h-full top-0 left-0 right-0 bottom-0 bg-[#89898985] z-20">
          {starNo == 1 && (
               <div className='flex flex-col justify-center items-center w-[550px] h-[400px] border px-10 py-3 bg-white shadow-sm'>
                <h4 onClick={off} className='w-full cursor-pointer'><X/></h4>
               <h2>Write a review</h2>
               <div className='flex justify-evenly w-full mt-3 px-10 py-3'>
                   <FontAwesomeIcon icon={faStar} size='xl' style={{ color: "#0042EC" }}  />
                   <Star size={30} strokeWidth={1} />
                   <Star size={30} strokeWidth={1} />
                   <Star size={30} strokeWidth={1} />
                   <Star size={30} strokeWidth={1} />
               </div>
                <div>
                <p className=' w-full  text-xs'>your review</p>
                <textarea name="" id="" cols="50" rows="5" className='text-sm mt-2 border rounded border-slate-400 focus:outline-none p-3'></textarea>
              </div>
              <Button className='bg-[#0042EC] w-full text-white mt-3'>Submit</Button>
              </div>
          )}
          {starNo == 2 && (
              <div className='flex flex-col justify-center items-center w-[550px] h-[400px] border px-10 py-3 bg-white shadow-sm'>
                <h4 onClick={off} className='w-full cursor-pointer'><X/></h4>
              <h2>Write a review</h2>
              <div className='flex justify-evenly w-full mt-3 px-10 py-3'>
                   <FontAwesomeIcon icon={faStar} size='xl' style={{ color: "#0042EC" }}  />
                   <FontAwesomeIcon icon={faStar} size='xl' style={{ color: "#0042EC" }}  />
                   <Star size={30} strokeWidth={1} />
                   <Star size={30} strokeWidth={1} />
                   <Star size={30} strokeWidth={1} />
              </div>
              <div>
                <p className=' w-full  text-xs'>your review</p>
                <textarea name="" id="" cols="50" rows="5" className='text-sm mt-2 border rounded border-slate-400 focus:outline-none p-3'></textarea>
              </div>
              <Button className='bg-[#0042EC] w-full text-white mt-3'>Submit</Button>
              </div>
          )}
          {starNo == 3 && (
              <div className='flex flex-col justify-center items-center w-[550px] h-[400px] border px-10 py-3 bg-white shadow-sm'>
              <h4 onClick={off} className='w-full cursor-pointer'><X/></h4>
              <h2>Write a review</h2>
              <div className='flex justify-evenly w-full mt-3 px-10 py-3'>
                   <FontAwesomeIcon icon={faStar} size='xl' style={{ color: "#0042EC" }}  />
                   <FontAwesomeIcon icon={faStar} size='xl' style={{ color: "#0042EC" }}  />
                   <FontAwesomeIcon icon={faStar} size='xl' style={{ color: "#0042EC" }}  />
                   <Star size={30} strokeWidth={1} />
                   <Star size={30} strokeWidth={1} />
              </div>
              <div>
                <p className=' w-full  text-xs'>your review</p>
                <textarea name="" id="" cols="50" rows="5" className='text-sm mt-2 border rounded border-slate-400 focus:outline-none p-3'></textarea>
              </div>
              <Button className='bg-[#0042EC] w-full text-white mt-3'>Submit</Button>              
              </div>
          )}    
         {starNo == 4 && (
              <div className='flex flex-col justify-center items-center w-[550px] h-[400px] border px-10 py-3 bg-white shadow-sm'>
              <h4 onClick={off} className='w-full cursor-pointer'><X/></h4>
              <h2>Write a review</h2>
              <div className='flex justify-evenly w-full mt-3 px-10 py-3'>
                   <FontAwesomeIcon icon={faStar} size='xl' style={{ color: "#0042EC" }}  />
                   <FontAwesomeIcon icon={faStar} size='xl' style={{ color: "#0042EC" }}  />
                   <FontAwesomeIcon icon={faStar} size='xl' style={{ color: "#0042EC" }}  />
                   <FontAwesomeIcon icon={faStar} size='xl' style={{ color: "#0042EC" }}  />
                   <Star size={30} strokeWidth={1} />
              </div>
              <div>
              <p className=' w-full  text-xs'>your review</p>
              <textarea name="" id="" cols="50" rows="5" className='text-sm mt-2 border rounded border-slate-400 focus:outline-none p-3'></textarea>
              </div>
              <Button className='bg-[#0042EC] w-full text-white mt-3'>Submit</Button>
              </div>
          )}  
          {starNo == 5 && (
          <div className='flex flex-col justify-center items-center w-[550px] h-[400px] border px-10 py-3 bg-white shadow-sm'>
          <h4 onClick={off} className='w-full cursor-pointer'><X/></h4>
          <h2>Write a review</h2>
          <div className='flex justify-evenly w-full mt-3 px-10 py-3'>
              <FontAwesomeIcon icon={faStar} size='xl' style={{ color: "#0042EC" }}  />
              <FontAwesomeIcon icon={faStar} size='xl' style={{ color: "#0042EC" }}  />
              <FontAwesomeIcon icon={faStar} size='xl' style={{ color: "#0042EC" }}  />
              <FontAwesomeIcon icon={faStar} size='xl' style={{ color: "#0042EC" }}  />
              <FontAwesomeIcon icon={faStar} size='xl' style={{ color: "#0042EC" }}  />
          </div>
        <div>
          <p className=' w-full  text-xs'>your review</p>
          <textarea name="" id="" cols="50" rows="5" className='text-sm mt-2 border rounded border-slate-400 focus:outline-none p-3'></textarea>
        </div>
        <Button className='bg-[#0042EC] w-full text-white mt-3'>Submit</Button>
        </div> 
        )}               
        </div>
          <div className=' sticky top-16 z-10'>
          <header className="bg-[#E8EEFF] px-3 flex justify-evenly  items-center w-full h-44 rounded">
            <div className="" style={lato.style}>
              <h1 className="text-2xl font-semibold">Hi, Jane</h1>
              <h5 className="text-[#515151] font-">
                Ready to find your perfect apartment?
              </h5>
            </div>
            <div>
              <Image src={Lady} alt="" />
            </div>
          </header>
          <section
            className="flex p-5 px-3 text-lg font-light bg-white"
            style={lato.style}
          >
            <div className="flex p-3 justify-center bg-[#E8EEFF] rounded items-center">
              <ListMinus />
              <span className="ml-1 font-medium">Listing</span>
            </div>
            <Link href={"/dashboard/favourites"}>
              <div className="flex p-3 justify-center items-center">
                <Star />
                <span className="ml-1 font-medium"> Favourites</span>
              </div>
            </Link>
          </section>
          </div>
          <section className="flex px-3 text-lg font-light" style={lato.style}>
            <div className="flex justify-center bg-[#E8EEFF] rounded items-center">
            </div>
            {/* <div className="flex justify-center items-center ml-2">
              <Star />
              <span className="ml-1 font-medium"> Favourites</span>
            </div> */}
          </section>
          {homes.map((e)=>{
              return(
                  <section key={e.id} className="p-3 mt-3 lg:mt-0 cursor-pointer" onClick={viewInfo} style={lato.style}>
                      <div className="flex flex-wrap lg:justify-evenly justify-center  shadow-md rounded p-3 border border-slate-300  hover:border-slate-400 hover:shadow-lg">
                          <div className="flex items-center basis-1/4 ">
                          <Image src={Room} alt="" />
                          </div>
                          <div className="ml-5 text-[#515151] space-y-2 ">
                          <h1 className="text-xl font-semibold w-48">{e.type}</h1>
                          <h5 className="w-44">{e.location}</h5>
                          <h6 className="flex items-center">{e.rating}<Star size={15} />
                          </h6>
                          <h3 className="flex items-center">
                              <ThumbsUp size={20} />
                              1.1k <Share className="ml-3" size={20} />
                              1.1k <MessageSquare className="ml-3" size={20} />
                              1.1k{" "}
                          </h3>
                          </div>
                          <div className="flex lg:flex-col justify-between  w-full lg:w-32 mt-3 lg:mt-0 items-end">
                          <FontAwesomeIcon
                              icon={faHeart}
                              style={{ color: `${color}` }} 
                              // ref={like}
                              onClick={()=>ChangeColor(e.id)} 
                          />

                          {/* <div ref={hide} style={{display:"none"}} className="text-lg w-6">
                              <FontAwesomeIcon
                              icon={faHeart}
                              style={{ color: "#da1616" }}
                              />
                          </div> */}
                          <span className="text-lg font-bold text-[#0042EC]">{e.price}</span>
                          </div>
                      </div>
              </section>
              )
          })}
        </section>
        <section className="lg:basis-[35%] shadow-md border border-slate-400 h-screen rounded-md sticky hidden lg:block pb-20 top-16 overflow-y-auto overflow-x-hidden overflow-hidden no-scrollbar">
          {visible &&(
          <>            
            <div>
              <Image src={Maps} alt="" />
            </div>
            <h6 className="p-3">images</h6>
            <div className="p-3 flex justify-center flex-wrap ">
              <div className="">
                <Image src={"/rooms.jpg"} alt="" height={100} width={140} />
              </div>
              <div className="ml-3">
                <Image src={"/rooms.jpg"} alt="" height={100} width={140} />
              </div>
              <div className="">
                <Image src={"/rooms.jpg"} alt="" height={100} width={85} />
              </div>
              <div className="ml-3">
                <Image src={"/rooms.jpg"} alt="" height={100} width={85} />
              </div>
              <div className="ml-3">
                <Image src={"/rooms.jpg"} alt="" height={100} width={85} />
              </div>
            </div>
            <h6 className="pl-3 text-sm text-blue-600">see more</h6>
            <div className="p-3">
              <h3 className='text-lg'>Owner Information</h3>
              <div className='flex mt-3 justify-between'>
                <section className='flex justify-center items-center' >
                  <div className='w-8 h-8 rounded-full bg-slate-200'></div>
                  <div className='ml-1'>
                  <h1>Isaac Adewale</h1>
                  <p className='text-[#376FFF] underline -mt-2 text-sm'>isaacadewale@gmail.com</p>
                  </div>
                </section>
                <section className='flex justify-evenly items-center'>
                  <div className='bg-[#E8EEFF] p-1'><Phone size={25} color='#0042EC'/></div>
                  <MessageSquare size={25} color='#0042EC' className='ml-3'/>
                </section>

              </div>
              <div className='mt-6'>
                <h1 className='text-xl'>Rate this apartment</h1>
                <p className='text-xs mt-2'>Tell others what you think</p>
                <div className='flex justify-evenly mt-3'>
                <Star size={30} strokeWidth={1} onClick={()=>on(1)}/>
                <Star size={30} strokeWidth={1} onClick={()=>on(2)}/>
                <Star size={30} strokeWidth={1} onClick={()=>on(3)}/>
                <Star size={30} strokeWidth={1} onClick={()=>on(4)}/>
                <Star size={30} strokeWidth={1} onClick={()=>on(5)}/>
                </div>
                <p className='text-[#376FFF] text-xs mt-3'>Write a review</p>
                <div className='mt-10'>
                  <h1>Rating and reviews</h1>
                  <h1 className="text-2xl">4.0</h1>
                  <div className="flex justify-start items-start mt-2">
                  <FontAwesomeIcon icon={faStar} size='xs' style={{ color: "#0042EC" }}  />
                  <FontAwesomeIcon icon={faStar} size='xs' style={{ color: "#0042EC" }}  />
                  <FontAwesomeIcon icon={faStar} size='xs' style={{ color: "#0042EC" }}  />
                  <FontAwesomeIcon icon={faStar} size='xs' style={{ color: "#0042EC" }}  />
                  <Star size={15} strokeWidth={1} onClick={on}/>
                  <span className='text-xs ml-2'>1,289</span>
                  </div>
                </div>
                {comments.map((e)=>{
                  return(
                    <section key={e.id} className='mt-10'>
                    <div className='flex justify-start items-center'>
                      <p className='w-8 h-8 rounded-full bg-slate-300'></p>
                      <h1 className='ml-2'>{e.name}</h1>
                    </div>
                    <p className='flex mt-2'>
                    <FontAwesomeIcon icon={faStar} size='xs' style={{ color: "#0042EC" }}  />
                    <FontAwesomeIcon icon={faStar} size='xs' style={{ color: "#0042EC" }}  />
                    <FontAwesomeIcon icon={faStar} size='xs' style={{ color: "#0042EC" }}  />
                    <FontAwesomeIcon icon={faStar} size='xs' style={{ color: "#0042EC" }}  />
                    <Star size={15} strokeWidth={1} onClick={on}/>
                    <span className='text-xs ml-4'>{e.date}</span>
                    </p>
                    <p className='text-xs mt-2 w-72'>{e.comments}</p>
                  </section>
                  )
                })}
              
              </div>
            </div>
            </>
            )}
          </section>
        
      </section>
    </main>
  );
}

'use client'
import { Lato } from "next/font/google";
import { paths } from "./sidebarlinks";
import Link from "next/link";
import {usePathname} from 'next/navigation'



const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
export function Sidebar() {
  const pathname = usePathname()
  return (
    <aside
      id="sidenav"
      className="basis-[16%] font-semibold border-r-2  border-slate-300 min-h-screen shadow-sm"
    >
      <nav className="sticky left-0 top-16">
        <ul className="font-semibold " style={lato.style}>
          {paths.map((e)=>{
            return(
              <li
              key={e.id}
              className={`flex items-center justify-center
              font-medium cursor-pointer p-3`}
            >
              <Link href={e.link}>
                <div className={` ${pathname === e.link ? "bg-[#E8EEFF]": ""} flex p-3 hover:bg-[#E8EEFF] rounded-full`}>
                  <div className={` ${pathname === e.link ? "text-[#0042EC]": ""}`}>
                  {e.icon}
                  </div>
                  
                  <span className="w-52 ml-3 hidden md:block font-semibold ">
                    {e.name}
                  </span>
                </div>
              </Link>
            </li>
            )
          })}
          <section className=" mt-7 pr-7 lg:ml-7 hidden lg:block flex-col items-center pb-5">
            <div className="flex justify-center items-center h-72 w-full basis-1/2 bg-slate-100 rounded">
              ADS
            </div>
            <div className="flex justify-center items-center h-36 mt-5 w-full basis-1/2 bg-slate-100 rounded">
              ADS
            </div>
          </section>
        </ul>
      </nav>
    </aside>
  );
}
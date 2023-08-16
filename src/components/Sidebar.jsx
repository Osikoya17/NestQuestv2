import {
  LayoutDashboard,
  ListMinus,
  MessageSquare,
  Star,
  Users2,
  Headphones,
  Settings,
} from "lucide-react";
import { Lato } from "next/font/google";
import Link from "next/link";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export function Sidebar() {
  return (
    <aside
      id="sidenav"
      className="basis-[16%] font-semibold border-r-2 stickty left-0 top-0 border-slate-300 min-h-screen shadow-lg"
    >
      <nav className="">
        <ul className="font-semibold " style={lato.style}>
          <li
            className={`flex items-center justify-center
            font-medium cursor-pointer p-3`}
          >
            <Link href={"/#"}>
              <div className="flex p-3 bg-[#E8EEFF]  hover:bg-[#E8EEFF] rounded-full">
                <LayoutDashboard color="#0042EC" />
                <span className="w-52 ml-3 hidden md:block font-semibold ">
                  Dashboard
                </span>
              </div>
            </Link>
          </li>
          <li
            className={`flex items-center justify-center
            font-medium cursor-pointer p-3`}
          >
            <Link href={""}>
              <div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
                <Users2 />
                <span className="w-52 ml-3 hidden md:block font-semibold ">
                  Room matching
                </span>
              </div>
            </Link>
          </li>
          <li
            className={`flex items-center justify-center
            font-medium cursor-pointer p-3`}
          >
            <Link href={"/support"}>
              <div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
                <Headphones />
                <span className="w-52 ml-3 hidden md:block font-semibold ">
                  Customer Support
                </span>
              </div>
            </Link>
          </li>
          <li
            className={`flex items-center justify-center
            font-medium cursor-pointer p-3`}
          >
            <Link href={"/settings"}>
              <div className="flex p-3 hover:bg-[#E8EEFF] rounded-full">
                <Settings />
                <span className="w-52 ml-3 hidden md:block font-semibold ">
                  Setting
                </span>
              </div>
            </Link>
          </li>
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

// export function SidebarItem({icon , text , active,alert}){
//     return(
//          <li className={
//           `flex items-center justify-center
//           font-medium cursor-pointer p-5 cursor-pointer
//             transition-colors group
//             ${active
//             ? "bg-gradient-to-tr from-indigo-200 to indigo-100 text-indigo-800"
//             : "hover:bg-indigo-50 text-gray-600"}`}>
//             <div className="flex p-3 hover:bg-blue-300 rounded-full">
//             <{icon}/>
//             </div>
//             <span className="w-52 ml-3 hidden md:block">{text}</span>
//             {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-800`}/>}
//         </li>
//     )
// }

import {LayoutDashboard, 
  ListMinus, 
  MessageSquare,
  Star, 
  Users2, 
  Headphones,
  Settings
} from 'lucide-react'
export default function Sidebar() {
  return (
    <aside className="lg:basis-1/4 basis-1/5  min-h-screen shadow-lg">
        <nav className=" border-slate-300">
          <ul className="px-10">
            <li className={
            `flex items-center justify-center
            font-medium cursor-pointer`}>
            <div className="flex p-3 hover:bg-blue-300 rounded-full">
            <LayoutDashboard className=""/>
            <span className="w-52 ml-3 hidden md:block">Dashboard</span>    

              </div>
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer`}>
            <div className="flex p-3 hover:bg-blue-300 rounded-full">
            <ListMinus />
            <span className="w-52 ml-3 hidden md:block">Listing</span>   
            </div> 
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer`}>
            <div className="flex p-3 hover:bg-blue-300 rounded-full">
            <MessageSquare/>
            <span className="w-52 ml-3 hidden md:block">Messaging</span>    
            </div>
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer `}>
            <div className="flex p-3 hover:bg-blue-300 rounded-full">
            <Star />
            <span className="w-52 ml-3 hidden md:block">Favourite</span>    
            </div>
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer`}>
            <div className="flex p-3 hover:bg-blue-300 rounded-full">
            <Users2 />
            <span className="w-52 ml-3 hidden md:block">Roomates</span>    
            </div>
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-5 `}>
            <div className="flex p-3 hover:bg-blue-300 rounded-full">
            <Headphones />
            <span className="w-52 ml-3 hidden md:block">Customer Support</span>    
            </div>
        </li> 
        <li className={
            `flex items-center justify-center
            font-medium cursor-pointer p-5`}>
            <div className="flex p-3 hover:bg-blue-300 rounded-full">
            <Settings />
            <span className="w-52 ml-3 hidden md:block">Setting</span>
            </div>
        </li> 
        </ul> 
        </nav>
    </aside>

  )
}

// export function SidebarItem({icon , text , active,alert}){
//     return(
//          <li className={
//             `relative flex items-center p-5 my-1 
//             font-medium rounded-md cursor-pointer 
//             transition-colors group
//             ${active
//             ? "bg-gradient-to-tr from-indigo-200 to indigo-100 text-indigo-800"
//             : "hover:bg-indigo-50 text-gray-600"}`}>
//             {icon}
//             <span className="w-52 ml-3">{text}</span>
//             {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-800`}/>}
//         </li>
//     )
// }
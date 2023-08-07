import Sidebar from "../../../components/Sidebar";
import {
  LayoutDashboard,
  ListMinus,
  MessageSquare,
  Star,
  Users2,
  Headphones,
  Settings,
} from "lucide-react";
export default function dashboard() {
  return (
    <main className="flex">
      <aside className="lg:basis-1/4 basis-1/5  min-h-screen shadow-lg">
        <nav className=" border-slate-300">
          <ul className="px-10">
            <li
              className={`flex items-center justify-center
            font-medium cursor-pointer p-3`}
            >
              <div className="flex p-3 hover:bg-blue-300 rounded-full">
                <LayoutDashboard className="" />
                <span className="w-52 ml-3 hidden md:block">Dashboard</span>
              </div>
            </li>
            <li
              className={`flex items-center justify-center
            font-medium cursor-pointer p-3`}
            >
              <div className="flex p-3 hover:bg-blue-300 rounded-full">
                <ListMinus />
                <span className="w-52 ml-3 hidden md:block">Listing</span>
              </div>
            </li>
            <li
              className={`flex items-center justify-center
            font-medium cursor-pointer p-3`}
            >
              <div className="flex p-3 hover:bg-blue-300 rounded-full">
                <MessageSquare />
                <span className="w-52 ml-3 hidden md:block">Messaging</span>
              </div>
            </li>
            <li
              className={`flex items-center justify-center
            font-medium cursor-pointer p-3`}
            >
              <div className="flex p-3 hover:bg-blue-300 rounded-full">
                <Star />
                <span className="w-52 ml-3 hidden md:block">Favourite</span>
              </div>
            </li>
            <li
              className={`flex items-center justify-center
            font-medium cursor-pointer p-3`}
            >
              <div className="flex p-3 hover:bg-blue-300 rounded-full">
                <Users2 />
                <span className="w-52 ml-3 hidden md:block">Roomates</span>
              </div>
            </li>
            <li
              className={`flex items-center justify-center
            font-medium cursor-pointer p-3`}
            >
              <div className="flex p-3 hover:bg-blue-300 rounded-full">
                <Headphones />
                <span className="w-52 ml-3 hidden md:block">
                  Customer Support
                </span>
              </div>
            </li>
            <li
              className={`flex items-center justify-center
            font-medium cursor-pointer p-3`}
            >
              <div className="flex p-3 hover:bg-blue-300 rounded-full">
                <Settings />
                <span className="w-52 ml-3 hidden md:block">Setting</span>
              </div>
            </li>
          </ul>
        </nav>
      </aside>
    </main>
  );
}

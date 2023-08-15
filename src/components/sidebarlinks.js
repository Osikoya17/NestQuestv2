import {
    LayoutDashboard,
    Users2,
    Headphones,
    Settings,
  } from "lucide-react";
  
export const paths = [
    {
        id: 1,
        name: "Dashboard",
        link: "/dashboard",
        icon: <LayoutDashboard/>
    },
    {
        id: 2,
        name: "Roommate matching",
        link: "/roommatematching",
        icon: <Users2/>
    },
    {
        id: 3,
        name: "Customer Support",
        link: "/support",
        icon: <Headphones/>
    },
    {
        id: 4,
        name: "Settings",
        link: "/settings",
        icon: <Settings/>
    },
]
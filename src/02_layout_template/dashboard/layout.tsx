"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const linkData = [
    {name: "About", pathname: "/dashboard/about"},
    {name: "Setting", pathname: "/dashboard/setting"},
]

export default function DashboardLayout(props: Readonly<{ children: React.ReactNode }>) {
    const { children } = props

    const [number, setNumber] = React.useState<number>(0)
    const pathname = usePathname()

    return (
        <div className="p-4">
            <div className="mb-4">dashboard / layout.tsx</div>
            <div className="flex gap-4 font-bold text-lg mb-4 ">
                {
                    linkData.map(link => (
                        <Link className={pathname === link.pathname ? "text-purple-500" : ""} key={link.pathname} href={link.pathname}>{link.name}</Link>
                    ))
                }
            </div>
            <div>DashboardLayout: {number}</div>
            <button className="bg-custom-bule text-white p-2 rounded" onClick={()=>setNumber(number + 1)}>increase</button>
            <div>{children}</div>
        </div>
    );
}
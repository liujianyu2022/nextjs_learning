"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const linkData = [
    {name: "Performance", pathname: "/performance"},
    {name: "Reliability", pathname: "/reliability"},
    {name: "Scale", pathname: "/scale"}
]

export default function Header() {
    const pathname = usePathname()

    return (
        <div className="absolute text-white w-full z-10">
            <div className="flex justify-between items-center container mx-auto p-8">
                <div className="font-bold text-3xl">
                    <Link href="/">Home</Link>
                </div>
                <div className="text-xl space-x-4">
                    {
                        linkData.map(link => (
                            <Link className={pathname === link.pathname ? "text-purple-500" : ""} key={link.pathname} href={link.pathname}>{link.name}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
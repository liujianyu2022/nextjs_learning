"use client"

import React from "react"

export default function DashboardTemplate(props: Readonly<{children: React.ReactNode}>){
    const {children} = props

    const [number, setNumber] = React.useState<number>(0)

    return (
        <div className="border-2 border-dashed mt-4 p-4">
            <div>dashboard template {number}</div>
            <button className="bg-custom-bule p-2 text-white rounded" onClick={()=>setNumber(number + 1)} >increase</button>
            {children}
        </div>
    )
}
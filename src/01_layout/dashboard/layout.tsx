import React from "react";


export default function Layout(props: Readonly<{ children: React.ReactNode }>) {
    const { children } = props
    return (
        <div>
            <div>dashboard / layout.tsx</div>
            <div>{children}</div>
        </div>
    );
}
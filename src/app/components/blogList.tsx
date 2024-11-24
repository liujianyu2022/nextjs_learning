"use client"

import { Avatar, List } from "antd";
import Link from "next/link";
import dataSource from "../dataSource";

export default function BlogList(){
    return (
        <List
            itemLayout="horizontal"
            dataSource={dataSource}
            renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                        className="!items-center"
                        avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                        title={<Link href={`/blog/${item.id}`}>{item.title}</Link>}
                    />
                </List.Item>
            )}
        />
    )
}
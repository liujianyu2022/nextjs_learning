
import { Card } from "antd";

import dataSource from "../../dataSource";

export interface IProps{
    params: {
        id: string
    }
}

export async function generateMetadata(props: IProps){
    const {params: { id }} = props

    return {
        title: `blog detail - ${id}`
    }
}

export default function CardPage(props: IProps) {
    const {params: { id }} = props

    const item = dataSource.filter(item => item.id === id)[0]

    return (
        <Card title={item?.id} >
            <p>{item?.title}</p>
        </Card>
    )
}
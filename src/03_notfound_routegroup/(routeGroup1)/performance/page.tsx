import Main from "../../components/main";

import image2 from "/public/image2.webp"

export interface IProps {

}

export async function generateMetadata(props: IProps) {
    return {
        title: 'Performance',
    }
}

export default function Performance(props: IProps) {
    return (
        <div>
            <Main imageData={image2} content="Performance Page" />
        </div>
    )
}
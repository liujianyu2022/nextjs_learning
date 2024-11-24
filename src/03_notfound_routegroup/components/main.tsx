import Image, { StaticImageData } from "next/image"

export interface IProps{
    imageData: StaticImageData,
    content: string
}

export default function Main(props: IProps) {
    const {imageData, content} = props
    return (
        <div className="h-screen relative">

            <div className="absolute inset-0 -z-10">
                <Image src={imageData} alt="" fill style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500"></div>
            </div>

            <div className="flex justify-center pt-40">
                <h2 className="text-5xl text-white">{content}</h2>
            </div>
        </div>
    )
}
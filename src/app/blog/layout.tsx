

export default function BlogLayout(props: {children: React.ReactNode}){
    const {children} = props

    return (
        <div className="max-w-xl mx-auto mt-5">
            {children}
        </div>
    )
}

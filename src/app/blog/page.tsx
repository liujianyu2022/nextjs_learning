import { Metadata } from "next";
import BlogList from "../components/blogList";

export const metadata: Metadata = {
    title: "blog list"
}

export default function BlogPage() {
    return (
        <BlogList />
    )
}
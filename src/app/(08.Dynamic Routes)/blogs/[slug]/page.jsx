"use client"
import { useParams } from "next/navigation"

export default function BlogDetails () {
const prams = useParams()
    return (
        <>
        <div className=" bg-black h-screen w-screen flex justify-center items-center text-amber-700 text-3xl">
             <h1>blog details page {prams.slug}</h1> </div>
        </>
    )
}
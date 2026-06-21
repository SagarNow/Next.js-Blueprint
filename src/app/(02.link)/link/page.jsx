//  link - used to navigate between pages - client side navigation - for routing too 
import Link from "next/link"
const page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-950 text-white">

      <Link href="/" className="hover:text-blue-500 ml-4">Home</Link>
   
      <Link href="/about" className="hover:text-blue-500 ml-4">About</Link>
    </div>
  )
}

export default page
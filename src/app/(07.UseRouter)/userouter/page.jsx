"use client"
import { useRouter } from 'next/navigation'

// use router - In Next.js, useRouter() is a hook that lets you navigate between pages programmatically. Instead of the user clicking a link, your code decides when to move to another page

const page = () => {
// 1st way
  const router = useRouter() // we have to const router = useRouter() so that we can use router.push() to navigate to another page

  
//2nd way 
const navigation = (page) => {
    router.push(page)
}
  return (
    <div className='flex flex-col display-flex justify-center items-center h-screen w-screen bg-amber-100'>

<h1> use Router  </h1>

<button onClick={()=> router.push('/')}>
 route </button> 

 <button onClick={()=> navigation('/')}>
 route </button>  

 </div>
  )
}

export default page

// next/router - is for client components means we have to use "use client" directive
// next/navigation - is for server components means we don't have to use "use client" directive
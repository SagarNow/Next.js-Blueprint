"use client"
import React from 'react'
// event - events are use to 
//  handle copy event 
const handleCopy = ()=> {
    alert("sudhar ja bhai! ")
}

// ---------------- 
const page = () => {
    
  return (

    <div className='w-screen h-screen bg-black text-white flex items-center justify-center'
     onCopy={handleCopy}>

     <p> dont copy it bro !! </p>

    </div>
  )
}

export default page
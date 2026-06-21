
"use client"
const page = () => {
    // on mouse move event
    const onMouseMove = () => {
        console.log("mouse moved")
        alert("mouse on the box !")
    }
    // -----------------
  return (
    <div className='h-screen w-screen bg-black text-white flex items-center justify-center text-2xl'
    >
        <div className='h-50 w-50 bg-amber-200' onMouseMove={onMouseMove}></div>
    </div>
  )
}

export default page
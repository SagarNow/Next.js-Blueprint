"use client"
const page = () => {
    // handle on change event - 
    const onChangeHandler = ()=> 
    {
        console.log("something changed !")
        alert("something changed !")
    }
  return (
   <div className='h-screen w-screen bg-black text-white flex items-center justify-center text-2xl'
    >
<input type="text" onChange={onChangeHandler} className='bg-white text-black p-2 rounded' />
    </div>
  )
}

export default page
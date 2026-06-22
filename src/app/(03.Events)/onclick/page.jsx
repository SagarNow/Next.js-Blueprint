"use client"

const onClickHandler = ()=> {
    alert ("button clicked !!")
    console.log("button clicked !! from console")
}
const page = () => {
  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center text-2xl">
      <button 
      className="bg-white text-black px-4 py-2 rounded cursor-pointer"     
      onClick={onClickHandler}>Click Me</button> 

    </div>
  )
}

export default page
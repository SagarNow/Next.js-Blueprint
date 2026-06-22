"use client"
// onsubmit - this is a function that is called when the form is submitted
const onSubmit = ()=>
{alert("submit done !!")
  console.log("something submited !! ")
}
// ---------------------------------
// page - this is the default export of the page
export const page = () => {
  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center">
    
      <form action={onSubmit} className="p-4 bg-white text-black rounded-lg flex flex-col gap-4">
        <input type="text" className="p-2 border border-black rounded-lg" />
        <button type="submit" className="p-2 bg-black text-white rounded-lg">Submit</button>
      </form>
      
    </div>
  )
}
export default page

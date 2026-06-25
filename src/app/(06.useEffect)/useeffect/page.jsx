"use client"
import { useEffect, useState } from 'react'

const page = () => {

    const [count , setCount] = useState (0);

//  useEffect (()=> {}, [])

   useEffect (() =>{  
    // the code that we want to run
    // optional retun function 

    console.log("The count is" ,count);

    return () => {
    console.log("Clean up!! ");
}

   }, [ 
    // dependency array 
    // updatation :- jab kuch update ho tab kuch run kre

    count
   ]); 

// hooked to count when somehing happned to count it will run the code 

  return (
    <div className="flex flex-row gap-5">

<p>count :  {count} </p>
<button onClick={()=> setCount(count+1)}> add 1</button>
<button onClick={()=> setCount(count-1)}> sub 1</button>
<button onClick={()=> setCount(0)}>clear</button>
    </div>
  )
}

export default page

// use effect  :- useEffect is a React Hook that lets you perform side effects in a functional component.
// It runs after the component renders (mounting) and can be used for tasks like fetching data, updating the DOM, setting up timers, etc.
// https://youtu.be/-4XpG5_Lj_o
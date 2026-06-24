// state : - data wich changes with time 
// use state is hook in react use to chnage the state
// https://youtu.be/V9i3cGD-mts
"use client"
import { useState } from "react";
const page = () => {

  // count - current state 
  // setcount - updated state 
  // usestate () - initial value 
  const [count,setCount]= useState (0);


  return (
  <>

    <div>Count : {count}</div>

    <button onClick={()=> setCount(count+1)}>Incerement</button>
    <button onClick={()=> setCount(count-1)}>Decerement</button>
    <button onClick={()=> setCount(0)}>Restart</button>
</>
  )
}

export default page
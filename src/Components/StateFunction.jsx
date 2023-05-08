import React, { useContext, useState } from "react";
import { userContext,channelContext } from "./Context";

export const StateFunction = ()=>{
    console.log('hello');
    const name = useContext(userContext)
    const num = useContext(channelContext)
    console.log(name);
//     // console.log(useState);
//     const [count,setCount] = useState(0)
//   const handleAddCount = ()=>{
//        setCount((prevCount)=>prevCount+1)  
//     }
//     const handleResetCount =()=>{
//         setCount(0)
//     }
//     const handleMinusCount=()=>{
//         setCount((prevCount)=>prevCount-1)
//     }
    return (
        <>
        <h1>{num}</h1>
            {/* <button onClick={handleResetCount}>Reset</button>
            <button onClick={handleAddCount}>Add</button>
            <button onClick={handleMinusCount}>Minus</button> */}

        </>
    )
}
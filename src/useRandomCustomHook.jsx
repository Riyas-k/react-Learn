import { useState } from "react";


export default function useRandomCustomHook() {
    const [color,setColor] = useState('')
    const changeColor = ()=>{
        setColor(Math.random().toString(16).substr(-6))

    }
    return {color,changeColor}
}

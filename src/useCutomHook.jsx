import {useState} from 'react'

export default function useCutomHook() {
    const [text,showText] = useState('true')
   const changeText = ()=>{
    showText(!text)
   }
   return {text,changeText}
}

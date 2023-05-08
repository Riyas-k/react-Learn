import React, { useEffect, useState } from 'react'

function EffectMouse() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = (e)=>{
        console.log('render');
     setX(e.clientX)
     setY(e.clientY)
    }

    useEffect(()=>{
        console.log('log');
        window.addEventListener('mousemove',logMousePosition)
    },[])
  return (
    <div>
      <h1>X-{x} y - {y}</h1>
    </div>
  )
}

export default EffectMouse

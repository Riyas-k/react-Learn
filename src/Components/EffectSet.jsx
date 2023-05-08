import React, { useEffect, useState } from 'react'

function EffectSet() {
    const [count,setCount] = useState(0);

    const tick = ()=>{
        setCount(count+1)  
    }
    useEffect(()=>{
        console.log('loh');
        let interval = setInterval(tick,1000)
        return ()=>{
            
            clearInterval(interval)
        }
    },[])
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default EffectSet

import React, { useEffect, useState } from 'react'

function EffectCount() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        document.title = `You clicked ${count} times`
        console.log('render');
    },[])
  return (
    <div>
      <button onClick={()=>setCount((prevCount)=>prevCount+1)}>click {count} times</button>
    </div>
  )
}

export default EffectCount

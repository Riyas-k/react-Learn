import React, { useEffect, useReducer, useRef } from 'react';
import reducer from './reducer';

function ReducerCount() {
    // const [count,dispatch] = useReducer(reducer,1)
    const inputref = useRef(null)

    useEffect(()=>{
      inputref.current.focus()
    })

  return (
    <div>
    <input ref={inputref} type="text" />
    {/* <h1>{count}</h1>
      <button onClick={()=>dispatch({type:'INCR',value:5})}>Increment</button>
      <button onClick={()=>dispatch({type:'DEC',value:2})}>Decr</button>
      <button onClick={()=>dispatch({type:'RESET'})}>Reset</button> */}
    </div>
  )
}

export default ReducerCount

import React, { useState } from 'react'

function StateArray() {
    const [items,setItems] = useState([])

    const addItem = ()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
      <button onClick={addItem}>Add value</button>
      {
        items.map((item)=> 
           
            (
            
            <h1 key={item.id}>{item.value}</h1>
        ))
      }
    </div>
  )
}

export default StateArray

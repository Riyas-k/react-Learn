import React, { useState } from 'react'

function StateObject() {
    const [name,setName] = useState({firstName:'',lName:''})

    const handleLname = (e)=>{
        setName({...name,lName:e.target.value})
    }
  return (
    <div>
      <input type="text" onChange={(e)=>setName({...name,firstName:e.target.value})}/>
      <input type="text" onChange={handleLname} />
      <h1>firstName {name.firstName}</h1>
      <h1>lName {name.lName}</h1>
      {/* <h1>{JSON.stringify(name)}</h1> */}
    </div>
  )
}

export default StateObject

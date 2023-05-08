import axios from 'axios'
import React, { useState } from 'react'

function EffectFetch() {
    const [albums,setAlbums] = useState([])
    const [id,setId] = useState(1)
    const handleAlbums = (e)=>{
      e.preventDefault()
       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response)=>{
        setAlbums(response.data)
        console.log(response.data);
       }).catch((err)=>{
        console.log(err);
       })
    }
  return (
    <div>
    <input type="number" value={id} onChange={(e)=>setId(e.target.value)} />
      <button onClick={(e)=>handleAlbums(e)}>show</button>
     
           <h1 key={albums.id} >{albums.title}</h1>
        
    </div>
  )
}

export default EffectFetch

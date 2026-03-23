import React, { useState } from 'react'

function Item() {
    const [fruits,setFruits] = useState(['apple','bannana','cat'])

    const addFruit = ()=>{
        setFruits((prevdata)=>([...prevdata,"orange"]))
    }

  return (
    <div>
      <h2>Fruits:</h2>
      {fruits.map((item,index)=>(
        <p key={index}>{item}</p>
      ))}
      <button onClick={addFruit}>add fruit</button>
    </div>
  )
}

export default Item
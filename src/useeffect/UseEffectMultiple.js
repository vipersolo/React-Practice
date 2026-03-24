import React, { useEffect, useState } from 'react'

function UseEffectMultiple() {
    const [user,setUser] = useState(null)
    const [theme,setTheme] = useState('light')
    

    //always remember useffect runs after render not connected with onclick function.
    useEffect(()=>{
        console.log("user changed...")
    },[user])

    useEffect(()=>{
        console.log("theme changed...")
    },[theme])
  return (
    <div>
      <button onClick={()=>setUser('new user antony')}>Set User</button>
      <button onClick={()=>setTheme('dark')}>set Theme</button>
    </div>
  )
}

export default UseEffectMultiple
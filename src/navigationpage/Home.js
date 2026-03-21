import React from 'react'
import { useNavigate } from 'react-router-dom' // not Navigate . needed is useNavigate


 function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <h2>Welcome Home</h2>
      <button onClick={()=>navigate('/contact')}>Go to Contact</button> 
    </div>
  )
}

export default Home
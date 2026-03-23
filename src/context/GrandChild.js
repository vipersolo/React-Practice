import { useContext } from "react";
import UserContext from "./UserContext"

import React from 'react'

function GrandChild() {
    const user = useContext(UserContext)
  return (
    <div>
      <h2>UserProfile from App.js to grandchild</h2>
      <p><strong>Name:</strong>{user.name}</p>
      <p><strong>Age:</strong>{user.age}</p>
    </div>
  )
}

export default GrandChild
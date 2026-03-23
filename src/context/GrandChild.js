import { useContext } from "react";
import UserContext from "./UserContext"

import React from 'react'

function GrandChild() {
    const user = useContext(UserContext)
  return (
    <div>
      <p><strong>Name:</strong>{user.name}</p>
      <p><strong>Age:</strong>{user.age}</p>
    </div>
  )
}

export default GrandChild
import React, { useState } from 'react'

function Profile() {
    const [userData,setuserData] = useState({
        name:"antony",
        age:20,
        city:"aluva"
    })
    const updateAge = ()=>{
        setuserData((prevData)=>({
            ...prevData,
            age:prevData.age + 1
            }
        ))
    }

    const updateProfile = ()=>{
        setuserData((prevData)=>({
            ...prevData,
            name:"new Antony",
            city:"new city"
        }))
    }

    
  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong>{userData.name}</p>
      <p><strong>Age:</strong>{userData.age}</p>
      <p><strong>City:</strong>{userData.city}</p>
      <button onClick={updateAge}>Increse Age</button>
      <button onClick={updateProfile}>Change Pofile</button>
    </div>
  )
}

export default Profile
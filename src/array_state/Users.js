import React from "react";
import { useState } from "react";
function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "antony" },
    { id: 2, name: "kuttan" },
    { id: 3, name: "akshay" },
  ]);
  const addUser = () => {
    setUsers((prevData) => [...prevData, { id: 100, name: "veeran" }]);
  };
  const deleteUser = (id)=>{
    const updatedUsers = users.filter((user)=>(user.id !== id)) //each (user) checked  ie not id , returned 
    setUsers(updatedUsers)
  }

  const updateUser = (id)=>{
    const updatedUserss = users.map((user)=>(user.id === id)?{...user,name:"updated name"}:user)
    setUsers(updatedUserss)
  }
  return (
    <div>
      <h2>User list</h2>
      {/* //map should return 1 jsx element only ie why ( <> </> )*/}
      {users.map((user, index) => (
        <>
          <p key={index}>{user.name}</p>
          <button onClick={()=>(deleteUser(user.id))}>Delete</button>
          <button onClick={()=>(updateUser(user.id))}>Update</button>
        </>
      ))}
      <br />
      <button onClick={addUser}>Add user </button>
    </div>
  );
}

export default Users;

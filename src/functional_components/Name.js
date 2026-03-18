import { useState } from "react"

function Name(){
    const [name,setName] = useState("Antony")
    // const clearUser = ()=>{
    //     setName("")
    // }
    return(
        <div>
            <h1>Welcome user {name}</h1>
            <button onClick={()=>(setName(""))}>Clear</button>
        </div>
    )
}

export default Name
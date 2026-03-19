import { useState } from "react";

function Form(){
    const [name,setName] = useState("")

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(`your name is ${name}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your Name:
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="submit" />
            </label>
        </form>
    )
}

export default Form
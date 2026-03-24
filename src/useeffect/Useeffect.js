import React, { useEffect, useState } from "react";

function Useeffect() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);

  useEffect(()=>{
    console.log("Component Mounted...") // for mounting component
  },[])

  useEffect(()=>{ // component update ([variable name(ie updated)])
    console.log("Component Mounted...")
  },[counter1])

  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <div>
      <h1>Counter1</h1>
      <p>{counter1}</p>
      <button onClick={() => setCounter1(counter1 + 1)}>+</button>
        </div>
    </div>
  );
}

export default Useeffect;

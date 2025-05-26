import React from "react";
import { useState } from "react";
export default function App9() {
  const [count, setCount] = useState(10);
  const increment = () => {
    //setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };
   const decrement = () => {
    //setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div> 
      <h1>App9</h1>
    <div style={{display:"flex",textAlign:"center",alignItems:"center",gap:"10px"}}>
        <button onClick={increment}>+</button>
        <h3>{count}</h3>
        <button onClick={decrement}>-</button>
     </div>
    </div>
  );
}
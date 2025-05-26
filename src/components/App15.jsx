import React from "react";
import { useState } from "react";
import { useRef } from "react";
export default function App15() {
  const nameRef = useRef();
  const handleSubmit = () => {
    alert(nameRef.current.value);
    nameRef.current.style.color = "blue"
  };
    
  const num1Ref = useRef();
  const num2Ref = useRef();
  const [sum, setSum] = useState(null);
   const handleAdd = () => {
    const num1=parseFloat(num1Ref.current.value);
      const num2=parseFloat(num2Ref.current.value);
  setSum(num1+num2);
  };
   const colorRef = useRef();
    const textRef = useRef();
  const handleColorChange = () => {
    const color = colorRef.current.value;
    textRef.current.style.color = color;
  };

  return (
    <div>
      <h1>App15</h1>
      <h2>useRef hook - to create uncontrolled component</h2>
      <p>
        <input type="text" ref={nameRef} />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <hr />
      <p>
        <input type="number" ref={num1Ref} placeholder="enter number"  />
      
        <input type="number" ref={num2Ref} placeholder="enter number"  />
      
      <button onClick={handleAdd}>Submit</button>
<br/>
Result:{sum}
      </p>
      <hr/>
      <p>
        <input type="text" ref={colorRef} defaultValue="Blue" />
        <button onClick={handleColorChange}>Submit</button>
        <br />
        <span ref={textRef} style={{ fontSize: "20px" }}>
          Hello world
        </span>
      </p>
    </div>
  );
}
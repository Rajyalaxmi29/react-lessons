import React, { useState, useEffect } from 'react';

export default function App13() {
  const [input, setInput] = useState(0);
  const [results, setResults] = useState({
    add: 0,
    sub: 0,
    mul: 0,
    div: 0,
  });

  useEffect(() => {
    const num = Number(input);
    setResults({
      add: 100 + num,
      sub: 100 - num,
      mul: 100 * num,
      div: num !== 0 ? (100 / num).toFixed(2) : '∞',
    });
  }, [input]);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>App13</h1>
      <h2>Assignment</h2>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ fontSize: '20px', padding: '5px', width: '100px' }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
        <div style={boxStyle}>
          <h3>Addition</h3>
          <p>100 + {input} = <strong>{results.add}</strong></p>
        </div>

        <div style={boxStyle}>
          <h3>Subtraction</h3>
          <p>100 - {input} = <strong>{results.sub}</strong></p>
        </div>

        <div style={boxStyle}>
          <h3>Multiplication</h3>
          <p>100 × {input} = <strong>{results.mul}</strong></p>
        </div>

        <div style={boxStyle}>
          <h3>Division</h3>
          <p>100 ÷ {input || '0'} = <strong>{results.div}</strong></p>
        </div>
      </div>
    </div>
  );
}

const boxStyle = {
  border: '2px solid black',
  padding: '20px',
  width: '200px',
  textAlign: 'center',
  margin: '10px',
};

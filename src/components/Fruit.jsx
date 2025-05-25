import React from 'react'

export default function Fruit() {
    const products = [
    { id: 1, name: "apple", price: 23 },
    { id: 2, name: "mango", price: 30 },
    { id: 3, name: "orange", price: 45 },
     { id: 4, name: "banana", price: 45 },
  ];
  return (
    <div>
       <h2>Fruits</h2> 
       <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid black',
              padding: '10px',
              borderRadius: '8px',
              width: '120px',
              textAlign: 'center',
             backgroundColor:'pink'
            }}
          >
            <h4>{product.name}</h4>
          
          </div>
        ))}
      </div>
    </div>
  );
}

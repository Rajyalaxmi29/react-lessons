import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App22() {
  const [temperature, setTemperature] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/weather')
      .then((response) => {
        setTemperature(response.data); // "31degrees"
      })
      .catch((error) => {
        console.error("Error fetching temperature:", error);
      });
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      <p>Current Temperature: {temperature}</p>
    </div>
  );
}

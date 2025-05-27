import React, { useEffect, useState } from "react";

export default function App19() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (runs >= 10 || wickets >= 10) {
      setGameOver(true);
      setMessage("Game Over!");
    }
  }, [runs, wickets]);

  const handleRun = () => {
    if (!gameOver) {
      setRuns(prev => prev + 1);
      setMessage("Well Done!");
    }
  };

  const handleWicket = () => {
    if (!gameOver) {
      setWickets(prev => prev + 1);
      setMessage("Better Luck Next Time!");
    }
  };

  return (
    <div>
      <h1>Cricket Scoreboard</h1>
      <div>
        <p>Runs: {runs}</p>
        <button onClick={handleRun}>Run</button>
        <br />
        <p>Wickets: {wickets}</p>
        <button onClick={handleWicket}>Wicket</button>
        <br />
        <h3>{message}</h3>
      </div>
     
    </div>
  );
}

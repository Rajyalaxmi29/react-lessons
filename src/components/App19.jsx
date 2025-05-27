/*import React, { useEffect, useState } from "react";

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
}*/
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function App19() {
  const [run, setRun] = useState(1);
  const [wicket, setWicket] = useState(0);
  const [msg, setMsg] = useState();
  const Navigate = useNavigate();
  useEffect(() => {
    setMsg("Well Done!");
  }, [run]);
  useEffect(() => {
    setMsg("Better Luck Next Time!");
  }, [wicket]);

  const incrementRun = () => {
    if (wicket < 11) {
      setRun(run + 1);
    }
  };

  const incrementWicket = () => {
    if (wicket < 10) {
      setWicket(wicket + 1);
    } else {
      setMsg("Game Over");
    }
  };

  const navToApp1 = () => {
    Navigate("/")
  }

  return (
    <div>
      <h1>App19</h1>
      <h2>Assignment</h2>
      <hr />

      <p>
        <button onClick={incrementRun}>Run:{run}</button>
      </p>
      <p>
        <button onClick={incrementWicket}>Wicket:{wicket}</button>
      </p>
      <hr />
      {msg}
      <hr />

      <p><button onClick={navToApp1}>Go to App1</button></p>

    </div>
  );
}

import React, { useState } from "react";
import { UserContext } from "./UserContext";
import Register from "./Register";
import Login from "./Login";

export default function App21() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  return (
    <UserContext.Provider value={{ users, setUsers, setMessage }}>
      <div style={styles.container}>
        <h1>App21 - Register/Login Example</h1>
        <div style={styles.forms}>
          <Register />
          <Login />
        </div>
        <p style={styles.welcome}>{message}</p>
      </div>
    </UserContext.Provider>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "30px",
  },
  forms: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginTop: "20px",
  },
  welcome: {
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "18px",
  },
};

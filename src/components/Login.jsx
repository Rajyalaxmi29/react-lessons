import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";

export default function Login() {
  const { users, setMessage } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setMessage(`Welcome ${user.name}`);
    } else {
      setMessage("Invalid credentials");
    }
    setEmail(""); setPassword("");
  };

  return (
    <div style={styles.box}>
      <h3>Login.jsx</h3>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button style={styles.button} onClick={handleLogin}>Submit</button>
    </div>
  );
}

const styles = {
  box: {
    border: "2px solid black",
    borderRadius: "10px",
    padding: "20px",
    width: "250px",
  },
  input: {
    display: "block",
    width: "90%",
    margin: "10px auto",
    padding: "8px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

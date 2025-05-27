import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";

export default function Register() {
  const { users, setUsers } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    const existing = users.find(u => u.email === email);
    if (existing) {
      alert("User already exists.");
      return;
    }

    setUsers([...users, { name, email, password }]);
    alert("Registered Successfully!");
    setName(""); setEmail(""); setPassword("");
  };

  return (
    <div style={styles.box}>
      <h3>Register page</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
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
      <button style={styles.button} onClick={handleRegister}>Submit</button>
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

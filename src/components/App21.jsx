import React, { useState, useContext, createContext } from "react";

// 1. Create Context
const UserContext = createContext();

export default function App21() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  return (
    <UserContext.Provider value={{ users, setUsers, setMessage }}>
      <div style={styles.container}>
        <h1>App21 - Register/Login page</h1>
        <div style={styles.forms}>
          <Register />
          <Login />
        </div>
        <p style={styles.welcome}>{message}</p>
      </div>
    </UserContext.Provider>
  );
}

// 2. Register Component
function Register() {
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
      <h3>Register.jsx</h3>
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

// 3. Login Component
function Login() {
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

// 4. Styles
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
  welcome: {
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "18px",
  },
};

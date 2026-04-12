import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const[username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();  //for redirect

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Login successful");

        // save user in browser
        localStorage.setItem("user", JSON.stringify(data.user));

        //  redirect to dashboard
        navigate("/user-dashboard");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.log(error);
      setMessage("Server error");
    }
  };

  return (
  <div className="loginContainer">
    <div className="loginBox">
      <h2>Login</h2>
      {message && <p style={{color: "red", textAlign: "center"}}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p style={{ textAlign: "center", marginTop: "16px", fontSize: "0.9rem" }}>
        Don't have an account?{" "}
        <Link to="/signup" style={{ color: "#007bff", fontWeight: "600" }}>Sign Up</Link>
      </p>

    </div>
  </div>
);
}

export default Login;
import {useState} from "react";
import {useNavigate, Link } from "react-router-dom";

function Signup(){

    const navigate = useNavigate();


    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:4000/api/signup", {
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
            alert(data.message);

            if(response.ok){
                navigate("/login")
            }
        } catch (error){
            console.log("Signup error", error);
            alert("Something went wrong")
        }
    };

    return(
        <div className="signupContainer">
            <div className="signupBox">
                <h2>Sign Up</h2> 
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    
                    <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Sign Up</button>
                </form>
                <p style={{ textAlign: "center", marginTop: "16px", fontSize: "0.9rem" }}>
                    Already have an account?{" "}
                    <Link to="/login" style={{ color: "#007bff", fontWeight: "600" }}>Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
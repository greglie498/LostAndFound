import { useState } from "react";
import "./styling/Dashboard.css";

const RegisterVolunteer = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const[formData, setFormData] = useState({
        fullName: "", email: "", phone: "", availability: ""
    });
    const [message, setMessage]= useState("");
    const [isSuccess, setisSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/api/volunteer", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
                    ...formData,
                    username: user?.username
                }),
            });
            const data = await response.json();
            setMessage(data.message);
            if(response.ok) {
                setisSuccess(true);
                setFormData({ fullName: "", email: "", phone: "", availability: ""});
            }
        } catch (error) {
            setMessage(" Server error. Please try again. ");
        }
    };

    return (
        <div className="formArea">
            <h2>Register as a Volunteer</h2>
            <p style={{ color: "#555", marginBottom: "20px", textAlign: "center"}}>
                Help reunite people with their lost belongings!
            </p>

            {message && (
                <p style={{ color: isSuccess ? "green": "red", textAlign: "center", marginBottom: "16px"}}>
                    {message}
                </p>
            )}
            { !isSuccess ? (
                <form className="reportForm" onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange} required 
                    />
                    <input 
                    type="text" 
                    name="email" 
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange} required
                    />
                    <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange} required
                    />
                    <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                    style={{ padding: "12px 15px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "0.95rem"}}
                    >
                        <option value="">Availability</option>
                        <option value="Weekdays">Weekdays</option>
                        <option value="Weekends">Weekends</option>
                        <option value="Both">Both Weekdays & Weekends</option>
                        <option value="Flexible">Flexible</option>
                    </select>
                    <button type="submit">Register as Volunteer</button>
                </form>
            ) : (
                <div style={{ textAlign: "center", padding: "40px", background:"white", borderRadius: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.08"}}>
                    <p style={{ fontSize: "3rem"}}>🎉</p>
                    <h3 style={{ color: "#1a1a2e", margin: "16px 0 8px"}}> Thank You, {user?.username}!</h3>
                    <p style={{ color: "#555"}}>You are now registered as a volunteer.</p>
                </div>
            )}
        </div>
    );
};

export default RegisterVolunteer;
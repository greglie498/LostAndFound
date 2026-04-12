import { useState } from "react";
import "./styling/Dashboard.css";

const ReportLostItem = () => {
  const user = JSON.parse(localStorage.getItem("user"));  // ← get logged in user

  const [formData, setFormData] = useState({
    itemName: "", description: "", location: "", contact: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/lostItems", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          reportedBy: user?.username     // ← send username
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("✅ Item reported successfully!");
        setFormData({ itemName: "", description: "", location: "", contact: "" });
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      setMessage("❌ Server error.");
    }
  };

  return (
    <div className="formArea">
      <h2>Report a Found Item</h2>
      {message && <p className="formMessage">{message}</p>}
      <form className="reportForm" onSubmit={handleSubmit}>
        <input 
        type="text" name="itemName" 
        placeholder="Item Name" 
        value={formData.itemName} 
        onChange={handleChange} 
        required 
        />
        <textarea 
        name="description" 
        placeholder="Description" 
        value={formData.description} 
        onChange={handleChange} 
        required 
        />
        <input 
        type="text" name="location" 
        placeholder="Where did you find it?" 
        value={formData.location} 
        onChange={handleChange} 
        required 
        />
        <input 
        type="text" name="contact" 
        placeholder="Your contact info (optional)" 
        value={formData.contact} 
        onChange={handleChange} 
        />
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default ReportLostItem;
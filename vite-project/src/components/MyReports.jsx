import { useState, useEffect } from "react";
import "./styling/Dashboard.css";

const MyReports = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [items, setItems] = useState([]);
    const [message, setMessage] =  useState("Loading your reports...");

    useEffect(() => {
        fetchMyReports();
    }, []);

    const fetchMyReports = async () => {
        try{
            const response = await fetch(`http://localhost:4000/api/lostItems/my-reports/${user?.username}`);
            const data = await response.json();
            if(response.ok) {
                setItems(data);
                setMessage(data.length === 0 ? "You haven't reported any items yet." : "");
            } else {
                setMessage(" Failed to fetch your reports. ");
            }
        } catch (error) {
            setMessage(" Server error. ");
        }
    };

    return(
        <div>
            <h2 style={{ marginBottom: "20px", color: "#1a1a2e"}}>My Reports</h2>
            {message && <p>{message}</p>}
            <div className="cardContainer">
                {items.map((item) =>(
                    <div className="lostCard" key={item._id}>
                        <h3>{item.itemName}</h3>
                        <p><strong>Description:</strong>{item.description}</p>
                        <p><strong>Location:</strong>{item.location}</p>
                        <p><strong>Contact:</strong> {item.contact || "N/A"}</p>
                        <p className="timestamp">
                            Reported: {new Date(item.createdAt).toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyReports;
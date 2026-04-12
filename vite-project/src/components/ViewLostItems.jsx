import { useState, useEffect } from "react";
import "./styling/Dashboard.css";

const ViewLostItems = () => {
    const [items, setItems] = useState([]);
    const [message, setMessage] = useState("Loading items...");

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/lostItems");
            const data = await response.json();

            if (response.ok) {
                setItems(data);
                setMessage("");
            } else {
                setMessage("Failed to fetch items.");
            }
        } catch (error) {
            console.error(error);
            setMessage("Server error.");
        }
    };                        // ← fetchItems ends HERE

    // ✅ return is OUTSIDE fetchItems, inside the component
    return (
        <div>
            <h2>Lost Items</h2>
            {message && <p>{message}</p>}

            <div className="cardContainer">   {/* ← lowercase 'c' to match CSS */}
                {items.length === 0 && !message && <p>No items reported yet.</p>}

                {items.map((item) => (
                    <div className="lostCard" key={item._id}>
                        <h3>{item.itemName}</h3>
                        <p><strong>Description:</strong> {item.description}</p>
                        <p><strong>Location:</strong> {item.location}</p>
                        <p><strong>Contact:</strong> {item.contact || "N/A"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewLostItems;
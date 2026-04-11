import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Dashboard</h1>

      {user ? (
        <h2>Welcome {user.username}</h2>
      ) : (
        <h2>No user logged in</h2>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserDashboard;
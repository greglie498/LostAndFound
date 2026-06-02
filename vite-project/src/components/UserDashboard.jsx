import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "./styling/Dashboard.css";

function UserDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboardContainer">

      {/* ── SIDEBAR ── */}
      <aside className="sidebar">
        <h2 className="sidebarTitle">Lost & Found</h2>
        <p className="welcomeText">
          Welcome, {user?.username || "Guest"}
        </p>

        <nav className="sidebarMenu">
          <NavLink to="report" className="sidebarLink">
            Report Found Item
          </NavLink>
          <NavLink to="view" className="sidebarLink">
            View Lost Items
          </NavLink>
          <NavLink to="my-reports" className="sidebarLink"> 
            My Reports
          </NavLink>
          <NavLink to="volunteer" className="sidebarLink">
            Register as Volunteer
          </NavLink>
        </nav>

        <button className="logoutBtn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      
      <main className="dashboardMain">
        <Outlet />
      </main>

    </div>
  );
}

export default UserDashboard;
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navigation        from './components/Navbar';
import Banner            from './components/Banner';
import Footer            from './components/Footer';
import Signup            from './components/LoginArea';
import Login             from './components/Login';
import AboutUs           from './components/AboutUs';     
import Contact           from './components/Contact';    
import ProtectedRoute    from './components/ProtectedRoute';
import UserDashboard     from './components/UserDashboard';
import ReportLostItem    from './components/ReportLostItems';
import ViewLostItems     from './components/ViewLostItems';
import MyReports         from './components/MyReports';
import RegisterVolunteer from './components/Volunteer';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/user-dashboard");

  return (
    <div className='appLayout'>
      {!isDashboard && <Navigation />}
      <main className='pageContent'>
        <Routes>
          <Route path="/"        element={<Banner />} />
          <Route path="/about"   element={<AboutUs />} />     
          <Route path="/contact" element={<Contact />} />     
          <Route path="/signup"  element={<Signup />} />
          <Route path="/login"   element={<Login />} />

          <Route                                              
            path="/user-dashboard"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          >
            <Route path="report" element={<ReportLostItem />} />
            <Route path="view"   element={<ViewLostItems />} />
            <Route path="my-reports" element={<MyReports />} />
            <Route path="volunteer" element={<RegisterVolunteer />} />
          </Route>
        </Routes>
      </main>
      {!isDashboard && <Footer />}  
    </div>
  );
}

export default App;
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navbar';
import Banner from './components/Banner';
import ServicesSection from './components/Servicessection';
import Footer from './components/Footer';
import Signup from './components/LoginArea';
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <BrowserRouter>
      <div className='appLayout'>
        <Navigation />

        <main className='pageContent'>
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/aboutus" element={<ServicesSection />} />
            <Route path='/signup' element={<Signup/>} />
            <Route path="/login" element={<Login />} />

            <Route 
            path="*\user-dashboard" 
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
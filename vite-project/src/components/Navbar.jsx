
import logo1 from '../assets/logo1.jpg';
import "../App.css";

export default function Navigation(){

    return(
        <nav className='navbar'> 
            <div className='logoHolder'>
                <img src={logo1} alt="lost and found logo" className='logo1' />

            </div>

            <ul className='menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link  to="/about">About Us</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/contacts">Contact</Link></li>
            </ul>


        </nav>
    );
}
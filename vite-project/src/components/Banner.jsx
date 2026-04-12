import { Link } from 'react-router-dom';
import bannerimg from '../assets/bannerimg.jpg';
import ServiceSection from './Servicessection';

export default function Banner() {
  return (
    <>
      <div className='banner'>
        <img src={bannerimg} alt="Banner" className='bannerImage' />
        <div className='bannerText'>
          <h1>Welcome to Lost & Found</h1>
          <p>Report or search for lost items easily.</p>
          <Link to="/signup" className="btn">Get Started</Link>
        </div>
      </div>
      <ServiceSection />
    </>
  );
}
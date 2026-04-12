import ServiceCard from "./servicescard";
import reportImg from "../assets/report.jpg";    
import searchImg from "../assets/search.jpg";     
import volunteerImg from "../assets/volunteer.jpg";

const services = [
  {
    image: reportImg,
    title: "Report Found Item",
    subtitle: "Help the Community",
    description: "Found something? Report it here so the owner can reclaim it quickly and easily."
  },
  {
    image: searchImg,
    title: "Search Lost Items",
    subtitle: "Find What's Yours",
    description: "Browse all reported items and filter by category to find what belongs to you."
  },
  {
    image: volunteerImg,
    title: "Volunteer",
    subtitle: "Join Our Team",
    description: "Help reunite people with their belongings by joining our volunteer community."
  }
];

export default function ServiceSection() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((s, index) => (
          <ServiceCard key={index} {...s} />
        ))}
      </div>
    </section>
  );
}
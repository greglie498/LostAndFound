export default function ServiceCard({ image, title, subtitle, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{description}</p>
    </div>
  );
}
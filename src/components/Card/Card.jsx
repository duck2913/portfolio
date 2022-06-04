import "./Card.scss";

const Card = ({ img, title, description, className }) => {
	return (
		<div className={`card ${className}`}>
			<img src={img} alt="card img" className="card__img" />
			<p className="card__title">{title}</p>
			<p className="card__description">{description}</p>
			<button className="card__action">LEARN MORE</button>
		</div>
	);
};

export default Card;

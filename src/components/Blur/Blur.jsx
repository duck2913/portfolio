import "./Blur.scss";

const Blur = ({ color, className }) => {
	return <div className={`blur ${className}`} style={{ backgroundColor: `${color}` }}></div>;
};

export default Blur;

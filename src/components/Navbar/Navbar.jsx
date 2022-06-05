import "./Navbar.scss";
import { Link } from "react-scroll/modules";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__left">
				<div className="navbar__name">Minhduc</div>
			</div>
			<div className="navbar__right">
				<ul className="navbar__list">
					<Link spy={true} smooth={true} to="intro" activeClass="activeClass">
						<li className="navbar__item">Home</li>
					</Link>
					<Link spy={true} smooth={true} to="services">
						<li className="navbar__item">Service</li>
					</Link>
					<Link spy={true} smooth={true} to="experience">
						<li className="navbar__item">Experience</li>
					</Link>
					<Link spy={true} smooth={true} to="portfolio">
						<li className="navbar__item">Portfolio</li>
					</Link>
				</ul>
				<button className="btn">Contact me</button>
			</div>
		</div>
	);
};

export default Navbar;

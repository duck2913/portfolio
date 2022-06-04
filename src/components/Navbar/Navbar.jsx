const Navbar = () => {
	return (
		<div className="navbar__wrapper">
			<div className="navbar__left">
				<div className="navbar__name">Minh Duc</div>
				<span>toggle</span>
			</div>
			<div className="navbar__right">
				<ul className="navbar__list">
					<li className="navbar__item">Home</li>
					<li className="navbar__item">Service</li>
					<li className="navbar__item">Experience</li>
					<li className="navbar__item">Portfolio</li>
				</ul>
				<button className="btn">Contact me</button>
			</div>
		</div>
	);
};

export default Navbar;

import "./Footer.scss";
import Wave from "../../img/wave.png";

const Footer = () => {
	return (
		<div className="footer">
			<img src={Wave} alt="" style={{ width: "100%" }} />
			<div className="footer-content">
				<span>minhducdl1010@gmail.com</span>
				<div className="footer-links">
					<a href="#">
						<ion-icon name="logo-github"></ion-icon>
					</a>
					<a href="#">
						<ion-icon name="logo-facebook"></ion-icon>
					</a>
					<a href="#">
						<ion-icon name="logo-instagram"></ion-icon>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;

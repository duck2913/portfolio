import Card from "../Card/Card";
import "./Services.scss";
import HeartEmoji from "../../img/heartemoji.png";
import GlassEmoji from "../../img/glassesimoji.png";
import HumbleEmoji from "../../img/humble.png";
import Blur from "../Blur/Blur";

const Services = () => {
	return (
		<div className="services">
			<div className="services__left">
				<Card
					className="card1"
					img={HeartEmoji}
					title={"Design"}
					description={"Figma, HTML,CSS"}
				/>
				<Card
					className="card2"
					img={GlassEmoji}
					title={"Techstack"}
					description={"React, NodeJS"}
				/>
				<Card
					className="card3"
					img={HumbleEmoji}
					title={"UI/UX"}
					description={"lorem ipsum ala alawd asdfj alskdjf"}
				/>
			</div>
			<div className="services__right">
				<span>My awesome</span>
				<span>services</span>
				<span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, tempora illo
					odio nesciunt ullam eaque quo nobis quis! Doloribus temporibus impedit ad animi
					repudiandae minima dolores dicta sint consectetur eos.
				</span>
				<button className="btn">Hire me</button>
				<Blur color={"lightpink"} className="blur1" />
				<Blur color={"lightyellow"} className="blur2" />
			</div>
		</div>
	);
};

export default Services;

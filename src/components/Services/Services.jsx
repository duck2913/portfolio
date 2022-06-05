import Card from "../Card/Card";
import "./Services.scss";
import HeartEmoji from "../../img/heartemoji.png";
import GlassEmoji from "../../img/glassesimoji.png";
import HumbleEmoji from "../../img/humble.png";
import Blur from "../Blur/Blur";
import { motion } from "framer-motion";

const Services = () => {
	const transition = { duration: 2, type: "string" };
	return (
		<div className="services">
			<div className="services__left">
				<motion.div
					initial={{ top: "-30%", left: "10%" }}
					whileInView={{ top: "-20%", left: 0 }}
					style={{ position: "absolute" }}
					transition={transition}
				>
					<Card
						// className="card1"
						img={HeartEmoji}
						title={"Design"}
						description={"Figma, HTML,CSS"}
					/>
				</motion.div>
				<motion.div
					initial={{ top: "10%", left: "50%" }}
					whileInView={{ top: "0%", left: "50%" }}
					style={{ position: "absolute" }}
					transition={transition}
				>
					<Card img={GlassEmoji} title={"Techstack"} description={"React, NodeJS"} />
				</motion.div>
				<motion.div
					initial={{ top: "70%", left: "10%" }}
					whileInView={{ top: "40%", left: "10%" }}
					style={{ position: "absolute" }}
					transition={transition}
				>
					<Card
						img={HumbleEmoji}
						title={"UI/UX"}
						description={"lorem ipsum ala alawd asdfj alskdjf"}
					/>
				</motion.div>
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

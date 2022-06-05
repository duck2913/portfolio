import classes from "./Intro.module.scss";
import boy from "../../img/boy.png";
import Instagram from "../../img/instagram.png";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Crown from "../../img/crown.png";
import Thumbup from "../../img/thumbup.png";
import FloatingBadge from "../FloatingBadge/FloatingBadge";
import GlassesEmoji from "../../img/glassesimoji.png";
import Blur from "../Blur/Blur";
import { motion } from "framer-motion";

const Intro = () => {
	const transition = { duration: 2, type: "spring" };

	return (
		<div className={classes["intro"]} id="intro">
			<div className={classes["intro__left"]}>
				<span>Hi I'm</span>
				<span>Minh Duc</span>
				<span>I'm a frontend developer who experienced in JS and React</span>
				<button className={classes["btn"]}>Hire me</button>
				<div className={classes["intro__icons"]}>
					<a href="#">
						<img src={Instagram} alt="instagram img" />
					</a>
					<a href="#">
						<img src={Github} alt="instagram img" />
					</a>
					<a href="#">
						<img src={Linkedin} alt="instagram img" />
					</a>
				</div>
			</div>
			<div className={classes["intro__right"]}>
				<img
					src={boy}
					className={classes.img}
					alt="intro images"
					width={500}
					height={500}
				/>
				<motion.img
					initial={{ right: "10%" }}
					whileInView={{ right: "0%" }}
					transition={transition}
					src={GlassesEmoji}
					alt="emoji"
					style={{
						position: "absolute",
						top: 0,
						width: "5rem",
						height: "5rem",
					}}
				/>
				<motion.div
					initial={{ top: "-10%", left: "-10%" }}
					whileInView={{ top: "10%", left: "-10%" }}
					transition={transition}
					style={{ position: "absolute" }}
				>
					<FloatingBadge img={Crown} text={"Web developer"} />
				</motion.div>
				<motion.div
					initial={{ bottom: "-5%", right: 0 }}
					whileInView={{ bottom: "20%", right: 0 }}
					transition={transition}
					style={{ position: "absolute", bottom: "20%", right: 0 }}
				>
					<FloatingBadge img={Thumbup} text={"2+ years experience"} />
				</motion.div>
			</div>
			<Blur color={"lightgreen"} className={classes.blur1} />
			<Blur color={"lightblue"} className={classes.blur2} />
		</div>
	);
};

export default Intro;

import classes from "./Intro.module.scss";
import boy from "../../img/boy.png";
import Instagram from "../../img/instagram.png";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Crown from "../../img/crown.png";
import Thumbup from "../../img/thumbup.png";
import FloatingBadge from "./FloatingBadge/FloatingBadge";
import GlassesEmoji from "../../img/glassesimoji.png";
import Blur from "./Blur/Blur";

const Intro = () => {
	return (
		<div className={classes["intro"]}>
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
				<img
					src={GlassesEmoji}
					alt="emoji"
					style={{
						position: "absolute",
						top: 0,
						right: "10%",
						width: "5rem",
						height: "5rem",
					}}
				/>
				<div style={{ position: "absolute", top: "10%", left: "-10%" }}>
					<FloatingBadge img={Crown} text={"Web developer"} />
				</div>
				<div style={{ position: "absolute", bottom: "20%", right: 0 }}>
					<FloatingBadge img={Thumbup} text={"2+ years"} />
				</div>
			</div>
			<div style={{ top: "0", right: "30%", position: "absolute" }}>
				<Blur color={"lightpink"} top={0} left={0} />
			</div>
			<div style={{ bottom: "70%", left: "30%", position: "absolute" }}>
				<Blur color={"lightblue"} bottom={"50%"} right={0} />
			</div>
		</div>
	);
};

export default Intro;

import classes from "./Intro.module.scss";
import boy from "../../img/boy.png";
const Intro = () => {
	return (
		<div>
			Intro
			<img src={boy} className={classes.img} alt="into img" />
		</div>
	);
};

export default Intro;

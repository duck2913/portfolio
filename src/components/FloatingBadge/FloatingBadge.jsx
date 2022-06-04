import React from "react";
import "./FloatingBadge.scss";

const FloatingBadge = ({ img, text }) => {
	return (
		<div className="floating-badge">
			<img src={img} alt="floating img" />
			<p>{text}</p>
		</div>
	);
};

export default FloatingBadge;

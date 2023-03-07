import React from "react";

type Props = {
	state: number;
	activateOn: number;
	color?: string;
};

const StepBar = ({ color = "teal", state, activateOn }: Props) => {
	return (
		<div
			style={{
				backgroundColor: "rgba(0,0,0,0.2)",
			}}>
			<div
				style={{
					height: "0.3rem",
					width: state > activateOn ? `100%` : 0,
					backgroundColor: color,
					transition: "width 0.5s",
				}}></div>
		</div>
	);
};

export default StepBar;

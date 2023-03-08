import React from "react";

type Props = {
	state: number;
	activateWhenGreaterThan: number;
	color?: string;
};

const StepBar = ({
	color = "#30A3B5",
	state,
	activateWhenGreaterThan,
}: Props) => {
	return (
		<div
			style={{
				backgroundColor: "rgba(0,0,0,0.2)",
			}}>
			<div
				style={{
					height: "0.3rem",

					width: state > activateWhenGreaterThan ? `100%` : 0,
					backgroundColor: color,
					transition: "width 0.2s",
				}}></div>
		</div>
	);
};

export default StepBar;

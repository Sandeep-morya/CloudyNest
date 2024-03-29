﻿import React from "react";

type Props = {
	state: number;
	activateWhenGreaterThan?: number;
	Icon: React.ReactNode;
	selected?: boolean;
	title?: string;
	color?: string;
};

const StepIcon = ({
	selected = false,
	color = "#24A3B5",
	title,
	state,
	activateWhenGreaterThan = 0,
	Icon,
}: Props) => {
	const getColor = (color: string, option = "gray") =>
		selected ? color : state > activateWhenGreaterThan ? color : option;

	return (
		<div style={{ position: "relative" }}>
			<div //Center
				style={{
					display: "grid",
					placeItems: "center",
					width: "2rem",
					height: "2rem",
					backgroundColor: getColor(color, "white"),
					border: `1px solid ${getColor(color)}`,
					borderRadius: "50%",
					zIndex: 1,
					color: getColor("white"),
					transition: "all 0.5s",
				}}>
				{Icon}
			</div>
			<span
				style={{
					top: "100%",
					position: "absolute",
					left: "50%",
					color: getColor(color),
					transform: "translateX(-50%)",
					fontWeight: "500",
				}}>
				{title}
			</span>
		</div>
	);
};

export default StepIcon;

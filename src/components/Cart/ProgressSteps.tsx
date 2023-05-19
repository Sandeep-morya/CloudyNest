import React, { useEffect, useState } from "react";
import { FaAddressCard, FaShoppingBag } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdSummarize } from "react-icons/md";
import StepIcon from "./StepIcon";
import StepBar from "./StepBar";

interface Props {
	state: number;
	css?: React.CSSProperties;
}

const ProgressSteps = ({ state, css }: Props) => {
	return (
		<div
			style={{
				...css,
				paddingBottom:"1rem",
				display: "grid",
				gridTemplateColumns: "0.5fr 10fr 0.5fr 10fr 0.5fr 10fr 0.5fr",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<StepIcon title="Cart" selected state={state} Icon={<FaShoppingBag />} />
			<StepBar activateWhenGreaterThan={0} state={state} />
			<StepIcon
				title="Address"
				activateWhenGreaterThan={0}
				state={state}
				Icon={<FaAddressCard />}
			/>
			<StepBar activateWhenGreaterThan={35} state={state} />
			<StepIcon
				title="Payment"
				activateWhenGreaterThan={35}
				state={state}
				Icon={<RiSecurePaymentFill />}
			/>
			<StepBar activateWhenGreaterThan={70} state={state} />
			<StepIcon
				title="Summary"
				activateWhenGreaterThan={70}
				state={state}
				Icon={<MdSummarize />}
			/>
		</div>
	);
};

export default ProgressSteps;

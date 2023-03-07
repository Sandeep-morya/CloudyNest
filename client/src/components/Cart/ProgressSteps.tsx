import React, { useEffect, useState } from "react";
import { FaAddressCard, FaShoppingBag } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdSummarize } from "react-icons/md";
import StepIcon from "./StepIcon";
import StepBar from "./StepBar";

const ProgressSteps = ({ state }: { state: number }) => {
	return (
		<div
			style={{
				width: "100%",
				paddingBottom: "1.5rem",
				display: "grid",
				gridTemplateColumns: "0.5fr 10fr 0.5fr 10fr 0.5fr 10fr 0.5fr",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<StepIcon
				title="Cart"
				selected
				activateOn={0}
				state={state}
				Icon={<FaShoppingBag />}
			/>
			<StepBar activateOn={0} state={state} />
			<StepIcon
				title="Address"
				activateOn={0}
				state={state}
				Icon={<FaAddressCard />}
			/>
			<StepBar activateOn={35} state={state} />
			<StepIcon
				title="Payment"
				activateOn={35}
				state={state}
				Icon={<RiSecurePaymentFill />}
			/>
			<StepBar activateOn={70} state={state} />
			<StepIcon
				title="Summary"
				activateOn={70}
				state={state}
				Icon={<MdSummarize />}
			/>
		</div>
	);
};

export default ProgressSteps;

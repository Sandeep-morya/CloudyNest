import React, { useRef } from "react";

type Props = {};

const useThrottle = () => {
	const lastTime = useRef(Date.now());
	return (func: () => void,delay:number) => {

        if ( Date.now() - lastTime.current >= delay) {
            func()
            lastTime.current = Date.now()
		}


	};
};

export default useThrottle;

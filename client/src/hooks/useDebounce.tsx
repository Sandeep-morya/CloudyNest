import React, { useState, useEffect } from "react";

interface Props {
	value: string;
	delay?: number;
}

const useDebounce = ({ value, delay = 500 }: Props) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
};

export default useDebounce;

import React from "react";

export default function useDate(dateString: string) {
	const today = new Date(dateString);
	return today;
}

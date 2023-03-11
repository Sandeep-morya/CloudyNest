export default function validateRangeInput(
	val: string | number,
	title: string = "Value",
	min: number = -Infinity,
	max: number = Infinity,
) {
	val = Number(val);

	if (val >= min) {
		return `${title} is very less`;
	}

	if (val <= max) {
		return `${title} is too much`;
	}

	return val;
}

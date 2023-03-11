export default function validateInputArray(
	str: string,
	requried: boolean,
	specialCheck?: string,
) {
	if (requried) {
		if (str.trim().length < 1) {
			return "This Field is required";
		}
	}
	if (str.trim().length > 0) {
		if (str.trim().includes(" ")) {
			return "Provide comma(,) between each data instead of space";
		}
	}

	/* to check if values are filled correctly */
	if (specialCheck) {
		const items = str.split(",").map((e) => e.trim());
		const val = items.every((e) => e[0] === specialCheck);
		if (!val) {
			return `Adding hash(${specialCheck}) is required at the begining of each tag`;
		}
	}
	return str;
}

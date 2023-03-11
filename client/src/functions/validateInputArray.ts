export default function validateInputArray(
	str: string,
	requried: boolean,
	specialCheck?: string,
) {
	if (requried) {
		if (str.trim().length < 1) {
			return "This Field is required";
		}
		if (!str.includes(",")) {
			return "Provide comma(,) between each size";
		}
	} else {
		if (str.trim().length > 0) {
			if (!str.includes(",")) {
				return "Provide comma(,) between each size";
			}
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
	return "";
}

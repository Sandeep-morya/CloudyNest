export default function validateInput(str: string) {
	if (str.trim() === "") {
		return "This field is required";
	}

	return str;
}

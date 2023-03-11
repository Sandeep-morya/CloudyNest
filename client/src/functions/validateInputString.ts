export default function validateInputString(str: string) {
	if (str.trim() === "") {
		return "This Filed is required";
	}

	return str;
}

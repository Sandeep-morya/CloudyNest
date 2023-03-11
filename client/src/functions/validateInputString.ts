export default function validateInputString(str: string) {
	if (str.trim() === "") {
		return false;
	}

	return true;
}

export default function validateNames(first: string, second: string) {
	if (first.trim() === "") {
		return "Enter Your First Name";
	}

	return first + " " + second;
}

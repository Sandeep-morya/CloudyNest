export default function validateEmail(email: string) {
	if (email.trim() == "") {
		return "Email is Required to proceed";
	}
	if (
		!email.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		)
	) {
		return "This is not a valid Email";
	}
	let bag = "";
	for (let char of email) {
		bag += char.toLowerCase();
	}
	return bag;
}

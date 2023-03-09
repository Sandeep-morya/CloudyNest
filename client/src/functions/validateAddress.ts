export default function validateAddress(address: string) {
	if (address.trim() === "") {
		return "This field is required";
	}
	if (!address.match(/^[#$a-zA-Z0-9\s, '-]*$/)) {
		return `Enter a valid address format for example: "104,Jaspal colony, kakowal road, Ludhiana, 141007"`;
	}
	return address;
}

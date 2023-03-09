export default function validatePassword(
	first: string,
	second: string,
): string {
	
	if (first.trim() === "") {
		return "You can't leave it empty.";
	}
	if (first != second) {
		return "Password and Confirm Password is required to be same.";
	}
	if (first.length < 8) {
		return "Password should contain atleast 8 charcter";
	}
	if (!first.match(/[A-Z]/)) {
		return `Password should contain at least one capital letter`;
	}
    if(!first.match(/[a-z]/)){
        return `Password should contain at least one small letter`;
    }
    if(!first.match(/[0-9]/)){
        return `Password should contain at least one number`;
    }
    // if (!first.match(/[`!@#$%^&*+=]/)) {
	// 		return `Password should contain at least one special character`;
	// 	}

	return first;
}

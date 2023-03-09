export default function validateEmail(email: string) {
	email = email.trim();
	if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        return "This is not a valid Email"
    }
    let bag="";
    for(let char of email){
        bag+=char.toLowerCase()
    }
    return bag;
}


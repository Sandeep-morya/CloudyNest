export default function validateMobile(mobile:string) {
    if(mobile.trim()===""){
        return "Providing your contact number is compulsary"
    }
    if(mobile.match(/^[6-9]\d{9}$/)){
        return mobile;
    }
    return "This is not a valid indian mobile number"
}
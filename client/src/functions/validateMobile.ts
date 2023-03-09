export default function validateMobile(mobile:string) {
    mobile=mobile.trim();
    if(mobile===""){
        return "This field is requried"
    }
    if(mobile.match(/^[6-9]\d{9}$/)){
        return mobile;
    }
    return "This is not a valid indian mobile number"
}
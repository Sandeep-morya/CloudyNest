export default function validateGstNo(gst:string) {
    if(gst.trim()==""){
        return "GST Number is compulsory to fill";
    }
    if(!gst.match( /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/)){
        return "Not a valid GST number is sholud be like this '03AABCU9603R1ZX' ";
    }

    return gst;
}
export default function Validation(values){
    const errors={}
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    const phoneNumber_pattern = /^\d{10}$/;
    if(values.firstName === ""){
        errors.firstName = "first name is required"
    }
    if(values.lastName === ""){
        errors.lastName = "Last name is required"
    }
    if(values.email === ""){
        errors.email = "Email is required"
    }
    else if(!email_pattern.test(values.email)){
        errors.email = "Email is invalid "
    }
    if(values.phoneNumber === ""){
        errors.phoneNumber = "Phone number is required"
    }
    else if(!phoneNumber_pattern.test(values.phoneNumber)){
        errors.phoneNumber = "Phone number invalid"
    }
    if(values.password === ""){
        errors.password = "Password is required"
    }else if(!password_pattern.test(values.password)){
        errors.password = "Password is invalid"
    }
    return errors;
    
}
export function Validation_login(values){
    const errors ={}
    if(values.email === ""){
        errors.email = "Email is required"
    }
    if(values.password === ""){
        errors.password = "Password is required"
    }
    return errors;
}
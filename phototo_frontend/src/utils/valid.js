import { IRegister } from "../types/type.d.ts";
export const validRegister = (user: IRegister) => {
    const { name, email, password, cf_password } = user;
    const errors: string[] = [];
    if (!name.trim()) {
        errors.push("please add your name.")
    } else if (name.length > 20) {
        errors.push("Your name is up to 20 Chars long.")
    } else if (!validateName(name)) {
        errors.push("Username only support english.")
    }
    if (!email.trim()) {
        errors.push("please add your email.")

    } else if (!validateEmail(email)) {
        errors.push("Email format is incorrect.")
    }
    const msg = checkPassword(password, cf_password)
    if (msg) errors.push(msg)
    return {
        errMsg: errors,
        errLength: errors.length
    }

}

function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validateName(name: string) {
    const re = /^[a-z ,.'-]+$/i
    return re.test(name);
}
export const checkPassword = (password: string, cf_password: string) => {
    if (password.length < 6) {
        return ("password must be at least 6 Char.")
    } else if (password !== cf_password) {
        return ("Confirm password did not match.")
    }
}
"use server";

import { CreateUser } from "@/lib/users";
import { hashUserPassword } from "@/lib/hash";
export async function signup(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const hashedPassword = hashUserPassword(password);

    let errors = {};

    if(!email.includes('@')) {
        errors.email = "Invalid email address";
    }
    if(password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
    }
    if(Object.keys(errors).length > 0) {
        return errors;
    }
    CreateUser(email, hashedPassword);
}
"use server";

import { CreateUser } from "@/lib/users";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { redirect } from "next/navigation";
import { GetUserByEmail } from "@/lib/users";
import { CreateAuthSession, destroySession } from "@/lib/auth";

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const hashedPassword = hashUserPassword(password);

  let errors = {};
  if (password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }
  if (Object.keys(errors).length > 0) {
    return errors;
  }

  try {
    const user = CreateUser(email, hashedPassword);
    await CreateAuthSession(user.id);
  } catch (error) {
    console.log(error);
    
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return { email: "Email already exists!" };
    }
  }

  redirect("/");
}

export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const existingUser = GetUserByEmail(email);
  if (!existingUser) {
    return { email: "No account found with this email. Sign up first." };
  }
  const isValidPassword = verifyPassword(existingUser?.password, password);
  if (!isValidPassword) {
    return { password: "Password and email do not match." };
  }
  await CreateAuthSession(existingUser.id);

  redirect("/training");
}

export async function logout() {
  await destroySession();
  redirect("/");
}
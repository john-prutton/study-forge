"use server";

import { getUserByEmail } from "@/lib/db";

export async function tryLogin(formData: FormData) {
  const email = formData.get("email") as string;
  // const password = formData.get("password") as string;

  const user = await getUserByEmail(email);

  if (!user) {
    console.log("user not found");
    return null;
  }

  return user;
}

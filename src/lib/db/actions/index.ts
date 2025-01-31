import { eq } from "drizzle-orm";

import { db } from "../connector";
import { usersTable } from "../schema";

export async function getUserByEmail(email: string) {
  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .limit(1);

  return user;
}

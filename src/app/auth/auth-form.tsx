"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { tryLogin } from "./actions";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function AuthForm() {
  const { push } = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const user = await tryLogin(formData);

    if (!user) {
      setError("User not found, try again.");
      return;
    }

    setName(user.name);

    setTimeout(() => {
      push("/");
    }, 1000);
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Sign Up
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error ? (
          <div className="bg-red-400 mb-4 rounded p-2">{error}</div>
        ) : null}

        {name ? (
          <div className="bg-green-400 rounded p-2">Welcome, {name}!</div>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input name="password" id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}

"use client"

import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { useState } from "react"
import { Label } from "../ui/label"
import { Button } from "../ui/button"

export const RightSection = () => {
    // useState
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setEmail(e.target.value)
        } else {
            setEmail("")
        }
    };
    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPassword(e.target.value)
        } else {
            setPassword("")
        }
    };

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // fetch API

        await fetch(
            "http://localhost:8080/users/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        ).then((response) => {
            console.log(response.json())
        });

    };

    console.log({ email: email, password: password })


    return (
        <div className="w-1/2 flex-col justify-center">
            <Card className="h-full flex flex-col justify-center px-14  gap-16">
                <CardHeader>
                    <span className="text-3xl font-bold">Login</span>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label>Email</Label>
                            <Input
                                type="text"
                                placeholder="example@example.com"
                                className="py-4 text-lg h-10"
                                value={email}
                                onChange={changeEmail}
                            />
                        </div>
                        <div className="flex flex-col gap-5">
                            <Label>Password</Label>
                            <Input
                                type="Password"
                                placeholder="your_password..."
                                className="py-4 text-lg h-10"
                                value={password}
                                onChange={changePassword}
                            />
                        </div>

                        <Button
                            onClick={handleLogin}
                            className="bg-[#13A4EF] rounded-md text-white font-bold py-2 drop-shadow-gray-200"
                        >Login
                        </Button>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <span>Don't have an account?</span>
                        <Link href="/register" className="text-[#13A4EC]">Create Account</Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

}

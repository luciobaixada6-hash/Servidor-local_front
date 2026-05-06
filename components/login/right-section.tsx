"use client"

import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { useState } from "react"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { toast } from "sonner";

import { setCookie} from  "nookies";

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

        const response = await fetch(
            "http://localhost:8080/Users/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
        if (response.status === 200) {
            toast.success("login feito com sucesso!");

            const responseData= await response.json();

            console.log( {"dados recebidos": responseData})

                //salvar os dados na cookies
                setCookie(null, "token", responseData.token, {
                    maxAge: 60 * 60* 24* 7,
                    path: "/",
                })
                // 30 dias
                setCookie(null, "user", JSON.stringify( responseData.data), {
                    maxAge: 60 * 60* 24* 7,
                    path: "/",
                })  
                    

            if ( typeof window !== "undefined") {
                window.location.href = "/home";
            }else {
                toast.error("Nao foi possivel fazer login, tente novamente mais tarde!");
            }
        } 

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
                        <Link href="/registro" className="text-[#13A4EC]">Create Account</Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

}

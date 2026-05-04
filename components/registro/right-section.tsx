"use client"

import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { useState } from "react"
import { Label } from "../ui/label"
import { Button } from "../ui/button"

export const RightSection = () => {
    // useState
    const [Name, setName] = useState("");
    const [Nome_identifica, setNomeIdentifica] = useState("");
    const [Data_nascimento, setDataNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telefone, setTelefone] = useState("");
    const [pais, setPais] = useState("");
    const [localidade, setLocalidade] = useState("");
    const [role, setRole] = useState("");
    


    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setName(e.target.value)
        } else {
            setName("")
        }
    };

const changeNomeIdentifica = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setNomeIdentifica(e.target.value)            
        } else {
            setNomeIdentifica("")
        }
    };

const changeDataNascimento = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {   
            setDataNascimento(e.target.value)
        } else {
            setDataNascimento("")
        }       
    };

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

    
    const changeTelefone = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setTelefone(e.target.value)            
        } else {
            setTelefone("")
        }
    };

    const changePais = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPais(e.target.value)            
        } else {
            setPais("")
        }
    };

    const changeLocalidade = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setLocalidade(e.target.value)            
        } else {
            setLocalidade("")
        }
    };

    const changeRole = (e: React.ChangeEvent<HTMLInputElement>) => {    
        if (e.target.value) {
            setRole(e.target.value)
        } else {
            setRole("")
        }
    };

    const handleRegistro = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

       await fetch(
            "http://localhost:8080/users/create",
            {
                method: "POST",
                headers: {  
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Name: Name,
                    Nome_identifica: Nome_identifica,
                    Data_nascimento: Data_nascimento    ,
                    email: email,
                    password: password,
                    telefone: telefone,
                    pais: pais,
                    localidade: localidade,
                    role: role
                })
            }
        ).then((response) => {
            console.log(response.json())
        });
    };

    console.log({ Name: Name,
        Nome_identifica: Nome_identifica,
        Data_nascimento: Data_nascimento    ,
        email: email,
        password: password,
        telefone: telefone,
        pais: pais,
        localidade: localidade,
        role: role });


    return (
        <div className="w-1/2 flex-col justify-center">
            <Card className="h-full flex flex-col justify-center px-14 gap-10">

                <CardHeader>
                    <h1 className="text-5xl font-bold text-center">Registro</h1>
                    <span className="text-2xl font-bold">Criar Conta</span>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <div className="grid grid-cols gap-4">
                            <div className="flex flex-col gap-4">
                                <Label>Nome</Label>
                                <Input
                                    type="name"
                                    placeholder="Seu nome"
                                    className="py-4 text-lg h-10"
                                    value={Name}
                                    onChange={changeName}
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <Label>Numero de identificação</Label>
                                <Input
                                    type="text"
                                    placeholder="Seu numero de identificação"
                                    className="py-4 text-lg h-10"
                                    value={Nome_identifica}
                                    onChange={changeNomeIdentifica}
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <Label>Data de nascimento</Label>
                                <Input
                                    type="date"
                                    placeholder="Sua data de nascimento"
                                    className="py-4 text-lg h-10"
                                    value={Data_nascimento}
                                    onChange={changeDataNascimento}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    placeholder="seu_email@example.com"
                                    className="py-4 text-lg h-10"
                                    value={email}
                                    onChange={changeEmail}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Senha</Label>
                                <Input
                                    type="password"
                                    placeholder="Sua senha..."
                                    className="py-4 text-lg h-10"
                                    value={password}
                                    onChange={changePassword}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Label>Telefone</Label>
                            <Input
                                type="telefone"
                                placeholder="(00) 00000-0000"
                                className="py-4 text-lg h-10"
                                value={telefone}
                                onChange={changeTelefone}
                            />
                        </div>


                        <div className="grid grid-cols gap-4">
                            <div className="flex flex-col gap-4">
                                <Label>Pais</Label>
                                <Input
                                    type="text"
                                    placeholder="Seu pais"
                                    className="py-4 text-lg h-10"
                                    value={pais}
                                    onChange={changePais}
                                />
                            </div>

                        </div>

                        <div className="flex flex-col gap-2">
                            <Label>Localidade</Label>
                            <Input
                                type="text"
                                placeholder="Sua localidade"
                                className="py-4 text-lg h-10"
                                value={localidade}
                                onChange={changeLocalidade}
                            />
                        </div>

                        <Button
                            onClick={handleRegistro}
                            className="bg-[#13A4EF] rounded-md text-white font-bold py-2 drop-shadow-gray-200 mt-4"
                        >Criar Conta
                        </Button>
                    </div>
                    <div className="flex flex-col gap-2 mt-6">
                        <span>Já tem uma conta?</span>
                        <Link href="/login" className="text-[#13A4EC] font-semibold">Faça login</Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

}

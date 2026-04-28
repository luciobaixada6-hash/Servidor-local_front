import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";

export const RightSection = () => {
    return (
        <div className="w-1/2 flex-col justify-center">
            <Card className="h-full flex flex-col justify-center px-14  gap-16">
                <CardHeader>
                    <span className="text-3xl font-bold">Login</span>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label>Email</label>
                            <Input type="text" placeholder="example@example.com" className="py-4 text-lg h-10" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <label>Password</label>
                            <Input type="Password" placeholder="your_password..." className="py-4 text-lg h-10"/>
                        </div>

                        <button className="bg-[#13A4EF] rounded-md text-white font-bold py-2 drop-shadow-gray-200">Login</button>
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

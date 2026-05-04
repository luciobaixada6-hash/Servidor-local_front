import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { BadgeCheckIcon } from "@/assets/icons/badge-check";
import { SecurityIcon } from "@/assets/icons/security-icon";

export const LeftSection = () => {
    return (
        <div className="w-1/2 bg-gray-100 flex flex-col justify-center px-10 py-20 gap-5 text-black-500">

            <Badge variant="secondary">Precision Concierge service</Badge>

            <h1 className="text-6xl font-bold">Elevate your standard of Service</h1>

            <p className="text-lg font-normal text-gray-600">Join servidor local to experience a curated ecosystem connecting
                discerning clients with elitre professional and premier companies.
            </p>

            <div className="flex justify-evenly w-full">
                <Card className="px-3 py-7">
                    <CardHeader>
                        <BadgeCheckIcon />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>Vetted Network</CardTitle>
                        <CardDescription>
                            Exclusive acess to top-tier providers and clients
                        </CardDescription>
                    </CardContent>
                </Card>

                <Card className="px-3 py-7">
                    <CardHeader>
                        <SecurityIcon />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>Secondary Platform</CardTitle>
                        <CardDescription>Enterprise-grade security for all your transactions and data </CardDescription>
                    </CardContent>
                </Card>
            </div>
        </div>
    );

}
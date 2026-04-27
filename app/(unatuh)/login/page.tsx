import { Badge } from "@/components/ui/badge"
import {Card, CardContent, CardDescription, CardTitle,  } from "@/components/ui/card"

export default function LoginPage() {

    return (

        <div className="bg-gray-200 h-screen flex justify-between">

            <div className="w-1/2 bg-yellow-500" >

                <Badge variant="secondary">Precision Concierge service</Badge>

                <h1>ELevate your standard of Service</h1>

                <p>Join servidor local to experience a curated ecosystem connecting
                    discerning clients with elitre professional and premier companies.
                </p>

                <div className="flex justify-evenly w-full">
                    <Card>

                        <CardContent>
                            <CardTitle>Vetted Network</CardTitle>
                            <CardDescription>
                                Exclusive acess to top-tier providers and clients
                                </CardDescription>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardContent>
                            <CardTitle>Secondary Platform</CardTitle>
                            <CardDescription>Tailored connections based on your unique needs and preferences</CardDescription>
                        </CardContent>
                    </Card>
                        </div>
                        </div>
                        <div className="w-1/2 bg-orange-400 text-white">direita</div>

                </div >
                );
}
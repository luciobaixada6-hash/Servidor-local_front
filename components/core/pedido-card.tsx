import { Card, CardContent, CardHeader } from "../ui/card"
import Image from "next/image"

interface Categoriatype {
    id: number;
    name: string;
    icone: string;
}


interface PedidoCardProps {
    title: string;
    description: string;
    image: string;
    category: Categoriatype;
}

export const PedidoCard = (PedidoCardProps: PedidoCardProps) => {
    return (

        <Card className="h-[400px] w-full">
            <CardContent>
                <div className="w-full h-[200px] relative">
                    <Image
                        src={PedidoCardProps.image}
                        alt={PedidoCardProps.title}
                        fill
                        className="object-cover"
                    />

                    <div className="absolute top-1/2 left-1/2 bg-secondary/80 text-secondary">
                        <Image
                            src={PedidoCardProps.category.icone}
                            alt={PedidoCardProps.category.name}
                            width={20}
                            height={20}
                        />

                    </div>
                </div>
                    <div className="p-4">
                        <h1>Pedido</h1>
                    </div>
                    
            </CardContent>
        </Card>
    )
}
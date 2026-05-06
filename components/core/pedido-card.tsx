import { Card, CardContent } from "../ui/card"

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
        <Card>
            <CardContent>
                <div>
                <h1>Pedido</h1>
                </div>
            </CardContent>
        </Card>
    )
}
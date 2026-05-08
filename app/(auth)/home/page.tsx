import { PedidoCard } from "@/components/core/pedido-card";

export default function HomePage(){
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
            <PedidoCard 
                title="instalar porta de entrada"
                description="Preciso instalar uma porta de entrada na minha casa. A porta é de madeira e tem as seguintes medidas: 80cm de largura e 200cm de altura. Gostaria que a instalação fosse feita o mais rápido possível, preferencialmente dentro de uma semana."
                image="/image/full-stack-developer.png"
                category={{
                        id: 1,
                        name: "Construção Civil",
                        icone: "/icone-full-stack-developer.png",
                        description: "Categoria relacionada a serviços de construção, reforma e manutenção de imóveis.",
                        // imagem: "/full-stack-developer.png"
                        imagem: "/image/full-stack-developer.png",
                        categoryId: {id:1, name: "Construção Civil", icone: "/icone-full-stack-developer.png", description: "Categoria relacionada a serviços de construção, reforma e manutenção de imóveis.", imagem: "/image/full-stack-developer.png"   }

                    }}
            />
        </div>
    );
}                                                                                                                                                                                                                      
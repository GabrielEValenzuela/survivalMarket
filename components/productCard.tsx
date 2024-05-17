import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent
} from '@/components/ui/card'

import { AspectRatio } from "@/components/ui/aspect-ratio"

import Image from 'next/image'

import { ProductCardProps } from '@/app/market/page'



export function ProductCard(props: Readonly<ProductCardProps>) {
    return (
        props.productData.map((product) => (
            <div key={product.id}>
                <Card>
                    <AspectRatio ratio={400 / 300}>
                        <Image src={product.imageUrl} alt="Product Image" width={400} height={300} className="w-full h-60 object-cover" />
                    </AspectRatio>
                    <CardContent className="">
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <div className="flex items-center justify-between">
                            <p className="font-bold text-xl">${product.price}9</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{product.stock} in stock</p>
                        </div>
                    </CardContent>
                    <Button className="w-full" size="sm" onClick={(event) => props.handleAddToCart(event, product)}>
                        Add to Cart
                    </Button>
                </Card>
            </div>
        ))
    )
}
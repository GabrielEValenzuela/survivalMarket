import { CardContent } from '@/components/ui/card'
import { Separator } from "@/components/ui/separator"

import {
    CreditCard
} from "lucide-react"

interface OrdersProps {
    items: any[]
}

export function OrderList(orderListItems: Readonly<OrdersProps>) {
    return (
        <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
                <div className="font-semibold">Order Details</div>
                <ul className="grid gap-3">
                    {
                        orderListItems.items.map((item, index) => (
                            <li key={index} className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    {item.id} x <span>{item.quantity}</span>
                                </span>
                                <span>${item.price * item.quantity}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
                <div className="font-semibold">Payment Information</div>
                <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                        <dt className="flex items-center gap-1 text-muted-foreground">
                            <CreditCard className="h-4 w-4" />
                            Visa
                        </dt>
                        <dd>**** **** **** 4532</dd>
                    </div>
                </dl>
            </div>
        </CardContent>
    )
}
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogClose,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { useState } from "react"

import { ReceiptText } from 'lucide-react';

import { Label } from "@/components/ui/label"
import { Selector } from "@/components/statusSelector"
import { OrderList } from "@/components/orderList"
import { useToast } from "@/components/ui/use-toast"

import { z } from "zod"

/*
*   Zod validator for selector.
*/
const SelectorSchema = z.object({
    status: z.string({
        required_error: "Status is required",
        invalid_type_error: "Status must be a string",
    }),
})

export function OrderDetails(props: any) {
    const { toast } = useToast()
    const [status, setStatus] = useState<string>("")

    const handleSelection = (value: string) => {
        setStatus(value)
    }


    function onSubmit(data: z.infer<typeof SelectorSchema>) {
        toast({
            title: "Status updated!",
            description: "Order now is '" + status + "'",
            variant: "success",
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className=""><ReceiptText /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-screen-md">
                <DialogHeader>
                    <DialogTitle>Order #{props.id}</DialogTitle>
                    <DialogDescription>
                        Date: {props.date}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">
                            Client
                        </Label>
                        <Label className="col-span-3">
                            {props.client}
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">
                            Status
                        </Label>
                        <Selector callback={handleSelection} possibleValues={["Pending", "Completed", "Canceled"]} currentState={props.status} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Order details
                        </Label>
                        <OrderList items={props.products} />
                    </div>
                </div>
                <DialogFooter className="sm:justify-end">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button type="submit" onClick={(event: React.MouseEvent<HTMLButtonElement>) => onSubmit({ status })}>Save changes</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

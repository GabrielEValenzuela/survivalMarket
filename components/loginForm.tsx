"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'
import { LoaderCircle } from 'lucide-react';
import { Label } from "@/components/ui/label"


const FormSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
    }),
})

export function LoginForm() {
    const { toast } = useToast()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
        },
    })

    async function onSubmit() {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)

        toast({
            title: "Welcome back!",
            variant: "success",
        })

        router.push('/dashboard')
    }


    return (
        <div className="text-center py-12">
            <Label className="text-3xl font-sans hover:font-serif">Welcome to this Amazing webpage</Label>
            <div className="p-20 flex flex-col space-y-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-6 text-center">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <LoaderCircle  className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <LoaderCircle className="mr-2 h-4 w-4" />
                            )}{" "}
                            Sign In
                        </Button>
                    </form>
                </Form>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or Register
                        </span>
                    </div>
                </div>
                <Button variant="outline" type="button" onClick={() => router.push('/register')}>
                    Register
                </Button>
            </div>
        </div>
    )
}
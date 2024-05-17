"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Progress } from "@/components/ui/progress"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

import React, { useState, useEffect } from 'react';
import { fakeDatabase } from "@/utils/fakeDB"
import { orders } from "@/utils/fakeDB"
import { OrderDetails } from "@/components/orderDetails"


export default function Dashboard() {
    const router = useRouter()
    // const [rows, setRows] = useState([]); //ToDo: Fetch data from API

    return (
        <div className="flex flex-col space-y-6 text-center w-full h-64 p-4">
            <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription>This Week</CardDescription>
                  <CardTitle className="text-4xl">$1,329</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +25% from last week
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={25} aria-label="25% increase" />
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>This Month</CardDescription>
                  <CardTitle className="text-4xl">$5,329</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +10% from last month
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={12} aria-label="12% increase" />
                </CardFooter>
              </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Orders</CardTitle>
                    <CardDescription>
                        Recent orders of the market.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead className="hidden sm:table-cell">
                                    Status
                                </TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Date
                                </TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Amount
                                </TableHead>
                                <TableHead className="text-right">Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {fakeDatabase.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <div className="font-medium">{row.name}</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            {row.email}
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge className="text-xs" variant="secondary">
                                            {row.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {row.date}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {row.amount}
                                    </TableCell>
                                    <TableCell className="text-right"><OrderDetails {...orders[index]} /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Button variant="outline" onClick={() => router.push('/')}><LogOut />Log out</Button>
        </div>
    )
}
interface TableRowData {
    name: string;
    email: string;
    status: string;
    date: string;
    amount: number;
}

interface ProductData {
    quantity: number;
    id: string;
    price: number;
}

interface OrderData {
    id: string;
    client: string;
    status: string;
    date: string;
    amount: number;
    products: ProductData[];
}



const fakeDatabase: TableRowData[] = [
    {
        name: "Liam Johnson",
        email: "liam@example.com",
        status: "Fulfilled",
        date: "2023-06-23",
        amount: 250.00
    },
    {
        name: "Emma Brown",
        email: "emma@example.com",
        status: "Pending",
        date: "2023-06-24",
        amount: 300.00
    },
    {
        name: "Noah Wilson",
        email: "noah@example.com",
        status: "Cancelled",
        date: "2023-06-25",
        amount: 150.00
    },
    {
        name: "Olivia Smith",
        email: "olivia@example.com",
        status: "Fulfilled",
        date: "2023-06-26",
        amount: 400.00
    }
];

const orders: OrderData[] = [
    {
        id: "1",
        client: "Liam Johnson",
        status: "Fulfilled",
        date: "2023-06-23",
        amount: 250.00,
        products: [{ quantity: 1, id: "Product 1" , price: 100}, { quantity: 2, id: "Product 2", price: 100}]
    },
    {
        id: "2",
        client: "Emma Brown",
        status: "Pending",
        date: "2023-06-24",
        amount: 300.00,
        products: [{ quantity: 1, id: "Product 1" , price: 100}, { quantity: 2, id: "Product 2", price: 100}]
    },
    {
        id: "3",
        client: "Noah Wilson",
        status: "Cancelled",
        date: "2023-06-25",
        amount: 150.00,
        products: [{ quantity: 1, id: "Product 1" , price: 100}, { quantity: 2, id: "Product 2", price: 100}]
    },
    {
        id: "4",
        client: "Olivia Smith",
        status: "Fulfilled",
        date: "2023-06-26",
        amount: 400.00,
        products: [{ quantity: 1, id: "Product 1" , price: 100}, { quantity: 2, id: "Product 2", price: 100}]
    }
];

export { fakeDatabase, orders};
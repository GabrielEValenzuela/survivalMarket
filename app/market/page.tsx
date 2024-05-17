"use client";

import { useEffect, useState } from 'react';
import { ProductCard } from '@/components/productCard';
import { ShopBar } from '@/components/shopBar'

// Sample data for the market products
const products: any[] = [
  {
    id: 1,
    name: 'Medicines',
    description: 'Essential medical supplies to ensure health and safety.',
    imageUrl: '/products/medicine.png',
    price: 99.,
    stock: 10
  },
  {
    id: 2,
    name: 'Ammo',
    description: 'Ammunition for defense and hunting needs.',
    imageUrl: '/products/ammo.png',
    price: 99.99,
    stock: 10
  },
  {
    id: 3,
    name: 'Food',
    description: 'Various food items including canned goods and dried meats.',
    imageUrl: '/products/food.png',
    price: 99.99,
    stock: 10
  },
  {
    id: 4,
    name: 'Water',
    description: 'Clean water in secure containers.',
    imageUrl: '/products/water.png',
    price: 99.99,
    stock: 10
  }
];

// Define the structure of each item in the cart
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Define the props expected by the ShopBar component
export interface ShopBarProps {
  cart: CartItem[];
  onCheckout: () => void;
}

export interface ProductCardProps {
  productData: any[];
  handleAddToCart: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, productId: number) => void;
}


export default function Component() {

  const [cart, setCart] = useState<CartItem[]>([]);

  // useEffect to reload cart when checkout is successfull
  useEffect(() => {
    console.log('Cart updated', cart);
  }, [cart]);

  const handleCheckout = () => {
    console.log("Checking out", cart);
    alert('Checkout successful!');
    setCart(cart.map(item => ({ ...item, quantity: 0 }))); // Reset quantities after checkout
  };

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: any) => {
    event.preventDefault();
    setCart([...cart, { id: product.id, name: product.name, price: product.price, quantity: 1 }]);
  }

  return (
    <section className="w-full py-8 md:py-16 lg:py-20">
        <ShopBar cart={cart} onCheckout={handleCheckout} />
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        <h1 className="text-2xl font-bold tracking-tight">Browse Our Products</h1>
            <p className="text-gray-500 dark:text-gray-400">Discover the latest products in our collection.</p>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-4 md:px-6 py-12'>
          <ProductCard productData={products} handleAddToCart={handleAddToCart}/>
        </div>
      </div>
    </section>
  )
}

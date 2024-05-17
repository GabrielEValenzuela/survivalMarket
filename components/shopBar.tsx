import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'; // Assuming these components come from Radix UI

import { Button } from '@/components/ui/button'; // Assuming this component comes from your UI library

import { Badge } from '@/components/ui/badge'; // Assuming this component comes from your UI library

import { ShoppingCart, LogOut } from 'lucide-react'; // Adjust import based on your icon 

import { ShopBarProps } from '@/app/market/page';

export function ShopBar(props: Readonly<ShopBarProps>) {
  const totalItems = props.cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = props.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <header className="flex items-center justify-between px-4 md:px-6 h-14 border-b">
      <Button className="relative" size="icon" variant="ghost">
        <LogOut className="h-6 w-6" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="relative" size="icon" variant="ghost">
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <Badge className="absolute -top-1 -right-1 h-4 min-w-[1rem] rounded-full bg-red-500 px-1 text-xs font-medium text-white">
                {totalItems}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80">
          <DropdownMenuLabel>My cart</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {props.cart.length > 0 ? (
            props.cart.map(item => (
              <DropdownMenuItem key={item.id}>
                {item.name} - ${item.price.toFixed(2)} (x{item.quantity})
              </DropdownMenuItem>
            ))
          ) : (
            <DropdownMenuItem>Your cart is empty</DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          {props.cart.length > 0 && (
            <DropdownMenuItem asChild>
              <Button onClick={props.onCheckout} className="w-full text-left">
                Checkout (${totalCost.toFixed(2)})
              </Button>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

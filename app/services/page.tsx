'use client';

import { useState } from 'react';
import { Service, CartItem, Customer, Receipt } from '../types';
import { services } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';
import { Cart } from '../components/Cart';
import { CheckoutDialog } from '../components/CheckoutDialog';
import { Receipt as ReceiptDialog } from '../components/Receipt';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

export default function ServicesPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (service: Service) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.service.id === service.id);
      if (existingItem) {
        return prev.map((item) =>
          item.service.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { service, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (serviceId: string, change: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.service.id === serviceId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (serviceId: string) => {
    setCartItems((prev) => prev.filter((item) => item.service.id !== serviceId));
  };

  const handleCheckoutComplete = (customer: Customer) => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.service.price * item.quantity,
      0
    );

    const newReceipt: Receipt = {
      id: Math.random().toString(36).substr(2, 9),
      customer,
      items: cartItems,
      total,
      date: new Date().toISOString(),
    };

    setReceipt(newReceipt);
    setIsCheckoutOpen(false);
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-9"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <Cart
              items={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onCheckout={() => setIsCheckoutOpen(true)}
            />
          </div>
        </div>
      </div>
      <CheckoutDialog
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onComplete={handleCheckoutComplete}
        items={cartItems}
      />
      <ReceiptDialog
        receipt={receipt}
        onClose={() => setReceipt(null)}
      />
    </div>
  );
}
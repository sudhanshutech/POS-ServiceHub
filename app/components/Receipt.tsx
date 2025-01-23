'use client';

import { Receipt as ReceiptType } from '../types';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check } from 'lucide-react';

interface ReceiptProps {
  receipt: ReceiptType | null;
  onClose: () => void;
}

export function Receipt({ receipt, onClose }: ReceiptProps) {
  if (!receipt) return null;

  return (
    <Dialog open={!!receipt} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            Purchase Complete
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-medium mb-2">Customer Details</h3>
            <p className="text-sm">{receipt.customer.name}</p>
            <p className="text-sm">{receipt.customer.email}</p>
            <p className="text-sm">{receipt.customer.phone}</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Items</h3>
            <div className="space-y-2">
              {receipt.items.map((item) => (
                <div key={item.service.id} className="flex justify-between text-sm">
                  <span>{item.service.name} × {item.quantity}</span>
                  <span>₹{(item.service.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-4 border-t">
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>₹{receipt.total.toFixed(2)}</span>
            </div>
          </div>
          <Button className="w-full" onClick={onClose}>
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
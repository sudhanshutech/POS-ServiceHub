"use client";

import { Service } from "../types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Clock } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  onAddToCart: (service: Service) => void;
}

export function ServiceCard({ service, onAddToCart }: ServiceCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <CardTitle className="p-4">{service.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">{service.description}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{service.duration}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="text-sm">₹{service.price.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => onAddToCart(service)}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

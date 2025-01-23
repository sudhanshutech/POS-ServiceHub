// This file contains all the types that are used in the project

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
  image: string;
}

export interface CartItem {
  service: Service;
  quantity: number;
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
}

export interface Receipt {
  id: string;
  customer: Customer;
  items: CartItem[];
  total: number;
  date: string;
}

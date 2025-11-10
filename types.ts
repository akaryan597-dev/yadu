
export interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number; 
}

export interface CartItem extends Product {
  quantity: number;
}

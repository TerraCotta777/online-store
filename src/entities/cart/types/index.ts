export interface Cart {
  cart: {
    id: string;
    items: {
      product: {
        id: string;
        title: string;
        description: string;
        price: number;
      };
      count: number;
    }[];
  };
  total: number;
}

export type CartItem = {
  id: string;
  title: string;
  price: number;
  count: number;
};

export type CartUpdateDTO = {
  productId: string;
  count: number;
}
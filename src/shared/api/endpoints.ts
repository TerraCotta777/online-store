const endpoints = () => {
  return {
    auth: {
      login: "login",
      register: "register",
    },
    product: {
      get_products: "products",
      get_product: (product_id: number) => `products/${product_id}`,
    },
    cart: {
      get_cart: "profile/cart",
      update_cart: "profile/cart",
      delete_cart: "profile/cart",
    },
    order: {
      create_order: "profile/cart/checkout",
    },
  };
};

export default endpoints;

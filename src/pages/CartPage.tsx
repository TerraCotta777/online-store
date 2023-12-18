import { useQueryClient } from "react-query";
import { Box, SelectChangeEvent, Typography } from "@mui/material";
import { cartQueryKey, useGetCart } from "../entities/cart/model";
import CartTable from "../entities/cart/ui/CartTable";
import { deleteCart, updateCart } from "../entities/cart/api";
import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import OrderSummary from "../entities/order/ui/OrderSummary";
import { createOrder } from "../entities/order/api";

const CartPage = () => {
  const { data: { cart, total } = {} } = useGetCart();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const cartItems = useCallback(() => {
    if (cart && cart.items) {
      if (cart.items.length <= 1) return [];
      else
        return cart.items.map((item) => {
          return {
            id: item.product.id,
            title: item.product.title,
            price: item.product.price,
            count: item.count,
          };
        });
    } else return [];
  }, [cart]);

  const handleSelectChange = async (
    event: SelectChangeEvent<number>,
    productId: string
  ) => {
    await updateCart({ productId, count: 0 });
    await updateCart({ productId, count: +event.target.value as number });
    queryClient.invalidateQueries(cartQueryKey);
  };

  const handleDeleteItem = async (productId: string) => {
    await updateCart({ productId, count: 0 });
    queryClient.invalidateQueries(cartQueryKey);
  };

  const handleCheckout = async () => {
    await createOrder();
    navigate('/order/success')
    deleteCart();
  }

  return cartItems()?.length ? (
    <>
      <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
        <Box sx={{ width: "59%", height: "100%" }}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Your bag
          </Typography>
          <CartTable
            cartItems={cartItems() || []}
            total={total || 0}
            onChange={handleSelectChange}
            onDelete={handleDeleteItem}
          />
        </Box>
        <Box sx={{ width: "39%", height: "100%" }}>
          <OrderSummary total={total || 0} onClick={handleCheckout} />
        </Box>
      </Box>
    </>
  ) : (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        Your Cart Is Empty.
      </Typography>
      <Typography variant="h5" sx={{ mt: 4 }}>
        Not sure where to start?
      </Typography>
      <Typography variant="h5">
        Check out Best Sellers in <Link to="/products">products</Link>.
      </Typography>
    </Box>
  );
};

export default CartPage;

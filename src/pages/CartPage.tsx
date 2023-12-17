import { useQueryClient } from "react-query";
import { Box, SelectChangeEvent, Typography } from "@mui/material";
import { cartQueryKey, useGetCart } from "../entities/cart/model";
import CartTable from "../entities/cart/ui/CartTable";
import { updateCart } from "../entities/cart/api";

const CartPage = () => {
  const { data: { cart, total } = {} } = useGetCart();
  const queryClient = useQueryClient();
  const cartItems = cart?.items.map((item) => {
    return {
      id: item.product.id,
      title: item.product.title,
      price: item.product.price,
      count: item.count,
    };
  });

  const handleSelectChange = async (event: SelectChangeEvent<number>, productId: string) => {
    await updateCart({ productId, count: 0 });
    await updateCart({productId, count: +event.target.value as number})
    queryClient.invalidateQueries(cartQueryKey);
  }

  const handleDeleteItem = async (productId: string) => {
    await updateCart({ productId, count: 0 });
    queryClient.invalidateQueries(cartQueryKey);
  };

  return (
    <>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Your bag
      </Typography>
      <Box sx={{ width: "60%", height: "100%" }}>
        <CartTable
          cartItems={cartItems || []}
          total={total || 0}
          onChange={handleSelectChange}
          onDelete={handleDeleteItem}
        />
      </Box>
    </>
  );
};

export default CartPage;

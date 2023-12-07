import { useQueryClient } from "react-query";
import { Box, Typography } from "@mui/material";
import { cartQueryKey, useGetCart } from "../entities/cart/model";
import CartTable from "../entities/cart/ui/CartTable";
import { CartUpdateDTO } from "../entities/cart/types";
import { deleteCart, updateCart } from "../entities/cart/api";
import { alertError } from "../shared/api/error";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { data: cart } = useGetCart();
  const queryClient = useQueryClient();
  const cartItems = cart?.items.map((item) => {
    return {
      id: item.product.id,
      title: item.product.title,
      price: item.product.price,
      count: item.count,
    };
  });

  const handleAddItem = async ({ productId, count }: CartUpdateDTO) => {
    if (count >= 10) alertError("Ограничение до 10 единиц одного товара");
    else {
      try {
        await updateCart({ productId, count: 1 });
        queryClient.invalidateQueries(cartQueryKey);
      } catch (err) {
        alertError(err);
      }
    }
  };
  const handleSubtractItem = async ({ productId, count }: CartUpdateDTO) => {
    try {
      await updateCart({ productId, count: 0 });
      if (count > 1) await updateCart({ productId, count: count - 1 });
      queryClient.invalidateQueries(cartQueryKey);
    } catch (err) {
      alertError(err);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number.isInteger(+event.target.value)) {
      const input = +event.target.value;
      if (input >= 10) event.target.value = "10";
      if (input <= 0) event.target.value = "0";
      else console.log(+event.target.value);
    }
  };

  const handleDeleteItem = async (productId: string) => {
    await updateCart({productId, count: 0});
    queryClient.invalidateQueries(cartQueryKey);
  };

  return (
    <>
      <Link to="/">Products</Link>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Cart
      </Typography>
      <Box sx={{ width: "80%", height: "100%" }}>
        <CartTable
          cartItems={cartItems || []}
          onAdd={handleAddItem}
          onSubtract={handleSubtractItem}
          onDelete={handleDeleteItem}
        />
      </Box>
    </>
  );
};

export default CartPage;

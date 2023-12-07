import { Link } from "react-router-dom";
import { useQueryClient } from "react-query";
import { Box, Typography } from "@mui/material";
import { alertError } from "../shared/api/error";
import { useGetProducts } from "../entities/product/model";
import { ProductCard } from "../entities/product/ui/ProductCard";
import { CartUpdateDTO } from "../entities/cart/types";
import { updateCart } from "../entities/cart/api";
import { cartQueryKey } from "../entities/cart/model";

const ProductsPage = () => {
  const { data: products } = useGetProducts();
  const queryClient = useQueryClient();

  const handleAddToCart = async ({ productId, count }: CartUpdateDTO) => {
    console.log(productId, count);
    try {
      await updateCart({ productId, count });
      queryClient.invalidateQueries(cartQueryKey);
    } catch (err) {
      alertError(err);
    }
  };
  return (
    <Box>
      <Link to="/cart">Cart</Link>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Products
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
        {products &&
          products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
      </Box>
    </Box>
  );
};

export default ProductsPage;

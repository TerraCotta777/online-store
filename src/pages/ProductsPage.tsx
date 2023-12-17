import { useQueryClient } from "react-query";
import { Box } from "@mui/material";
import { useGetProducts } from "../entities/product/model";
import { ProductCard } from "../entities/product/ui/ProductCard";
import { CartUpdateDTO } from "../entities/cart/types";
import { updateCart } from "../entities/cart/api";
import { cartQueryKey } from "../entities/cart/model";
import { alertSuccess } from "../shared/api/success";

const ProductsPage = () => {
  const { data: products } = useGetProducts();
  const queryClient = useQueryClient();

  const handleAddToCart = async ({ productId, count }: CartUpdateDTO) => {
    console.log(productId, count);
    await updateCart({ productId, count });
    alertSuccess("Product was added to cart");
    queryClient.invalidateQueries(cartQueryKey);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          // gap: "30px",
        }}
      >
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

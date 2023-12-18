import { Box, IconButton, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Product } from "../types";
import { CartUpdateDTO } from "entities/cart/types";

type Props = {
  product: Product;
  onAddToCart: ({ productId, count }: CartUpdateDTO) => void;
};

export const ProductCard = ({ product, onAddToCart }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: "33%",
        flexGrow: 0,
        flexDirection: "column",
        mt: 3,
        padding: '20px',
        borderRadius: "10px",
        transition: "all .1s ease-in-out",
        "&:hover": {
          boxShadow: "7px 9px 23px -9px rgba(34, 60, 80, 0.44)",
          transform: "scale(1.05)",
        },
      }}
    >
      <Box>
        <Box
          component="img"
          src={`https://picsum.photos/200?random=${product.id}`}
          alt="product"
          sx={{
            height: "260px",
            width: "100%",
            objectFit: "cover",
          }}
        ></Box>
      </Box>
      <Box
        sx={{ mt: 1, display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <Typography variant="h6" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ flexGrow: 1 }}>
          {product.description}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography variant="h6">$ {product.price}</Typography>
          <IconButton
            onClick={() => onAddToCart({ productId: product.id, count: 1 })}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Product } from "../types";
import { CartUpdateDTO } from "entities/cart/types";

type Props = {
  product: Product;
  onAddToCart: ({productId, count}: CartUpdateDTO) => void;
};

export const ProductCard = ({ product, onAddToCart }: Props) => {

  return (
    <Card sx={{ width: 375 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={`https://picsum.photos/200?random=${product.id}`}
        title="random"
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="subtitle1">{product.description}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5">
          $ {product.price}
        </Typography>
        <IconButton onClick={() => onAddToCart({productId: product.id, count: 1})}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

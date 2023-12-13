import { CartUpdateDTO } from "../types";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  IconButton,
  Input,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

type Props = {
  cartItems: {
    id: string;
    title: string;
    price: number;
    count: number;
  }[];
  total: number;
  onAdd: ({ productId, count }: CartUpdateDTO) => void;
  onSubtract: ({ productId, count }: CartUpdateDTO) => void;
  onChange: (inputValue: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, productId: string) => void;
  onDelete: (productId: string) => void;
};

const CartTable = ({ cartItems, total, onAdd, onSubtract, onChange, onDelete }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((row) => {
            const cartItem: CartUpdateDTO = {
              productId: row.id,
              count: row.count,
            };

            return (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => onSubtract(cartItem)}>
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                  <Input
                    sx={{ width: "50px", padding: "0 5px" }}
                    value={row.count}
                    type="number"
                    onChange={(event) => onChange(event, row.id)}
                  />
                  <IconButton onClick={() => onAdd(cartItem)}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">$ {row.price}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => onDelete(row.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}

          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">$ {total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;

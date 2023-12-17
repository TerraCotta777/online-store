import DeleteIcon from "@mui/icons-material/Delete";
import {
  FormControl,
  IconButton,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type Props = {
  cartItems: {
    id: string;
    title: string;
    price: number;
    count: number;
  }[];
  total: number;
  onChange: (
    event: SelectChangeEvent<number>,
    productId: string
  ) => void;
  onDelete: (productId: string) => void;
};

const CartTable = ({ cartItems, total, onChange, onDelete }: Props) => {
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
          {cartItems.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="center">
                <FormControl fullWidth>
                  <Select
                    value={row.count}
                    onChange={(event) => onChange(event, row.id)}
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(
                      (option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="right">$ {row.price}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => onDelete(row.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}

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

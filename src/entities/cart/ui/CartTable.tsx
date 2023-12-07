import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { CartItem, CartUpdateDTO } from "../types";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

type CellProps = {
  onAdd: ({ productId, count }: CartUpdateDTO) => void;
  onSubtract: ({ productId, count }: CartUpdateDTO) => void;
  onDelete: (productId: string) => void;
};
const cells = ({ onAdd, onSubtract, onDelete }: CellProps) => {
  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Title",
      width: 130,
    },
    {
      field: "price",
      headerName: "Price",
    },
    {
      field: "count",
      headerName: "Quantity",
      width: 200,
      renderCell: (params: GridRenderCellParams<CartItem, CartItem>) => {
        const cartItem: CartUpdateDTO = {
          productId: params.row.id,
          count: params.row.count,
        };
        return (
          <Box>
            <IconButton onClick={() => onSubtract(cartItem)}>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <TextField
              sx={{ width: "80px" }}
              value={params.row.count}
              type="number"
              onChange={() => console.log("handleInput")}
            />
            <IconButton onClick={() => onAdd(cartItem)}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params: GridRenderCellParams<CartItem, CartItem>) => (
        <Box>
          <IconButton onClick={() => onDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];
  return columns;
};

type Props = {
  cartItems: {
    id: string;
    title: string;
    price: number;
    count: number;
  }[];
  onAdd: ({ productId, count }: CartUpdateDTO) => void;
  onSubtract: ({ productId, count }: CartUpdateDTO) => void;
  onDelete: () => void;
};

const CartTable = ({ cartItems, onAdd, onSubtract, onDelete }: Props) => {
  // const [amount, setAmount] = useState(0);

  return (
    <div style={{ minHeight: 200, width: "100%" }}>
      <DataGrid
        rows={cartItems}
        autoHeight
        columns={cells({ onAdd, onSubtract, onDelete })}
        getRowId={(row) => row.id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default CartTable;

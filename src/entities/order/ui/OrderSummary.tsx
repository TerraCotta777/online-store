import { Box, Button, Typography } from "@mui/material";

type Props = {
  total: number;
  onClick: () => void;
};

const OrderSummary = ({ total, onClick }: Props) => {
  return (
    <Box sx={{ padding: "36px", background: "#f1f1f1" }}>
      <Box sx={{ padding: "24px", background: "#ffffff" }}>
        <Typography
          variant="h5"
          sx={{ pb: 2, borderBottom: "1px solid rgba(32,32,32,.07)" }}
        >
          Order Summary
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography>Standard Shipping</Typography>
          <Typography>Free</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            mb: 2,
            pb: 2,
            borderBottom: "1px solid rgba(32,32,32,.07)",
          }}
        >
          <Typography>Bag Subtotal</Typography>
          <Typography>${total}</Typography>
        </Box>
        <Button variant="contained" sx={{ width: "100%" }} onClick={onClick}>
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default OrderSummary;

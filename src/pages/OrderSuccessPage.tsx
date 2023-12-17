import { Box, Typography } from "@mui/material";

const OrderSuccess = () => {
  return (
    <Box sx={{textAlign: 'center'}}>
      <Typography variant="h4">Thank you for your order.</Typography>
      <Typography variant="h5">Enjoy your free surprise gift.</Typography>
    </Box>
  );
};

export default OrderSuccess;

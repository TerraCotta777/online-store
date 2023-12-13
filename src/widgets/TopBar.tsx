import { Box } from "@mui/material";

export const TopBar = () => {
  return (
    <Box
      sx={{
        height: "36px",
        paddingTop: "6px",
        background: "rgb(0, 15, 159)",
        color: "rgb(255, 255, 255)",
        textAlign: "center",
      }}
    >
      Free Shipping on Orders Over $75
    </Box>
  );
};

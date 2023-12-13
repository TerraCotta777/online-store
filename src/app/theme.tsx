import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000f9f",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    allVariants: {
      fontFamily: '"Fira Sans", sans-serif',
      fontWeight: 300,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...((ownerState.variant === "contained" && {
            textTransform: "unset",
            backgroundColor: "#202020",
            color: "#fff",
            borderRadius: "24px",
            height: "48px",
            lineHeight: "48px",
            padding: "0 36px",
            fontWeight: 500,
            fontSize: "16px",
            transition: "background .2s ease-in-out,color .2s ease-in-out",
            whiteSpace: "nowrap",
            "&:hover": {
              background: "#000f9f",
              color: "#fff",
            },
          }) ||
            (ownerState.variant === "text" && {
              color: "#202020",
              background: "transparent",
              "&:hover": {
                color: "#000f9f",
                background: "transparent",
              },
            })),
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
            color: "#000f9f",
          },
        },
      },
    },
  },
});

export default theme;

import {
  Box,
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export const CustomDialog = ({ open, onClose, title, children }: Props) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <Box
        sx={{
          padding: "24px 24px 10px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: 'center'
        }}
      >
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "700",
          }}
        >
          {title}
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            width: "40px",
            height: "40px",
            maxHeight: "40px",
            cursor: "pointer",
          }}
        >
          <CloseIcon fill={"#fff"} />
        </IconButton>
      </Box>
      <Box sx={{ padding: "0px 24px 32px 24px" }}>{children}</Box>
    </Dialog>
  );
};

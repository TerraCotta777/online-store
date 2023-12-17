import { Box, Button, Typography } from "@mui/material";
import PresentsImg from "../assets/homepage-img.webp";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../shared/hooks/useAuth";

type Props = {
  openLoginDialog: () => void;
};

const HomePage = ({ openLoginDialog }: Props) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleClick = () => {
    user.isAutorised ? navigate("/products") : openLoginDialog();
  };

  return (
    <Box>
      <Box
        component="img"
        sx={{ width: "100%", height: 470, objectFit: "cover" }}
        alt="presents"
        src={PresentsImg}
      ></Box>
      <Box sx={{ mt: 2, display: { xs: "block", md: "flex" }, justifyContent: "space-between" }}>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h2" sx={{ fontWeight: "500" }}>
            40% off everything.
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "500" }}>
            Go, go, go.
          </Typography>
        </Box>
        <Button variant="contained" onClick={handleClick}>Shop</Button>
      </Box>
    </Box>
  );
};

export default HomePage;

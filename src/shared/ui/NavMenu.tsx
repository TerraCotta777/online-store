import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../hooks/useAuth";

const links = ["Women", "Men", "Sale"];

type Props = {
  openLoginDialog: () => void;
};
export const NavMenu = ({ openLoginDialog }: Props) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const navigateToProducts = () => {
    navigate("/products");
    handleCloseNavMenu();
  };

  const handleClick = () => {
    user.isAutorised ? navigateToProducts() : openLoginDialog();
  };
  return (
    <>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {links.map((link) => (
            <MenuItem key={link} onClick={handleClick}>
              <Typography textAlign="center">{link}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        {links.map((link) => (
          <Button
            variant="text"
            key={link}
            onClick={handleClick}
            sx={{ textTransform: "unset", fontWeight: 500 }}
          >
            {link}
          </Button>
        ))}
      </Box>
    </>
  );
};

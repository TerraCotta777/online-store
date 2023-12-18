import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useAuth } from "../shared/hooks/useAuth";
import { Login, Register } from "../entities/user/ui";
import { NavMenu } from "../shared/ui";
import LogoImg from "../assets/logo.svg";

type Props = {
  openLogin: boolean;
  openLoginDialog: () => void;
  closeLoginDialog: () => void;
};

export const Header = ({
  openLogin,
  openLoginDialog,
  closeLoginDialog,
}: Props) => {
  const [openRegister, setOpenRegister] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const openRegisterDialog = () => setOpenRegister(true);
  const closeRegisterDialog = () => setOpenRegister(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>, target: string) => {
    if (user.isAutorised) {
      target === "cart"
        ? navigate("/cart")
        : setAnchorElUser(event.currentTarget);
    } else openLoginDialog();
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logout();
    setAnchorElUser(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: "33.3%" }}>
          <NavMenu openLoginDialog={openLoginDialog} />
        </Box>

        <Link to="/">
          <Box
            component="img"
            src={LogoImg}
            sx={{ width: 120, height: 90, flex: "33.3%" }}
          ></Box>
        </Link>
        <Box
          sx={{ flex: "33.3%", display: "flex", justifyContent: "flex-end" }}
        >
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
            sx={{ marginTop: "1px" }}
              color="inherit"
              aria-label="account"
              onClick={(event) => handleClick(event, 'account')}
            >
              <AccountCircleIcon />
            </IconButton>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="logoutbutton" onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <IconButton
            color="inherit"
            aria-label="cart"
            onClick={(event) => handleClick(event, 'cart')}
          >
            <Link to="/cart">
              <LocalMallIcon />
            </Link>
          </IconButton>
        </Box>
      </Box>
      <Login
        open={openLogin}
        closeDialog={closeLoginDialog}
        openRegister={openRegisterDialog}
      />
      <Register
        open={openRegister}
        closeDialog={closeRegisterDialog}
        openLogin={openLoginDialog}
      />
    </>
  );
};

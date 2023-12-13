import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
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
  const navigate = useNavigate();
  const { user } = useAuth();

  const openRegisterDialog = () => setOpenRegister(true);
  const closeRegisterDialog = () => setOpenRegister(false);

  const handleClick = (path: string) => {
    user.isAutorised ? navigate(path) : openLoginDialog();
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
          <NavMenu />
        </Box>

        <Link to="/">
          <Box
            component="img"
            src={LogoImg}
            sx={{ width: 120, height: 90, flex: "33.3%" }}
          ></Box>
        </Link>
        <Box sx={{ flex: "33.3%", display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton color="inherit" onClick={() => handleClick("/profile")}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{ marginTop: "4px" }}
            onClick={() => handleClick("/cart")}
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

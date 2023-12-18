import { CustomDialog } from "../../../shared/ui";
import { AuthForm } from ".";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../shared/hooks/useAuth";
import { AuthCredentials } from "../types";
import { Link, Typography } from "@mui/material";

type Props = {
  open: boolean;
  closeDialog: () => void;
  openRegister: () => void;
};

export const Login = ({ open, closeDialog, openRegister }: Props) => {
  const { auth, loading } = useAuth();
  const navigate = useNavigate();

  const redirectToRegister = () => {
    closeDialog();
    openRegister();
  };

  const onSubmit = (data: AuthCredentials) => {
    auth(data, () => {
      closeDialog();
      navigate("/products");
    });
  };

  return (
    <CustomDialog open={open} title="Log In" onClose={closeDialog}>
      <Typography>Log in to access products info </Typography>
      <AuthForm
        submitFunction={onSubmit}
        loading={loading}
        isRegisterForm={false}
      />
      <Typography>
        Don't have an account?{" "}
        <Link
          component="button"
          variant="body2"
          onClick={redirectToRegister}
          sx={{ marginBottom: "2px" }}
        >
          Sign up here
        </Link>
        .
      </Typography>
    </CustomDialog>
  );
};

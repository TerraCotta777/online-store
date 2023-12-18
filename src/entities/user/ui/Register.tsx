import { AuthForm } from ".";
import { CustomDialog } from "../../../shared/ui";
import { useAuth } from "../../../shared/hooks/useAuth";
import { UserDTO } from "../types";
import { Link, Typography } from "@mui/material";
import { alertSuccess } from "../../../shared/api/success";

type Props = {
  open: boolean;
  closeDialog: () => void;
  openLogin: () => void;
};

export const Register = ({ open, closeDialog, openLogin }: Props) => {
  const { register: registerUser, loading } = useAuth();

  const redirectToLogin = () => {
    closeDialog();
    openLogin();
  };
  const onSubmit = (data: UserDTO) => {
    registerUser({ ...data, role: "admin" }, () => {
      closeDialog();
      openLogin();
      alertSuccess("Successfully registered");
    });
  };

  return (
    <CustomDialog open={open} title="Sign up" onClose={closeDialog}>
      <Typography>We can’t wait to see you out there!</Typography>
      <AuthForm
        submitFunction={onSubmit}
        loading={loading}
        isRegisterForm={true}
      />
      <Typography>
        Already have an account?{" "}
        <Link
          component="button"
          variant="body2"
          onClick={redirectToLogin}
          sx={{ marginBottom: "2px" }}
        >
          Sign in
        </Link>
        .
      </Typography>
    </CustomDialog>
  );
};

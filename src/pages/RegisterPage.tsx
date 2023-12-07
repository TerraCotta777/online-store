import { UserDTO } from "entities/user/types";
import { Box, Typography } from "@mui/material";
import { useAuth } from "../shared/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthForm from "../entities/user/ui/AuthForm";

const RegisterPage = () => {
  const navigate = useNavigate();

  const { register: registerUser, loading, user } = useAuth();

  const onSubmit = (data: UserDTO) => {
    registerUser({ ...data, role: "admin" }, () => {
      navigate("/");
      toast("Successfully registered");
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h2">Create Account</Typography>
      <Typography>
        Already have an account? <Link to="/login">Sign in here</Link>.
      </Typography>
      <Box sx={{ width: "60%", m: "0 auto" }}>
        <AuthForm submitFunction={onSubmit} loading={loading} isRegisterForm />
      </Box>
    </Box>
  );
};

export default RegisterPage;

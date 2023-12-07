import { AuthCredentials } from "entities/user/types";
import { Box, Typography } from "@mui/material";
import { useAuth } from "../shared/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthForm from "../entities/user/ui/AuthForm";

const LoginPage = () => {
  const navigate = useNavigate();

  const { auth, loading } = useAuth();

  const onSubmit = (data: AuthCredentials) => {
    auth(data, () => {
      navigate("/");
      toast("Successfully logged in");
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h2">Login</Typography>
      <Typography>
        Don't have an account? <Link to="/register">Sign up here</Link>.
      </Typography>
      <Box sx={{width: '60%', m: '0 auto'}}>
        <AuthForm submitFunction={onSubmit} loading={loading} isRegisterForm={false} />
      </Box>
    </Box>
  );
};

export default LoginPage;

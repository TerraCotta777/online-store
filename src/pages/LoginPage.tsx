import { AuthCredentials } from "entities/user/types";
import { Box, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAuth } from "../shared/hooks/useAuth";
import { LoadingButton } from "@mui/lab";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthCredentials>();
  const navigate = useNavigate();

  const { auth, loading } = useAuth();

  const onSubmit = (data: AuthCredentials) => {
    console.log(data);
    auth(data, () => navigate('/'));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h2">Login</Typography>
      <Typography>
        Don't have an account? <Link to="/register">Sign up here</Link>.
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                    value
                  ),
              },
            })}
          />
          {errors.email?.type == "matchPattern" && (
            <Typography
              variant="body2"
              sx={{
                textAlign: "left",
                color: errors.email ? "red" : "inherit",
              }}
            >
              Please enter valid email
            </Typography>
          )}
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            {...register("password", { required: true })}
          />
          <LoadingButton
            loading={loading}
            type="submit"
            sx={{ mt: 2 }}
            variant="contained"
          >
            Sign in
          </LoadingButton>
        </Box>
      </form>
    </Box>
  );
};

export default LoginPage;
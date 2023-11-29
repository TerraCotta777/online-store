import { AuthCredentials } from "entities/user/types";
import { Box, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAuth } from "../shared/hooks/useAuth";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthCredentials>();

  const { auth, loading, user } = useAuth();

  const onSubmit = (data: AuthCredentials) => {
    console.log(data);
    auth(data, () => console.log("yeeeei"));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h2">Create Account</Typography>
      <Typography>
      Already have an account? <Link to="/login">Sign in here</Link>.
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
            Create
          </LoadingButton>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterPage;

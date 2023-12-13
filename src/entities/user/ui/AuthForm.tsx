import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { UserDTO } from "../types";
import { useForm } from "react-hook-form";

type Props = {
  submitFunction: (data: UserDTO) => void;
  loading: boolean;
  isRegisterForm: boolean;
};

export const AuthForm = ({ submitFunction, loading, isRegisterForm }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDTO>();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const validateEmail = (email: string) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePassword = (password: string) =>
    isRegisterForm
      ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!@#\$%\^&\*]).{8,15}$/.test(password)
      : true;

  return (
    <form onSubmit={handleSubmit(submitFunction)}>
      <Box sx={{ mt: 2, display: "flex", flexDirection: "column" }}>
        <FormControl sx={{ mb: 2 }} variant="outlined">
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: validateEmail,
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
        </FormControl>

        <FormControl sx={{ mb: 3 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: true,
              validate: {
                matchPattern: validatePassword,
              },
            })}
            sx={{
              "&:has(> input:-webkit-autofill)": {
                backgroundColor: "rgb(231 240 254)",
              },
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {errors.password?.type == "matchPattern" && isRegisterForm && (
            <Typography
              variant="body2"
              sx={{
                textAlign: "left",
                color: errors.password ? "red" : "inherit",
              }}
            >
              Password must contain at least 1 uppercase, 1 lowercase letters, 1
              symbol, 1 number and be min 8 max 15 characters long.
            </Typography>
          )}
        </FormControl>

        <LoadingButton
          loading={loading}
          type="submit"
          sx={{ mb: 2, height: "50px" }}
          variant="contained"
        >
          {isRegisterForm ? "Create" : "Sign in"}
        </LoadingButton>
      </Box>
    </form>
  );
};

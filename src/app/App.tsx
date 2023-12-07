import { Provider } from "react-redux";
import LoginPage from "../pages/LoginPage";
import "./App.css";
import "./toast.css";
import store from "../store";
import { CssBaseline, ThemeProvider, styled } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorBoundary from "../shared/ui/ErrorBoundary";
import RegisterPage from "../pages/RegisterPage";
import theme from "./theme";
import PrivateRoute from "./PrivateRoute";
import ProductsPage from "../pages/ProductsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import CartPage from "../pages/CartPage";

const Root = styled("div")(() => ({
  width: "100%",
  height: "100vh",
  boxSizing: "border-box",
}));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Root>
          <Routes>
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <ErrorBoundary>
                    <Routes>
                      <Route index element={<ProductsPage />} />
                      <Route path="cart" element={<CartPage />} />
                    </Routes>
                  </ErrorBoundary>
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
          <CssBaseline />
          <ToastContainer />
        </Root>
      </Provider>
      </ThemeProvider>
      </QueryClientProvider>
  );
}

export default App;

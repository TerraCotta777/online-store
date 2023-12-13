import { Provider } from "react-redux";
import "./App.css";
import "./toast.css";
import store from "../store";
import { CssBaseline, ThemeProvider, Container, styled } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import theme from "./theme";
import PrivateRoute from "./PrivateRoute";
import ProductsPage from "../pages/ProductsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import { Header, TopBar } from "../widgets";
import { ErrorBoundary } from "../shared/ui";
import { useState } from "react";
import ProfilePage from "../pages/ProfilePage";

const Root = styled("div")(() => ({
  width: "100%",
  boxSizing: "border-box",
}));

const queryClient = new QueryClient();

function App() {
  const [openLogin, setOpenLogin] = useState(false);
  const openLoginDialog = () => setOpenLogin(true);
  const closeLoginDialog = () => setOpenLogin(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <TopBar />
          <Container>
            <Header
              openLogin={openLogin}
              openLoginDialog={openLoginDialog}
              closeLoginDialog={closeLoginDialog}
            />
            <Root>
              <Routes>
                <Route
                  path="/*"
                  element={
                    <PrivateRoute>
                      <ErrorBoundary>
                        <Routes>
                          <Route path="products" element={<ProductsPage />} />
                          <Route path="cart" element={<CartPage />} />
                          <Route path="profile" element={<ProfilePage />} />
                        </Routes>
                      </ErrorBoundary>
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/"
                  element={<HomePage openLoginDialog={openLoginDialog} />}
                />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
              <CssBaseline />
              <ToastContainer />
            </Root>
          </Container>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

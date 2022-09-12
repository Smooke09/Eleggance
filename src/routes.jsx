import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useMatch,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FormSingUp from "./pages/FormSingUp/FormSingUp";
import FormCadastro from "./pages/FormCadastro/FormCadastro";
import RegistrationForm from "./pages/RegistrationForm/registrationForm";
import { AuthProvider, AuthContext } from "./contexts/auth";
import Schedulling from "./pages/Schedulling/Schedulling";
import Products from "./pages/Products/products";
import Cart from "./pages/Cart/Cart";
import Shop from "./pages/Shop/Shop";
import AdminLogin from "./pages/Admin/Login/Login";
import HomeDashboard from "./pages/Admin/dashboard/Home";
import ProdutosDashboard from "./pages/Admin/Produtos/Produtos";
import FinishBuy from "./pages/FinishBuy/FinishBuy";
import MyProfile from "./pages/Profile/Profile";
import MyData from "./pages/Profile/Data";
import ProfileOrders from "./pages/Profile/Orders";
import ProfileAddresses from "./pages/Profile/Addresses";
import ProfileFavorites from "./pages/Profile/Favorites";
import MyLogin from "./pages/Profile/Login";
import MyRatings from "./pages/Profile/Ratings";
import { AddressProvider } from "./contexts/address";
import DashboardOrders from "./pages/Admin/Orders/Orders";
import DashboardCoupons from "./pages/Admin/Coupons/Coupons";
import { CouponProvider } from "./contexts/coupon";
import Financas from "./pages/Finances/finances";
import { EditProvider } from "./contexts/modalEdit";
import { CartProvider } from "./contexts/cart";
import { RatingProvider } from "./contexts/rating";
import { PageProvider } from "./contexts/productsPage";

const changeRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    console.log(authenticated);

    if (loading) return <div className="loading">Loading...</div>;
    return authenticated ? children : <Navigate to="/home" />;
  };

  const PrivateCard = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    const { adminAuthenticated } = useContext(AuthContext);

    const path = useMatch("/login");

    if (loading) {
      return <div className="loading">Loading...</div>;
    }
    if (adminAuthenticated) return children;

    if (!authenticated) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  };

  const PrivateLogin = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    const { adminAuthenticated } = useContext(AuthContext);
    if (authenticated) {
      return <Navigate to="/home" />;
    } else if (adminAuthenticated) {
      return <Navigate to="/admin/home" />;
    } else {
      return children;
    }
  };

  const PrivateAdmin = ({ children }) => {
    const { adminAuthenticated } = useContext(AuthContext);
    return adminAuthenticated ? children : <Navigate to="/admin" />;
  };

  const PrivateLoginAdmin = ({ children }) => {
    const { adminAuthenticated } = useContext(AuthContext);
    if (adminAuthenticated) {
      return <Navigate to="/admin/home" />;
    } else {
      return children;
    }
  };

  return (
    <Router>
      <AuthProvider>
        <PageProvider>
          <CartProvider>
            <EditProvider>
              <Routes>
                <Route exact path="/home" element={<HomePage />} />
                <Route
                  exact
                  path="/cadastro"
                  element={
                    <PrivateLogin>
                      <FormCadastro />
                    </PrivateLogin>
                  }
                />
                <Route
                  exact
                  path="/login"
                  element={
                    <PrivateLogin>
                      <FormSingUp />
                    </PrivateLogin>
                  }
                />
                <Route exact path="/contato" element={<Schedulling />} />
                <Route
                  exact
                  path="/detalhes/:id"
                  element={
                    <RatingProvider>
                      <Products />
                    </RatingProvider>
                  }
                />
                <Route exact path="/produtos/" element={<Shop />} />
                <Route
                  exact
                  path="/produtos/:id"
                  element={
                    <CartProvider>
                      <Shop />
                    </CartProvider>
                  }
                />
                <Route exact path="/financas" element={<Financas />} />
                <Route
                  exact
                  path="/perfil"
                  element={
                    <Private>
                      <MyProfile />
                    </Private>
                  }
                />
                <Route
                  exact
                  path="/perfil/pedidos"
                  element={
                    <Private>
                      <ProfileOrders />
                    </Private>
                  }
                />
                <Route
                  exact
                  path="/perfil/dados"
                  element={
                    <Private>
                      <MyData />
                    </Private>
                  }
                />
                <Route
                  exact
                  path="/perfil/enderecos"
                  element={
                    <Private>
                      <AddressProvider>
                        <ProfileAddresses />
                      </AddressProvider>
                    </Private>
                  }
                />
                <Route
                  exact
                  path="/perfil/login"
                  element={
                    <Private>
                      <MyLogin />
                    </Private>
                  }
                />
                <Route
                  exact
                  path="/perfil/favoritos"
                  element={<ProfileFavorites />}
                />
                <Route
                  exact
                  path="/perfil/avaliacoes"
                  element={
                    <Private>
                      <RatingProvider>
                        <MyRatings />
                      </RatingProvider>
                    </Private>
                  }
                />

                <Route
                  exact
                  path="/finalizarCompra"
                  element={
                    <Private>
                      <AddressProvider>
                        <FinishBuy />
                      </AddressProvider>
                    </Private>
                  }
                />
                <Route
                  exact
                  path="/carrinho"
                  element={
                    <PrivateCard>
                      <Cart />
                    </PrivateCard>
                  }
                />
                <Route
                  path="/registration"
                  element={
                    <Private>
                      <RegistrationForm />
                    </Private>
                  }
                />
                <Route
                  exact
                  path="/admin"
                  element={
                    <PrivateLoginAdmin>
                      <AdminLogin />
                    </PrivateLoginAdmin>
                  }
                />
                <Route
                  exact
                  path="/admin/home"
                  element={
                    <PrivateAdmin>
                      <HomeDashboard />
                    </PrivateAdmin>
                  }
                />
                <Route
                  exact
                  path="/admin/produtos"
                  element={
                    <PrivateAdmin>
                      <ProdutosDashboard />
                    </PrivateAdmin>
                  }
                />
                <Route
                  exact
                  path="/admin/pedidos"
                  element={
                    <PrivateAdmin>
                      <DashboardOrders />
                    </PrivateAdmin>
                  }
                />
                <Route
                  exact
                  path="/admin/cupons"
                  element={
                    <PrivateAdmin>
                      <CouponProvider>
                        <DashboardCoupons />
                      </CouponProvider>
                    </PrivateAdmin>
                  }
                />
                <Route
                  exact
                  path="/admin/administracao"
                  element={
                    <PrivateAdmin>
                      <Financas />
                    </PrivateAdmin>
                  }
                />
                <Route
                  path="*"
                  element={
                    <Private>
                      <HomePage />
                    </Private>
                  }
                  to="/"
                  replace
                />
              </Routes>
            </EditProvider>
          </CartProvider>
        </PageProvider>
      </AuthProvider>
    </Router>
  );
};

export default changeRoutes;

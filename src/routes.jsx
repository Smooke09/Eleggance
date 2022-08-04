import React, { useContext } from "react";
import HomePage from "./pages/HomePage/HomePage";
import FormSingUp from "./pages/FormSingUp/FormSingUp";
import FormCadastro from "./pages/FormCadastro/FormCadastro";
import { AuthProvider, AuthContext } from "./contexts/auth";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
/* import useAuth from "./hooks/useAuth"; */

const changeRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Loading...</div>;
    }
    if (!authenticated) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            exact
            path="/home"
            element={
              /*     <Private>
              </Privat> */
              <HomePage />
            }
          />
          <Route exact path="/cadastro" element={<FormCadastro />} />
          <Route exact path="/login" element={<FormSingUp />} />
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
      </AuthProvider>
    </Router>
  );
};

export default changeRoutes;

{
  /*   <Route path="/registration" element={<RegistrationForm />} />
   */
}
/*  import RegistrationForm from "./pages/RegistrationForm/registrationForm"; */

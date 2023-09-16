// vamos criar essa parte para o redirecionamento das aplicações

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import HomePage from "./pages/HomePage/home";
import LoginPage from "./pages/LoginPage/Index";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/login"
          element={<LoginPage />}
        />{" "}
        {/* Usamos o Element para definir por meio do import o que queremos renderizar */}
        {/* o que vamos fazer é usar o 'exact' para definir o endereço exato */}
        <Route
          exact
          path="/"
          element={<HomePage />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

// O router é uma ferramenta de rotas, chamamos ele dentro do return, e dentro dele colocamos as rotas como uma lista por isso a tag <Routes />
// e dentro do routes que consiste na lista de rotas colocamos as rotas específicas

// vamos fazer a importação no App.jsx já que é ele quem lança o nosso trabalho no navegador

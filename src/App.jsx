import "./App.css";
import LoginPage from "./Index.jsx";
import Home from "./home"

function App() {
  return (
    <div className="App">
      <Home />
      <LoginPage />
    </div>
  );
}

export default App;

// dia 23/08/23 é o terceiro dia de desenvolvimento, o que vamos fazer basicamente é criar o desvio de páginas por meio Do
// Router, por isso os imports na parte de cima não são necessários, não aqui, e não agora

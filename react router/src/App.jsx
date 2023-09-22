import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./Home";

function App() {
  return (
    <div id="container">
      <h1>Hello React Router!</h1>

      <div id="navbar">
        <Link to="/blue"> blue </Link>
        <Link to="/red">red</Link>
        <Link to="/Home">Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

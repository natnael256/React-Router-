import { Routes, Route, Link } from "react-router-dom";
import Blue from "./componets/Blue";
import Red from "./componets/Red";

function App() {
  return (
    <div id="container">
      <h1>Hello React Router!</h1>

      <div id="navbar">
        <Link to="/blue"> blue </Link>
        <Link to="/red">red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route> path = "/blue" element = {<h1>Blue</h1>}</Route>
          <Route> path = "/red" element = {<h1>Red</h1>}</Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

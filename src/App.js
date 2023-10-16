// Desc: This is the main app file that will be used to render the app
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Nav from "./nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="Labs" />} />
        <Route path="/Hello" element={<HelloWorld />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
      </Routes>

      {/* {screen === "Hello" && <HelloWorld />}
      {screen === "Labs" && <Labs />}
      {screen === "Kanbas" && <Kanbas />} */}
    </HashRouter>
  );
}

export default App;

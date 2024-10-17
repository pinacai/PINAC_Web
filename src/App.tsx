import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import PinacWorkspace from "./pages/PINAC-Workspace";
import "./App.css";
import Donate from "./pages/Donate/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pinac-workspace" element={<PinacWorkspace />} />
        <Route path="/support" element={<></>} />
        <Route path="/docs" element={<></>} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;

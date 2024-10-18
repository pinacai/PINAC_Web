import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Donate from "./pages/Donate/index";
import PinacWorkspace from "./pages/PINAC-Workspace";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/pinac-workspace" element={<PinacWorkspace />} />
        <Route path="/support" element={<></>} />
        <Route path="/docs" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;

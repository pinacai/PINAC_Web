import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import SignUpPage from "./pages/Authentication/SignUpPage";
import LoginPage from "./pages/Authentication/LoginPage";
import PinacWorkspace from "./pages/PINAC-Workspace/index";
import Donate from "./pages/Donate/index";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pinac-workspace" element={<PinacWorkspace />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/support" element={<></>} />
        <Route path="/docs" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;

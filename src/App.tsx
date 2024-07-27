import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pinac-workspace" element={<></>} />
        <Route path="/support" element={<></>} />
        <Route path="/docs" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;

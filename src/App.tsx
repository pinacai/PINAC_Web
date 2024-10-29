import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import SignUpPage from "./pages/Authentication/SignUpPage";
import SignInPage from "./pages/Authentication/SignInPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/profile" element={<></>} />
        <Route path="/support" element={<></>} />
        <Route path="/docs" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;

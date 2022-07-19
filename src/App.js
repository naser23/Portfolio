import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbars/Navbar";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import "./styles/home.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

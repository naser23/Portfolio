import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbars/Navbar";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { ProjectProvider } from "./ProjectContext";
import "./styles/home.css";

function App() {
  return (
    <ProjectProvider>
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </ProjectProvider>
  );
}

export default App;

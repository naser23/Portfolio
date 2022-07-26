import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbars/Navbar";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import { ProjectProvider } from "./ProjectContext";
import "./styles/home.css";

function App() {
  return (
    <ProjectProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/:project_name" element={<ProjectPage />} />
        </Routes>
      </Router>
    </ProjectProvider>
  );
}

export default App;

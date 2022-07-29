import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "../pages/Landing";
import Projects from "../pages/Projects";
import ProjectPage from "../pages/ProjectPage";
import { AnimatePresence } from "framer-motion";
import Contact from "../pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/:project_name" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

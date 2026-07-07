import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

// Lazy-loaded because it pulls in the Firebase SDK — no reason to ship
// that weight to visitors browsing Home or Projects.
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<div className="min-h-[60vh] bg-ink" />}>
              <Contact />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })),
);
const ProjectsPage = lazy(() =>
  import("./pages/ProjectsPage").then((m) => ({ default: m.ProjectsPage })),
);
const ResumePage = lazy(() =>
  import("./pages/ResumePage").then((m) => ({ default: m.ResumePage })),
);
const DrivingPage = lazy(() =>
  import("./pages/DrivingPage").then((m) => ({ default: m.DrivingPage })),
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route
            index
            element={
              <Suspense fallback={null}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="projects"
            element={
              <Suspense fallback={null}>
                <ProjectsPage />
              </Suspense>
            }
          />
          <Route
            path="driving"
            element={
              <Suspense fallback={null}>
                <DrivingPage />
              </Suspense>
            }
          />
          <Route
            path="resume"
            element={
              <Suspense fallback={null}>
                <ResumePage />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

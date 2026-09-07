import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "./App.tsx";

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
const PrivacyPage = lazy(() =>
  import("./pages/PrivacyPage").then((m) => ({ default: m.PrivacyPage })),
);

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route index element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="driving" element={<DrivingPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

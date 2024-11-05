import "./styles/index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Auth from "./routes/Auth";
import AuthLayout from "./routes/layout/AuthLayout";
import PrivateLayout from "./routes/layout/PrivateLayout";
import Signup from "./routes/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayout />}>
        <Route path="auth" element={<Auth />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route element={<PrivateLayout />}>
        <Route path="/" element={<App />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

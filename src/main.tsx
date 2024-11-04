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
import Login from "./routes/login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="auth" element={<Auth />} />
      <Route path="login" element={<Login />} />
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

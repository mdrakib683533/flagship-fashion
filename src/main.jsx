import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes.jsx";
import CartProviders from "./providers/CartProviders.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProviders>
      <RouterProvider router={router}></RouterProvider>
    </CartProviders>
  </StrictMode>
);

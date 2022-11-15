import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Placetostay from "./routes/Placetostay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/place-to-stay",
    element: <Placetostay />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Mission from "./pages/Mission.jsx";
import ChurchDirectory from "./pages/ChurchDirectory.jsx";
import Newsletter from "./pages/Newsletter.jsx";
import Devo from "./pages/Devo.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "churchdirectory",
        element: <ChurchDirectory />,
      },

      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "devo",
        element: <Devo />,
      },
      {
        path: "mission",
        element: <Mission />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

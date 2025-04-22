// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// import "./assets/css/style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/Hero";
import FeatureCards from "./components/Cards/Cards";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
// import Services from "..//";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from "./pages/Services/Services";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "services", element: <Services /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

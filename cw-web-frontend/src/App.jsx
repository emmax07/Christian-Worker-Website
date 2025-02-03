import { memo } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> <Footer />
    </>
  );
}

export default memo(App);

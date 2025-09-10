import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={isMenuOpen ? "blur-sm transition-all duration-300 p-6" : "p-6"}>
        <Outlet />
      </div>
    </div>
  );
}

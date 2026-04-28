import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo_orig from "../images/Logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* LEFT: Logo + Text */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src={Logo_orig}
            alt="Mohácsi Andrea logo"
            className="w-10 sm:w-14 lg:w-20 h-auto object-contain"
          />

          <div className="flex flex-col leading-tight">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide">
              Hidak Önmagunkhoz
            </h1>
            <h5 className="text-xs sm:text-sm text-gray-500 tracking-wider">
              MOHÁCSI ANDREA szakmai oldala
            </h5>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex gap-8 text-gray-700 font-medium">
          <NavLink to="/">Főoldal</NavLink>
          <NavLink to="/individual">Egyéni</NavLink>
          <NavLink to="/group">Csoportos</NavLink>
          <NavLink to="/latest">Aktuális</NavLink>
          <NavLink to="/about">Rólam</NavLink>
          <NavLink to="/contact">Kapcsolat</NavLink>
        </nav>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl z-50"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 🔥 FULLSCREEN MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center text-center z-40">

          <nav className="flex flex-col gap-6 text-xl font-medium text-[#5a6f6b]">

            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Főoldal
            </NavLink>

            <NavLink to="/individual" onClick={() => setMenuOpen(false)}>
              Egyéni
            </NavLink>

            <NavLink to="/group" onClick={() => setMenuOpen(false)}>
              Csoportos
            </NavLink>

            <NavLink to="/latest" onClick={() => setMenuOpen(false)}>
              Aktuális
            </NavLink>

            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              Rólam
            </NavLink>

            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Kapcsolat
            </NavLink>

          </nav>
        </div>
      )}
    </header>
  );
}
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/LOGO_black.jpg";
import Logo_color from "../images/LOGO_small.jpg";
import Logo_orig from "../images/Logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* LEFT: Logo + Text */}
        
        <Link to="/" className="flex items-center gap-6">
          {/* Logo */}
          <img
            src={Logo_orig}
            alt="Mohácsi Andrea logo"
            className="w-20 h-auto object-contain"
          />

          {/* Text block */}
          {/* <div className="flex items-start flex-col leading-tight">
            <h1 className="text-xl font-semibold">
              Mohácsi Andrea
            </h1>
            <h5 className="text-sm text-gray-600">
              Hidak Önmagunkhoz
            </h5>
          </div> */}
          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl font-semibold tracking-wide">
              Hidak Önmagunkhoz
            </h1>
            <h5 className="text-sm font-semibold normal-case text-gray-500 tracking-wider">
              MOHÁCSI ANDREA szakmai oldala
            </h5>
          </div>
        </Link>

        {/* RIGHT: Navigation */}
        <nav>
          <ul className="flex gap-8 text-gray-700 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "text-gray-700 hover:text-teal-800"
                }
              >
                Főoldal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/individual"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "text-gray-700 hover:text-teal-800"
                }
              >
                Egyéni
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/group"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "text-gray-700 hover:text-teal-800"
                }
              >
                Csoportos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/latest"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "text-gray-700 hover:text-teal-800"
                }
              >
                Aktuális
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "text-gray-700 hover:text-teal-800"
                }
              >
                Rólam
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "text-gray-700 hover:text-teal-800"
                }
              >
                Kapcsolat
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

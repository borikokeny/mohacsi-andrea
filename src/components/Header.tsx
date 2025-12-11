import { Link, NavLink } from "react-router-dom";
import Logo from "../images/Logo.png";

export default function Header() {
  return (
    <header className="bg-white font-aboreto shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4">
        <Link to="/" className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="w-16 logo ml-3" />
        </Link>
        <Link to="/" className="text-xl font-semibold text-primary">
          <h1>Mohácsi Andrea</h1>
        </Link>
        {/* NAV LINKS */}
        <nav className="flex gap-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            Főoldal
          </NavLink>

          <NavLink
            to="/individual"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            Egyéni
          </NavLink>
          <NavLink
            to="/group"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            Csoportos
          </NavLink>
          <NavLink
            to="/latest"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            Aktuális
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            Rólam
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            Kapcsolat
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        {/* LOGO */}
        <Link to="/" className="text-xl font-semibold text-primary">
          Mohácsi Andrea
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
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            Rólam
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
            to="/about"
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

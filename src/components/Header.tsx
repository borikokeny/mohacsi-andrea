import { Link, NavLink } from "react-router-dom";
import Logo from "../images/LOGO_black.jpg";
import Logo_color from "../images/LOGO_small.jpg";
import Logo_orig from "../images/Logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* LEFT: Logo + Text */}
        <div className="flex items-center gap-6">
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
        </div>

        {/* <nav className="border-t border-gray-300">
         <div className="max-w-6xl mx-auto px-4 flex justify-between text-sm py-3">

          <NavLink to="/" className="hover:text-primary">
             Főoldal
           </NavLink>

           <NavLink to="/individual" className="hover:text-primary">
             Egyéni
           </NavLink>

           <NavLink to="/group" className="hover:text-primary">
             Csoportos
           </NavLink>

          <NavLink to="/latest" className="hover:text-primary">
            Aktuális
           </NavLink>

           <NavLink to="/about" className="hover:text-primary">
             Rólam
           </NavLink>

           <NavLink to="/contact" className="hover:text-primary">
             Kapcsolat
           </NavLink>

         </div>
      </nav> */}

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

// import { Link, NavLink } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="bg-[#f4f1ea] font-aboreto">

//       {/* TOP ANNOUNCEMENT BAR */}
//       <div className="bg-[#c8bfa7] text-center text-xs py-2 tracking-wide">
//         CSOPORTOS & EGYÉNI FOGLALKOZÁSOK
//       </div>

//       {/* LOGO ROW */}
//       <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-center">

//         {/* EMPTY SPACE (bal oldal egyensúlyhoz) */}
//         {/* <div className="w-32"></div> */}

//         {/* LOGO / TITLE */}
//         <Link to="/" className="text-center">
//           <h1 className="text-3xl tracking-wide">Mohácsi Andrea</h1>
//           <p className="text-xs tracking-[0.2em] mt-1 text-gray-500">
//             Integrál szemléletű mentálhigiénés stúdió
//           </p>
//         </Link>

//         {/* CLIENT BUTTON */}
//         {/* <button className="border border-gray-500 rounded-full px-5 py-2 text-sm hover:bg-gray-200 transition">
//           Client Portal
//         </button> */}

//       </div>

//       {/* NAVBAR */}
//       <nav className="border-t border-gray-300">
//         <div className="max-w-6xl mx-auto px-4 flex justify-between text-sm py-3">

//           <NavLink to="/" className="hover:text-primary">
//             Főoldal
//           </NavLink>

//           <NavLink to="/individual" className="hover:text-primary">
//             Egyéni
//           </NavLink>

//           <NavLink to="/group" className="hover:text-primary">
//             Csoportos
//           </NavLink>

//           <NavLink to="/latest" className="hover:text-primary">
//             Aktuális
//           </NavLink>

//           <NavLink to="/about" className="hover:text-primary">
//             Rólam
//           </NavLink>

//           <NavLink to="/contact" className="hover:text-primary">
//             Kapcsolat
//           </NavLink>

//         </div>
//       </nav>

//     </header>
//   );
// }

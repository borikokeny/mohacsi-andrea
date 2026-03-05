import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#f4f1ea] font-aboreto">

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#c8bfa7] text-center text-xs py-2 tracking-wide">
        CSOPORTOS & EGYÉNI FOGLALKOZÁSOK
      </div>

      {/* LOGO ROW */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-center">

        {/* EMPTY SPACE (bal oldal egyensúlyhoz) */}
        {/* <div className="w-32"></div> */}

        {/* LOGO / TITLE */}
        <Link to="/" className="text-center">
          <h1 className="text-3xl tracking-wide">Mohácsi Andrea</h1>
          <p className="text-xs tracking-[0.2em] mt-1 text-gray-500">
            Integrál szemléletű mentálhigiénés stúdió
          </p>
        </Link>

        {/* CLIENT BUTTON */}
        {/* <button className="border border-gray-500 rounded-full px-5 py-2 text-sm hover:bg-gray-200 transition">
          Client Portal
        </button> */}

      </div>

      {/* NAVBAR */}
      <nav className="border-t border-gray-300">
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
      </nav>

    </header>
  );
}
// import { Link, NavLink } from "react-router-dom";
// // import Logo from "../images/Logo.png";

// export default function Header() {
//   return (
//     <header className="bg-white font-aboreto shadow-sm sticky top-0 z-50">
//       <section className="max-w-6xl mx-auto px-4 py-4 flex flex-col items-center">

//         {/* TITLE */}
//         <Link to="/" className="text-2xl font-semibold text-primary text-center">
//           <h1>Mohácsi Andrea</h1>
//           <hr className="mt-2 border-primary w-32 mx-auto" />
//         </Link>

//         {/* NAV */}
//         <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium mt-4">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? "text-primary font-semibold" : "hover:text-primary"
//             }
//           >
//             Főoldal
//           </NavLink>

//           <NavLink
//             to="/individual"
//             className={({ isActive }) =>
//               isActive ? "text-primary font-semibold" : "hover:text-primary"
//             }
//           >
//             Egyéni
//           </NavLink>

//           <NavLink
//             to="/group"
//             className={({ isActive }) =>
//               isActive ? "text-primary font-semibold" : "hover:text-primary"
//             }
//           >
//             Csoportos
//           </NavLink>

//           <NavLink
//             to="/latest"
//             className={({ isActive }) =>
//               isActive ? "text-primary font-semibold" : "hover:text-primary"
//             }
//           >
//             Aktuális
//           </NavLink>

//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? "text-primary font-semibold" : "hover:text-primary"
//             }
//           >
//             Rólam
//           </NavLink>

//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? "text-primary font-semibold" : "hover:text-primary"
//             }
//           >
//             Kapcsolat
//           </NavLink>
//         </nav>

//       </section>
//     </header>
//   );
// }

// export default function Header() {
//   return (
//     <header className="bg-white font-aboreto shadow-sm sticky top-0 z-50">
//       <section className="">
// <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4">
//         {/* <Link to="/" className="flex-shrink-0">
//           <img src={Logo} alt="Logo" className="w-16 logo ml-3" />
//         </Link> */}
//         <Link to="/" className="text-xl font-semibold text-primary">
//           <h1>Mohácsi Andrea</h1>
//           <hr />
//         </Link>
//         {/* NAV LINKS */}

//       </div>
//       <div>        <nav className="flex gap-6 text-sm font-medium">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? "text-primary font-semibold" : "hover:text-primary"
//             }
//           >
//             Főoldal
//           </NavLink>

//           <NavLink
//             to="/individual"
//             className={({ isActive }) =>
//               isActive ? "text-primary font-semibold" : "hover:text-primary"
//             }
//           >
//             Egyéni
//           </NavLink>
//           <NavLink
//             to="/group"
//             className={({ isActive }) =>
//               isActive ? "text-primary font-semibold" : "hover:text-primary"
//             }
//           >
//             Csoportos
//           </NavLink>
//           <NavLink
//             to="/latest"
//             className={({ isActive }) =>
//               isActive ? "text-primary font-semibold" : "hover:text-primary"
//             }
//           >
//             Aktuális
//           </NavLink>

//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? "text-primary font-semibold" : "hover:text-primary"
//             }
//           >
//             Rólam
//           </NavLink>

//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? "text-primary font-semibold" : "hover:text-primary"
//             }
//           >
//             Kapcsolat
//           </NavLink>
//         </nav></div>
//       </section>
      
//     </header>
//   );
// }

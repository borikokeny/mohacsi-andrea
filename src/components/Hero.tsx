import { Link } from "react-router-dom";
import Stua_med_sofa from "../images/Stua_med_sofa.jpg";
import Sofa_1 from "../images/Sofa_1.jpg";
import Sofa_2 from "../images/Sofa_2.jpg";
import Mountains from "../images/Mountains.jpg";
import Round_leafs from "../images/Round_leafs.jpeg";
import Trans_line_logo from "../images/Trans_line_logo.png";
import Trans_line_logo_strong from "../images/Trans_line_logo_strong.png";
import Trans_line_logo_2 from "../images/Trans_line_logo_2.png";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[100vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${Round_leafs})`,
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>

      {/* content */}
      <div className="relative text-center text-white max-w-2xl px-4">
        <img src={Trans_line_logo_2} alt="Line Logo" className="w-24 invert mx-auto mb-4 brightness-200 contrast-200 pb-4" />
        <h2 className="text-4xl md:text-5xl font-light leading-tight">
          Integrál szemléletű mentálhigiénés stúdió
        </h2>

        <Link to="/about" className="inline-block mt-6 bg-white text-gray-800 px-6 py-3 rounded-full text-sm hover:bg-gray-200 transition">
          Rólam bővebben
        </Link>
      </div>
    </section>
  );
}
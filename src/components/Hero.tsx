import { Link } from "react-router-dom";
import Stua_med_sofa from "../images/Stua_med_sofa.jpg";
import Sofa_1 from "../images/Sofa_1.jpg";
import Beach from "../images/Beach.jpg";
import Forest from "../images/Forest_light.jpg";
import Sofa_2 from "../images/Sofa_2.jpg";
import Mandala_1 from "../images/Mandala_4.jpg";
import Beige_sofa from "../images/Beige_sofa.jpg";
import Green_sofa from "../images/Green-sofa.jpg";
import Teal_sofa from "../images/Teal_sofa.jpg";
import Mountains from "../images/Mountains.jpg";
import Plant from "../images/Plant.jpg";
import Round_leafs from "../images/Round_leafs.jpeg";
import Trans_line_logo from "../images/Trans_line_logo.png";
import Trans_line_logo_strong from "../images/Trans_line_logo_strong.png";
import Trans_line_logo_2 from "../images/Trans_line_logo_2.png";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[100vh] bg-cover bg-center flex items-start justify-center pt-16"
      style={{
        backgroundImage: `url(${Green_sofa})`,
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>

      {/* content */}
      <div className="relative text-center text-white max-w-2xl pe-12">
        {/* <img src={Trans_line_logo_2} alt="Line Logo" className="w-24 invert mx-auto mb-4 brightness-200 contrast-200 pb-4" /> */}
        <h2 className="text-4xl md:text-5xl font-light leading-tight">
          Biztonságos tér a valódi változáshoz
        </h2>
        <br />
        <p>
          Egyéni és csoportos folyamatok azoknak, akik szeretnének jobban kapcsolódni önmagukhoz, tisztábban érezni, mire van szükségük és megtanulni képviselni magukat kapcsolataikban.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 bg-white text-gray-800 px-6 py-3 rounded-full text-sm hover:bg-gray-200 transition"
        >
          Időpontfoglalás
        </Link>
      </div>
    </section>
  );
}

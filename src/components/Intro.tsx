import { Link } from "react-router-dom";
import Stuavegg from "../images/Stuavegg.jpg";

export default function Intro() {
  return (
    <section className="bg-[#f4f1ea] ">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div>
          <h3 className="text-2xl mb-6 tracking-wide">
            Találd meg a gyógyuláshoz vezető utadat
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Egyéni és csoportos folyamatok kísérése integratív szemléletben, biztonságban kapcsolódva.
Megtartó tér az önismerethez, kapcsolódáshoz és belső változáshoz. Megtartó tér önmagad felé.
          </p>

          <Link to="/booking" className="inline-block border border-gray-500 rounded-full px-6 py-3 text-sm hover:bg-gray-200 transition">
            Időpontfoglalás
          </Link>
        </div>

        {/* IMAGE */}
        <div className="relative -mr-20">
          <img
            src={Stuavegg}
            alt="therapy space"
            className="shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
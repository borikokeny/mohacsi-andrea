import { Link } from "react-router-dom";
import Stuavegg from "../images/Stuavegg.jpg";

export default function Intro() {
  return (
    <section className="bg-[#f4f1ea] ">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div>
          {/* <h3 className="text-2xl mb-6 tracking-wide">
            Hogyan dolgozom?
          </h3> */}
          <h3 className="text-2xl mb-6 tracking-wide">
            Miben tudlak támogatni?
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            A küldetésem, hogy biztonságos teret tartsak és jelenléttel kísérjem azokat, akik elakadtak, kérdéseken, figyelmen és lassításon keresztül, hogy újra kapcsolódni tudjanak önmagukhoz, a testükhöz, az érzéseikhez és a belső történeteikhez, ezáltal érjék el a kiegyensúlyozottságot.
          </p>

          <Link to="/about" className="inline-block border border-gray-500 rounded-full px-6 py-3 text-sm hover:bg-gray-200 transition">
            Rólam bővebben
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
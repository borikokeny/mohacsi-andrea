import Stua_med_sofa from "../images/Stua_med_sofa.jpg";
import Profile from "../images/MG_1649-2-Edit--2_optimized_200.jpg";
import FAQ from "../components/FAQ";

export default function Individual() {
  return (
    <section className="max-w-6xl mx-auto px-0 sm:px-6 sm:py-8 sm:space-y-8">
      {/* HERO TEXT + IMAGE */}
      <div className="grid md:grid-cols-2 sm:gap-12 items-stretch">
        <div className="h-full">
          <img
            src={Profile}
            alt="stua"
            className="w-full h-full object-cover max-h-[480px] rounded-none md:rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col justify-center bg-[#f4f6f5] p-10">
          <h3 className="text-2xl font-serif text-[#2f6f6b] mb-6 tracking-wide">
            Egyéni folyamatok
          </h3>

          <p className="leading-relaxed mb-6 text-[#444]">
            Az egyéni munka során olyan biztonságos teret kínálok, ahol
            lehetőség van a belső folyamatok megértésére, az érzelmi és testi
            jelzések felismerésére, valamint a nehéz élethelyzetek
            átgondolására.
          </p>

          <p className="leading-relaxed mb-6 text-[#444]">
            A közös munka nem gyors megoldásokra épül, hanem arra, hogy a kliens
            fokozatosan kapcsolatba kerülhessen azokkal a belső tartalmakkal,
            amelyek eddig elkerülhetetlennek vagy megterhelőnek tűntek.
          </p>

          <p className="leading-relaxed text-[#444]">
            Integratív szemlélettel dolgozom, amelyben helyet kapnak a
            beszélgetésen alapuló megközelítések, az imaginatív elemek és a test
            jelzéseinek figyelembevétele is.
          </p>
        </div>
      </div>

      {/* SEGÍTSÉG BLOKK */}
      <div className="grid md:grid-cols-3 gap-12 bg-[#e6efee] p-12 ">
        <div className="flex items-center">
          <p className="leading-relaxed text-[#444]">
            Az egyéni kísérés azoknak szól, akik szeretnének elmélyülni
            önismereti folyamataikban, és nyitottak arra, hogy ne elkerülni,
            hanem megtartva feldolgozni próbálják életük nehézségeit.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-serif text-[#2f6f6b] mb-4">
            Amiben segíthetek
          </h3>

          <ul className="space-y-2 text-[#444]">
            <li>• elakadások, belső feszültségek</li>
            <li>• érzelmi túlterheltség vagy üresség</li>
            <li>• kapcsolati minták átgondolása</li>
            <li>• élethelyzeti válságok kísérése</li>
            <li>• önreflexió és belső stabilitás erősítése</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center">
          <p className="leading-relaxed mb-4 text-[#444]">
            Az egyéni folyamat olyan tér, ahol nem kell erősnek lenned, nem kell
            mindent értened, és nem kell készen lenned.
          </p>

          <p className="leading-relaxed text-[#444]">
            Sokan érkeznek hozzám érzelmi elhanyagolással, korai felnőtté
            válással vagy olyan múltbeli tapasztalatokkal, amelyek ma is
            hatással vannak a kapcsolataikra és önértékelésükre.
          </p>
        </div>
      </div>

      {/* ZÁRÓ BLOKK */}
      <div className="grid md:grid-cols-3 gap-12 bg-white p-12 rounded-lg items-start shadow-sm">
        <div className="flex flex-col">
          <h3 className="text-xl font-serif text-[#2f6f6b] mb-4">
            A közös munka során
          </h3>

          <ul className="space-y-2 text-[#444]">
            <li>• megtartó jelenléttel kísérlek</li>
            <li>• segítem az egészséges felnőtt részek megerősödését</li>
            <li>
              • támogatlak abban, hogy belső támaszaid stabilabbá váljanak
            </li>
          </ul>
        </div>

        <div className="text-[#444]">
          <p className="leading-relaxed mb-4">
            Nem megjavítani szeretnélek. Hanem melletted lenni abban, ami van,
            és támogatni abban, ami formálódni szeretne.
          </p>

          <p className="leading-relaxed">
            Nem ígérek gyors megoldást. De ott vagyok veled abban, amiben éppen
            vagy.
          </p>
        </div>

        <div className="h-full">
          <img
            src={Stua_med_sofa}
            alt="stua med sofa"
            className="w-full h-full object-cover max-h-[480px] rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#4f8f8a]/20"></div>

      {/* FAQ */}
      <div className="max-w-3xl mt-10 mx-auto">
        <FAQ />
      </div>
    </section>
  );
}

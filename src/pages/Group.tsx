import { Link } from "react-router-dom";
import MintChecklist from "../components/MintChecklist";
import GroupImage from "../images/Group_hero.jpeg";
import FAQGroup from "../components/FAQGroup";

export default function Group() {
  return (
    <>
      <section className="relative h-[420px] overflow-hidden">
        {/* háttér kép */}
        <img
          src={GroupImage}
          alt="group session"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* teal overlay */}
        <div className="absolute inset-0 bg-[#2f6f6b]/40"></div>

        {/* content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-4">
                Lásd meg életed mintáit, és alakítsd őket tudatosan
              </h1>

              <div className="h-px bg-white/40 w-24 mb-6"></div>

              <Link
                to="/latest"
                className="inline-block bg-white text-[#2f6f6b] px-6 py-3 rounded-full chip"
              >
                Aktuális csoportok
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-serif text-[#2f6f6b]">
            Hidak Önmagunkhoz
          </h2>

          <p className="text-[#555]">Hétvégi önismereti csoportok Budapesten</p>

          <Link to="/latest" className="inline-block text-[#2f6f6b] underline">
            Aktuális csoportjaink →
          </Link>

          <p className="text-[#444] leading-relaxed">
            Hogyan igazodunk el önmagunkban, kapcsolatainkban, életünkben, a
            világban? <br /> Milyen belső térképek szerint haladunk – és mikor
            érezzük, hogy új irányra van szükségünk?
          </p>
        </div>
      </section>
      <section className="bg-[#f4f6f5] py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-[#444] leading-relaxed">
          <p>
            Csoportjaink ebben az úton levésben kísérnek – hogy ne csak
            elindulj, de meg is érkezz önmagadhoz. A csoport biztonságos,
            megtartó tér, ahol lehetőség nyílik új minták és megoldások
            kipróbálására.
          </p>

          <p>
            A csoport olyan tér, ahol nem vagy egyedül a történeteddel. A
            kapcsolódás, a tükröződés és a közös jelenlét segít abban, hogy
            láthatóvá válj – a saját tempódban, biztonságos keretek között.
          </p>

          <p>
            A folyamat során lehetőséged van arra, hogy új módon találkozz
            önmagaddal, és mélyebb megértést szerezz a működésedről.
          </p>

          <p>
            A folyamatot biztonságos, elfogadó keretek között tartom, ahol
            minden érzésnek, állapotnak és tapasztalatnak helye van.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-2xl font-serif text-[#2f6f6b] mb-10 text-center">
            A folyamat
          </h3>

          <ol className="space-y-6 text-[#444] leading-relaxed">
            <li>
              <strong>1.</strong> A csoportba való bekerülést díjmentes
              személyes egyéni beszélgetés előzi meg: ismerkedés, kérdések
              tisztázása, közös munka előkészítése.
            </li>
            <li>
              <strong>2.</strong> Az első két alkalom nyitott, a második
              alkalmon történik az elköteleződés, utána zárt csoportként
              működünk.
            </li>
            <li>
              <strong>3.</strong> A találkozások csoporttól függően 2-4 hetente
              zajlanak, fokozatosan mélyülő önismereti folyamattal.
            </li>
            <li>
              <strong>4.</strong> Az utolsó alkalmon lezárjuk a folyamatot és
              összefoglaljuk az együtt végzett munkát.
            </li>
          </ol>
        </div>
      </section>
      <section className="bg-[#e6efee] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-serif text-[#2f6f6b] mb-8 text-center">
            Várunk téged, ha
          </h3>
          <div className="ps-8">
            <MintChecklist />
          </div>
        </div>
      </section>
      <div className="max-w-3xl mx-auto">
        <FAQGroup />
      </div>
      <section className="bg-[#4f8f8a] text-white text-center py-24">
        <div className="max-w-xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-serif mb-6">
            Ha úgy érzed, megszólít ez az út, szeretettel várunk.
          </h3>

          <Link
            to="/latest"
            className="inline-block bg-white text-[#2f6f6b] px-6 py-3 rounded-full hover:bg-[#f4f6f5] transition"
          >
            Aktuális csoportok
          </Link>
        </div>
      </section>
    </>
  );
}

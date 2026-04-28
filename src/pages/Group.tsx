// import { client } from "../services/contentful";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MintChecklist from "../components/MintChecklist";

import Pafrany from "../images/Pafrany.jpg";
import Folyo from "../images/Folyo.jpg";
import Erdo from "../images/Erdo.jpg";
import Csillag from "../images/kiscsillag.png";
import GroupImage from "../images/Group.jpg";
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
                className="inline-block bg-white text-[#2f6f6b] px-6 py-3 rounded-full"
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
            világban? <br /> Milyen belső térképek szerint haladunk – és mikor érezzük,
            hogy új irányra van szükségünk?
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
              <strong>4.</strong> Az utolsó alkalmon lezárjuk a folyamatot és összefoglaljuk az
               együtt végzett munkát.
            </li>
          </ol>
        </div>
      </section>
      <section className="bg-[#e6efee] py-20">
  <div className="max-w-4xl mx-auto px-6">

    <h3 className="text-2xl font-serif text-[#2f6f6b] mb-8 text-center">
      Várunk téged, ha
    </h3>

    <MintChecklist />

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

    // <div className="max-w-6xl mx-auto">
    //   {/* ---------------- HERO SZEKCIÓ ---------------- */}
    //   <div className="relative h-96 rounded-md overflow-hidden mb-10">
    //     <div
    //       className="absolute inset-0 bg-cover bg-center"
    //       style={{ backgroundImage: `url(${GroupImage})` }}
    //     />

    //     <div className="absolute inset-0 bg-black/30" />

    //     <div className="relative h-full flex items-center px-8">
    //       <div className="max-w-xl">
    //         <h1 className="text-4xl font-extrabold text-white mb-3">
    //           Lásd meg életed mintáit és alakítsd őket tudatosan!
    //         </h1>

    //         <div className="h-0.5 bg-white/40 w-100 mb-4" />

    //         {/* <h2 className="text-white text-lg leading-relaxed">
    //           A pszichodráma hatékony út az önismerethez, a fejlődéshez és a
    //           belső harmónia megteremtéséhez.
    //         </h2> */}
    //       </div>
    //     </div>
    //   </div>

    //   {/* ---------------- LEÍRÁS ---------------- */}
    //   <section className="space-y-4 mb-10">
    //     <h1 className="text-4xl font-semibold">Hidak Önmagunkhoz</h1>
    //     <h2 className="text-2xl font-semibold">
    //       Hétvégi Önismereti Csoportok Budapesten
    //     </h2>

    //     {/* <h3 className="text-lg">
    //       180 órás, 18 alkalmas hétvégi önismereti csoportok Budapesten
    //     </h3> */}
    //     <div className="mt-4">
    //       <a
    //         href="/latest"
    //         className=" text-blue-600 underline hover:text-blue-800"
    //       >
    //         Aktuális csoportjaink
    //       </a>
    //     </div>

    //     <p>
    //       Hogyan igazodunk el önmagunkban, kapcsolatainkban, életünkben, a
    //       világban? Milyen belső térképek szerint haladunk – és mikor érezzük,
    //       hogy új irányra, új utakra van szükségünk?
    //     </p>

    //     <p>
    //       Csoportjaink ebben az úton levésben kísérnek – hogy ne csak elindulj,
    //       de meg is érkezz önmagadhoz. A csoport biztonságos, megtartó tér, ahol
    //       lehetőség nyílik új minták és megoldások kipróbálására.
    //     </p>
    //     <p>
    //       A csoport olyan tér, ahol nem vagy egyedül a történeteddel. A
    //       kapcsolódás, a tükröződés és a közös jelenlét segít abban, hogy
    //       láthatóvá válj – a saját tempódban, biztonságos keretek között.
    //     </p>
    //     <p>
    //       A csoport olyan tér, ahol nem vagy egyedül a történeteddel. A
    //       kapcsolódás, a tükröződés és a közös jelenlét segít abban, hogy
    //       láthatóvá válj – a saját tempódban, biztonságos keretek között.
    //     </p>
    //     <p>
    //       A folyamatot biztonságos, elfogadó keretek között tartom, ahol minden
    //       érzésnek, állapotnak és tapasztalatnak helye van.
    //     </p>

    //     {/* <p>
    //       <strong>Időbeosztás: </strong> 9:00–18:00
    //     </p> */}
    //     <p>
    //       <strong>Helyszín: </strong> Budapest (jól megközelíthető helyen)
    //     </p>
    //     <p>
    //       <strong>Csoportok: </strong> 10–12 fős csoportok, előzetes ismeret nem
    //       szükséges.
    //     </p>
    //   </section>

    //   {/* ---------------- FOLYAMAT LISTA ---------------- */}
    //   <section className="mb-10">
    //     <h3 className="font-semibold mb-4 text-xl">Folyamat:</h3>

    //     <ol className="space-y-4">
    //       <li className="flex gap-3">
    //         <span className="text-heromenta font-bold">1.</span>
    //         <p>
    //           A csoportba való bekerülést díjmentes személyes egyéni beszélgetés
    //           előzi meg: ismerkedés, kérdések tisztázása, közös munka
    //           előkészítése.
    //         </p>
    //       </li>

    //       <li className="flex gap-3">
    //         <span className="text-heromenta font-bold">2.</span>
    //         <p>
    //           Az első két alkalom nyitott, a második alkalmon történik az
    //           elköteleződés, utána zárt csoportként működünk.
    //         </p>
    //       </li>

    //       <li className="flex gap-3">
    //         <span className="text-heromenta font-bold">3.</span>
    //         <p>
    //           A találkozások csoporttól függően 2-4 hetente zajlanak,
    //           fokozatosan mélyülő önismereti folyamattal.
    //         </p>
    //       </li>

    //       <li className="flex gap-3">
    //         <span className="text-heromenta font-bold">4.</span>
    //         <p>
    //           Az utolsó alkalmon lezárjuk a folyamatot és összefoglaljuk az
    //           együtt végzett munkát.
    //         </p>
    //       </li>
    //     </ol>
    //   </section>

    //   {/* ---------------- KINEK AJÁNLJUK ---------------- */}
    //   <section className="mb-10">
    //     <h3 className="font-semibold mb-4">Várunk téged, ha</h3>
    //     <MintChecklist />
    //   </section>

    //   {/* ---------------- JELENTKEZÉS ---------------- */}
    //   <section className="mb-12">
    //     <h3 className="font-semibold mb-2">Jelentkezés:</h3>
    //     <div className="mt-2">
    //       <a
    //         href="/latest"
    //         className=" text-blue-600 underline hover:text-blue-800"
    //       >
    //         Aktuális csoportjaink
    //       </a>
    //     </div>

    //     <ul className="mt-3 list-disc list-inside space-y-1">
    //       <li>e-mail: terkeponmagamhoz@gmail.com</li>
    //       <li>telefon: Mohácsi Andrea – 30/383-9838</li>
    //       <li>
    //         Ha emailt írsz, adj meg pár információt magadról és feltétlenül
    //         telefonszámot.
    //       </li>
    //       <li>
    //         Kövess minket{" "}
    //         <a
    //           href="https://www.facebook.com/profile.php?id=100090615291518"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="font-quicksand text-blue-600 hover:underline"
    //         >
    //           Facebook
    //         </a>{" "}
    //         oldalunkon a friss információkért!
    //       </li>
    //       <li>
    //         Ha szeretnél a hírlevelünkre feliratkozni, kattints{" "}
    //         <a
    //           href="/contact"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="font-quicksand text-blue-600 hover:underline"
    //         >
    //           ide
    //         </a>{" "}
    //         !
    //       </li>
    //     </ul>

    //   </section>

    //   <section className="mt-4">
    //     <p>
    //       <strong>Gyakran ismételt kérdések</strong>
    //     </p>
    //     <div className="ms-6">
    //       <li>Lemondási feltételek</li>
    //       <li>Fizetési módok</li>
    //       <li>Bővebben a pszihodrámáról</li>
    //     </div>
    //   </section>
    // </div>
  );
}

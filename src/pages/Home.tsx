// import { client } from "../services/contentful";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { useEffect, useState } from "react";
// import Hero from "../components/Hero";
// import Intro from "../components/Intro";
// import Stua_med_sofa from "../images/Stua_med_sofa.jpg";
// import Stua from "../images/Stua.jpg";
// import { Link } from "react-router-dom";
// import Plant from "../images/Plant.jpg";
// import Portre from "../images/Portre.jpg";
// import Part from "../images/Part.jpg";
// import Pafrany from "../images/Pafrany.jpg";
// import Folyo from "../images/Folyo.jpg";
// import Erdo from "../images/Erdo.jpg";
// import Hullam from "../images/Hullam.jpg";
// import Terepauta from "../images/terepauta.jpg";
// import Csillag from "../images/kiscsillag.png";

// export default function Home() {
//   const [page, setPage] = useState<any>(null);

//   useEffect(() => {
//     const fetchPage = async () => {
//       const entries = await client.getEntries({
//         content_type: "page",
//         "fields.slug": "fooldal", // a te valós slug értéked
//       });

//       if (entries.items.length > 0) {
//         setPage(entries.items[0]);
//       }
//     };

//     fetchPage();
//   }, []);

//   if (!page) return <div>Loading...</div>;

//   return (
//     <section

//     >
//      <main>
//       <Hero />
//       <Intro />
//     </main>
//     </section>
//   );

// //   return (
// //     <div className="max-w-6xl mx-auto px-4">
// //       {/* <h1>{page.fields.heroTitle}</h1>
// //       {documentToReactComponents(page.fields.tartalom)} */}
// //       <div className="flex flex-col md:flex-row">
// //           <div className=" bg-heroseablue w-1/2 flex justify-center items-center p-12">
// //             <img
// //               src={Portre}
// //               alt="portrait"
// //               className="w-full h-full object-cover"
// //             />
// //         </div>
// //         {/* <div className="col-6 w-1/2">
// //           <img src={Plant} alt="" />
// //         </div> */}
// //         <div className="col-6 bg-heromenta w-1/2 flex flex-col items-center justify-center text-center p-8">
// //           {/* <h1 className="text-2xl">Hidak Önmagunkhoz</h1> */}
// //           <img src={Csillag} alt="" className="w-16 mb-3"/>
// //           <h1 className="text-2xl">Mohácsi Andrea</h1>
// //           <h2 className="mb-6">integrál szemléletű mentálhigiénés szakember</h2>
// //           {/* <p className="">
// //             Csoportos és egyéni foglalkozásaink segítségével kapcsolódhatsz
// //             saját életedhez, ránézhetsz élethelyzeteidre. Mindezt egy közösen
// //             létrehozott, biztonságos térben
// //           </p> */}
// //           {/* <p className="">{documentToReactComponents(page.fields.tartalom)}</p> */}
// //           {/* <p className="mb-8">
// //             "Életünk során bármikor kerülhetünk olyan élethelyzetbe, amikor úgy
// //             érezzük, egyedül nehéz megbirkózni problémáinkkal, képtelenek
// //             vagyunk objektíven rálátni saját magunkra, felgöngyölíteni a
// //             miérteket. Amennyiben úgy érzed, a négyszemközti beszélgetés
// //             segítene problémáid leküzdésében, várlak sok szeretettel egy egyéni
// //             segítő beszélgetésre." (Simon Dóri)
// //           </p> */}
// //           <p className="mb-8">
// //             Munkám középpontjában az áll, hogy az ember újra kapcsolatba kerülhessen önmagával - nem idealizált, nem „megjavított”, hanem valóságos formájában.
// // Azokkal dolgozom, akik érzik, hogy valami elakadt, de nem gyors megoldásokat keresnek, hanem mélyebb megértést, belső stabilitást és biztonságos kísérést.
// // Integratív szemlélettel kísérem a folyamatokat, ahol helye van az érzelmeknek, a test jelzéseinek, a belső történeteknek és a csendnek is. Küldetésem, hogy hidakat építsek a belső világunk szétszakadt részei között - mert az egészség nem tökéletességet, hanem kapcsolódást jelent.
// //           </p>
// //           <Link to="/individual" className="border-2 w-80 p-2 px-4 mt-3"><strong>Tudj meg többet az egyéni foglalkozásról &gt;</strong>
// //           </Link>
// //         </div>
// //       </div>
// //       <div className="flex flex-col md:flex-row mb-3">
// //         <div className="col-6 bg-heromenta w-1/2 flex flex-col items-center justify-center text-center p-8">
// //           {/* <h1 className="text-2xl">Hidak Önmagunkhoz</h1> */}
// //           <img src={Csillag} alt="" className="w-16 mb-3"/>
// //           <h1 className="text-4xl mb-2">{page.fields.heroTitle}</h1>

// //           <h2 className="mb-8">Pszihodráma Önismereti Csoportok</h2>
// //             <p className="">
// //             Csoportos foglalkozásaink segítségével kapcsolódhatsz
// //             saját életedhez, ránézhetsz élethelyzeteidre. Mindezt egy közösen
// //             létrehozott, biztonságos térben
// //           </p>
// //           <Link to="/group" className="border-2 w-80 p-2 px-4 mt-3"><strong>Tudj meg többet a csoportokról &gt;</strong>
// //           </Link>
// //           {/* <p className="">{documentToReactComponents(page.fields.tartalom)}</p> */}
// //         </div>
// //         <div className="col-6 w-1/2">
// //           <img src={Plant} alt="" />
// //         </div>
// //       </div>

// //       <section className="w-5/6 mx-auto bg-gray-100 py-16 px-4">
// //         <div className="max-w-3xl mx-auto text-center">
// //           <p className="text-gray-600 italic mb-2">Rólam</p>

// //           <h2 className="text-3xl font-semibold mb-6">Mohácsi Andrea</h2>

// //           <p className="text-gray-700 leading-relaxed mb-10">
// //             Van benned egy belső térkép. Néha elmosódottak rajta az utak, máskor
// //             tisztán kirajzolódik, merre tovább. Van, hogy új ösvényeket keresel,
// //             máskor eltévedsz a megszokott minták között. Hogyan igazodunk el
// //             önmagunkban, kapcsolatainkban, életünkben, a világban?
// //           </p>
// //           <Link to="/about" className="border-2 w-80 p-2 px-4 mt-3">
// //             Tovább &gt;
// //           </Link>

// //           {/* <p className="text-gray-500 mb-10">-----&gt;</p> */}

// //           <div className="flex justify-center mt-4">
// //             <img
// //               src={Terepauta}
// //               alt="Mohácsi Andrea"
// //               className="w-full max-w-md rounded-lg shadow-md object-cover"
// //             />
// //           </div>
// //         </div>
// //       </section>
// //       <div className="w-5/6 mx-auto flex flex-col md:flex-row justify-center gap-6 mt-4">
// //         <div className="bg-herogray md:w-1/3 w-full flex flex-col items-center justify-center text-center p-8 rounded">
// //           <h2 className="font-bold mb-3">EGYÉNI ÜLÉSEK</h2>
// //           <p className="mb-4">
// //             Biztonságos, személyre szabott tér, ahol saját belső folyamataidra
// //             figyelhetsz, és támogatást kapsz az életedben zajló helyzetek
// //             megértéséhez és átdolgozásához.
// //           </p>
// //           <Link
// //             to="/individual"
// //             className="bg-herodarkseablue text-white w-1/2 p-2 px-4 mt-3"
// //           >
// //             tovább &gt;
// //           </Link>
// //         </div>

// //         <div className="bg-heroturquoise md:w-1/3 w-full flex flex-col items-center justify-center text-center p-8 rounded">
// //           <h2 className="font-bold mb-3">ONLINE ÜLÉSEK</h2>
// //           <p className="mb-4">
// //             Rugalmasságot adó, biztonságos online találkozók, ahol ugyanúgy
// //             kapcsolódhatsz önmagadhoz és a kísérés folyamathoz, mintha
// //             személyesen találkoznánk.
// //           </p>
// //           <Link
// //             to="/individual"
// //             className="bg-herodarkseablue text-white w-1/2 p-2 px-4 mt-3"
// //           >
// //             tovább &gt;
// //           </Link>
// //         </div>

// //         <div className="bg-heroseablue md:w-1/3 w-full flex flex-col items-center justify-center text-center p-8 rounded">
// //           <h2 className="font-bold mb-3">ÖNISMERETI CSOPORTOK</h2>
// //           <p className="mb-4">
// //             Megosztó, elfogadó közösségi tér, ahol mások történetein és közös
// //             gyakorlatokon keresztül mélyebb rálátást szerezhetsz saját mintáidra
// //             és kapcsolódásaidra.
// //           </p>
// //           <Link
// //             to="/group"
// //             className="bg-herodarkseablue text-white w-1/2 p-2 px-4 mt-3"
// //           >
// //             tovább &gt;
// //           </Link>
// //         </div>
// //       </div>
// //       <section className="bg-gray-100 py-16 px-4">
// //         <h2 className="text-center italic text-xl mb-10">Módszereim</h2>

// //         <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //           {/* 1. Rogers */}
// //           <div className="bg-white shadow-sm">
// //             <img
// //               src={Plant}
// //               alt="Rogersi segítő beszélgetés"
// //               className="w-full h-32 object-cover"
// //             />
// //             <div className="p-6 text-center">
// //               <p className="text-xl">Rogersi segítő beszélgetés</p>
// //             </div>
// //           </div>

// //           {/* 2. Meseterápia */}
// //           <div className="bg-white shadow-sm">
// //             <img
// //               src={Hullam}
// //               alt="Meseterápia"
// //               className="w-full h-32 object-cover"
// //             />
// //             <div className="p-6 text-center">
// //               <p className="text-xl">Meseterápia</p>
// //             </div>
// //           </div>

// //           {/* 3. Testorientált módszerek */}
// //           <div className="bg-white shadow-sm">
// //             <img
// //               src={Part}
// //               alt="Testorientált módszerek"
// //               className="w-full h-32 object-cover"
// //             />
// //             <div className="p-6 text-center">
// //               <p className="text-xl">Testorientált módszerek</p>
// //             </div>
// //           </div>

// //           {/* 4. Családállítás */}
// //           <div className="bg-white shadow-sm">
// //             <img
// //               src={Pafrany}
// //               alt="Családállítás"
// //               className="w-full h-32 object-cover"
// //             />
// //             <div className="p-6 text-center">
// //               <p className="text-xl">Családállítás</p>
// //             </div>
// //           </div>

// //           {/* 5. Pszichodráma */}
// //           <div className="bg-white shadow-sm">
// //             <img
// //               src={Erdo}
// //               alt="Pszichodráma"
// //               className="w-full h-32 object-cover"
// //             />
// //             <div className="p-6 text-center">
// //               <p className="text-xl">Pszichodráma</p>
// //             </div>
// //           </div>

// //           {/* 6. Monodráma */}
// //           <div className="bg-white shadow-sm">
// //             <img
// //               src={Folyo}
// //               alt="Monodráma"
// //               className="w-full h-32 object-cover"
// //             />
// //             <div className="p-6 text-center">
// //               <p className="text-xl">Monodráma</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// }

import React from "react";
import { Link } from "react-router-dom";
import Portre from "../images/Portre.jpg";
import Mandala from "../images/Mandala_1.jpg";
import Plant from "../images/Plant.jpg";
import Stuavegg from "../images/Stuavegg.jpg";

export default function HomePage() {
  return (
    <main className="bg-[#F4F1EC] text-[#2F2F2F]">
      {/* HERO */}
      <section className="min-h-[35vh] md:h-[40vh] grid md:grid-cols-[2fr_1fr] items-center bg-gradient-to-br from-[#7fb7b2] via-[#5f9f9a] to-[#3f7f7b]">
        {/* BAL OLDAL – SZÖVEG */}
        <div className="px-6 md:px-12 lg:px-20 py-10 md:py-12 text-left">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-gray-900 max-w-xl">
            Biztonságos tér a valódi változáshoz
          </h1>

          <p className="text-base md:text-lg mb-8 leading-relaxed text-white/90 max-w-xl mt-3">
            Egyéni és csoportos folyamatok azoknak, akik szeretnének jobban
            kapcsolódni önmagukhoz, tisztábban érezni, mire van szükségük és
            megtanulni képviselni magukat kapcsolataikban.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/individual"
              className="bg-[#2f6f6b] text-white px-6 py-3 rounded-full hover:bg-[#275e5a] transition"
            >
              Egyéni folyamatok
            </Link>

            <Link
              to="/group"
              className="border border-white/60 text-white px-6 py-3 rounded-full hover:bg-white/10 transition"
            >
              Csoportos lehetőségek
            </Link>
          </div>
        </div>

        {/* JOBB OLDAL – KÉP */}
        <div className="h-[300px] md:h-full">
          <img
            src={Plant}
            alt="hero"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* SUPPORT */}
      <section className="bg-[#f4f6f5] py-20 px-6">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    
    <img src={Stuavegg} className="rounded-2xl shadow-md" />

    <div className="max-w-md">
      <h2 className="text-3xl font-serif mb-6">
        Miben tudlak támogatni
      </h2>

      <p className="mb-4 leading-relaxed text-[#555]">
        Azért dolgozom, hogy biztonságos teret tartsak és jelenléttel
        kísérjem azokat, akik elakadtak.
      </p>

      <p className="mb-4 leading-relaxed text-[#555]">
        Kérdéseken, figyelmen és lassításon keresztül segítem, hogy újra
        kapcsolódni tudj önmagadhoz – a testedhez, az érzéseidhez és a belső
        történeteidhez.
      </p>

      <p className="leading-relaxed text-[#555]">
        Így válik elérhetővé egy mélyebb kiegyensúlyozottság.
      </p>
    </div>
  </div>
</section>
      {/* <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-12 items-center">
        <img src={Stuavegg} className="rounded-2xl shadow-md" />
        <div>
          <h2 className="text-3xl font-serif mb-6">Miben tudlak támogatni</h2>
          <p className="mb-4 leading-relaxed">
            Azért dolgozom, hogy biztonságos teret tartsak és jelenléttel
            kísérjem azokat, akik elakadtak.
          </p>
          <p className="mb-4 leading-relaxed">
            Kérdéseken, figyelmen és lassításon keresztül segítem, hogy újra
            kapcsolódni tudj önmagadhoz – a testedhez, az érzéseidhez és a belső
            történeteidhez.
          </p>
          <p className="leading-relaxed">
            Így válik elérhetővé egy mélyebb kiegyensúlyozottság.
          </p>
        </div>
      </section> */}

      {/* ABOUT */}
      <section className="bg-white py-24 px-6">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">

    <div className="max-w-md">
      <h2 className="text-3xl font-serif mb-6">
        Bemutatkozás
      </h2>

      <p className="mb-6 leading-relaxed text-[#555]">
        Mohácsi Andrea vagyok, integrál szemléletű mentálhigiénés szakember...
      </p>

      <a href="/about" className="text-[#2f6f6b] underline">
        Rólam bővebben →
      </a>
    </div>

    <img
      src={Portre}
      alt="portrait"
      className="rounded-2xl shadow-md"
    />
  </div>
</section>
      {/* <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6">Bemutatkozás</h2>

            <p className="mb-6 leading-relaxed">
              Mohácsi Andrea vagyok, integrál szemléletű mentálhigiénés
              szakember, Metamorphoses meseterapeuta, pszichodráma vezető,
              Integrative Core Dynamics testorientált szakember,
              gyászcsoportvezető, családállító, integrál önismereti tanácsadó és
              még sokfelé jártam az úton, míg most ott vagyok, ahol találkozunk.
            </p>
            <a href="/about" className="text-[#7A9D96] underline">
              Rólam bővebben →
            </a>
          </div>
          <img src={Portre} alt="portrait" className="rounded-2xl shadow-md" />
        </div>
      </section> */}

      {/* HOW I WORK */}

<section className="bg-[#e6efee] py-20 px-6 text-center">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-3xl font-serif mb-12">
      Hogyan dolgozom?
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="p-6 bg-white rounded-2xl shadow-md">
        <p>
           A közös munka során nem megoldásokat kínálok, hanem egy olyan
                biztonságos keretet, ahol lehetőség van megérteni, mi történik
                belül, és hogyan kapcsolódik ez az élet aktuális élethelyzethez.
        </p>
      </div>

      <div className="p-6 bg-white rounded-2xl shadow-md">
        <p>
          A folyamatot közösen alakítjuk, a hangsúly azon van, hogy
                kialakuljon egy belsőbb kapcsolódás, amely hosszabb távon is
                támpontot jelenthet.
        </p>
      </div>

      <div className="p-6 bg-white rounded-2xl shadow-md">
        <p>
          Integratív szemléletben dolgozom. Ez azt jelenti, hogy nem
                egyetlen módszerre építek, hanem több megközelítés szemléletét
                kapcsolom össze annak érdekében, hogy a folyamat hozzád és az
                aktuális élethelyzetedhez igazodjon.
        </p>
      </div>

    </div>
  </div>
</section>



      {/* CTA */}
      <section className="text-center py-24 px-6 bg-[#5f9f9a] text-white/90">
  <div className="max-w-2xl mx-auto">

    <h2 className="text-2xl md:text-3xl font-serif mb-8 leading-relaxed">
      Ha úgy érzed, megszólít ez az út, szeretettel várlak.
    </h2>

    <Link
      to="/contact"
      className="inline-block bg-white text-[#2f6f6b] px-8 py-3 rounded-full hover:bg-[#f4f6f5] transition"
    >
      Kapcsolat
    </Link>

  </div>
</section>
      {/* <section className="text-center py-20 px-6 bg-[#008080] text-white">
        <h2 className="text-2xl md:text-3xl font-serif mb-6">
          Ha úgy érzed, megszólít ez az út, szeretettel várlak.
        </h2>
        <Link
          to="/contact"
          className="bg-white text-[#008080] px-6 py-3 rounded-full"
        >
          Kapcsolat
        </Link>
      </section> */}
    </main>
  );
}

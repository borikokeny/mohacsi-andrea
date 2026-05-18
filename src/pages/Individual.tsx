import Stua_med_sofa from "../images/Stua_med_sofa.jpg";
import Profile from "../images/MG_1649-2-Edit--2_optimized_200.jpg";
import FAQ from "../components/FAQ";

export default function Individual() {
  return (
    <section className="max-w-6xl mx-auto px-0 sm:px-6 py-8 space-y-8">

      {/* HERO TEXT + IMAGE */}
      <div className="grid md:grid-cols-2 gap-12 items-stretch">
        <div className="h-full">
          <img
            src={Profile}
            alt="stua"
            className="w-full h-full object-cover max-h-[480px] rounded-lg shadow-md"
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
            <li>• támogatlak abban, hogy belső támaszaid stabilabbá váljanak</li>
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
      <div className="max-w-3xl mx-auto">
        <FAQ />
      </div>

    </section>
  );
}




// import Stua from "../images/Stua.jpg";
// import Stua_med_sofa from "../images/Stua_med_sofa.jpg";
// import FAQ from "../components/FAQ";

// export default function Individual() {
//   return (
//     <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
//       {/* HERO TEXT + IMAGE */}
//       <div className="grid md:grid-cols-2 gap-16 items-stretch">
//         <div className="h-full">
//           <img
//             src={Stua}
//             alt="stua"
//             className="w-full h-full object-cover max-h-[520px]"
//           />
//         </div>

//         <div className="flex flex-col justify-center bg-[#f4f1ea] p-10">
//           <h3 className="text-2xl mb-6 tracking-wide">Egyéni folyamatok</h3>

//           <p className="leading-relaxed mb-6">
//             Az egyéni munka során olyan biztonságos teret kínálok, ahol
//             lehetőség van a belső folyamatok megértésére, az érzelmi és testi
//             jelzések felismerésére, valamint a nehéz élethelyzetek
//             átgondolására.
//           </p>

//           <p className="leading-relaxed mb-6">
//             A közös munka nem gyors megoldásokra épül, hanem arra, hogy a kliens
//             fokozatosan kapcsolatba kerülhessen azokkal a belső tartalmakkal,
//             amelyek eddig elkerülhetetlennek vagy megterhelőnek tűntek.
//           </p>

//           <p className="leading-relaxed">
//             Integratív szemlélettel dolgozom, amelyben helyet kapnak a
//             beszélgetésen alapuló megközelítések, az imaginatív elemek és a test
//             jelzéseinek figyelembevétele is.
//           </p>
//         </div>
//       </div>

//       {/* SEGÍTSÉG BLOKK */}
//       <div className="grid md:grid-cols-3 gap-12 bg-[#c8bfa7] p-12">
//         <div className="flex items-center text-gray-700">
//           <p className="leading-relaxed">
//             Az egyéni kísérés azoknak szól, akik szeretnének elmélyülni
//             önismereti folyamataikban, és nyitottak arra, hogy ne elkerülni,
//             hanem megtartva feldolgozni próbálják életük nehézségeit.
//           </p>
//         </div>

//         <div>
//           <h3 className="text-xl mb-4">Amiben segíthetek</h3>

//           <ul className="space-y-2">
//             <li>• elakadások, belső feszültségek</li>
//             <li>• érzelmi túlterheltség vagy üresség</li>
//             <li>• kapcsolati minták átgondolása</li>
//             <li>• élethelyzeti válságok kísérése</li>
//             <li>• önreflexió és belső stabilitás erősítése</li>
//           </ul>
//         </div>

//         <div className="flex flex-col justify-center text-gray-700">
//           <p className="leading-relaxed mb-4">
//             Az egyéni folyamat olyan tér, ahol nem kell erősnek lenned, nem kell
//             mindent értened, és nem kell készen lenned.
//           </p>

//           <p className="leading-relaxed">
//             Sokan érkeznek hozzám érzelmi elhanyagolással, korai felnőtté
//             válással vagy olyan múltbeli tapasztalatokkal, amelyek ma is
//             hatással vannak a kapcsolataikra és önértékelésükre.
//           </p>
//         </div>
//       </div>

//       {/* ZÁRÓ BLOKK */}
//       <div className="grid md:grid-cols-3 gap-12 bg-[#e9e5d9] p-12 items-start">
//         <div className="flex flex-col">
//           <h3 className="text-xl mb-4">A közös munka során</h3>

//           <ul className="space-y-2">
//             <li>• megtartó jelenléttel kísérlek</li>
//             <li>• segítem az egészséges felnőtt részek megerősödését</li>
//             <li>• támogatlak abban, hogy belső támaszaid stabilabbá váljanak</li>
//           </ul>
//         </div>

//         <div className="text-gray-700">
//           <p className="leading-relaxed mb-4">
//             Nem megjavítani szeretnélek. Hanem melletted lenni abban, ami van,
//             és támogatni abban, ami formálódni szeretne.
//           </p>

//           <p className="leading-relaxed">
//             Nem ígérek gyors megoldást. De ott vagyok veled abban, amiben éppen
//             vagy.
//           </p>
//         </div>

//         <div className="h-full">
//           <img
//             src={Stua_med_sofa}
//             alt="stua med sofa"
//             className="w-full h-full object-cover max-h-[520px]"
//           />
//         </div>
//       </div>
//       <hr />
//       <FAQ />
//     </section>
//   );
// }









// // import Trans_line_logo_2 from "../images/Trans_line_logo_2.png";
// import Stua from "../images/Stua.jpg";
// import Stua_med_sofa from "../images/Stua_med_sofa.jpg";

// export default function Individual() {
//   return (
//     <section className="max-w-6xl mx-auto px-6 py-2 shadow-lg">
//       <div className="grid md:grid-cols-2 gap-16 items-stretch">
//         {/* IMAGE */}
//         <div className="h-full flex">
//           <img
//             src={Stua}
//             alt="stua"
//             className="w-full h-full object-cover max-h-[500px]"
//           />
//         </div>

//         {/* TEXT */}
//         <div className="flex flex-col justify-center bg-[#f4f1ea]">
//           <h3 className="text-2xl mb-6 tracking-wide">Egyéni folyamatok</h3>

//           <p className="leading-relaxed mb-6">
//             Az egyéni munka során olyan biztonságos teret kínálok, ahol
//             lehetőség van a belső folyamatok megértésére, az érzelmi és testi
//             jelzések felismerésére, valamint a nehéz élethelyzetek
//             átgondolására.
//           </p>

//           <p className="leading-relaxed mb-6">
//             A közös munka nem gyors megoldásokra épül, hanem arra, hogy a kliens
//             fokozatosan kapcsolatba kerülhessen azokkal a belső tartalmakkal,
//             amelyek eddig elkerülhetetlennek, zavarónak vagy megterhelőnek
//             tűntek. A folyamat tempóját mindig az adott élethelyzet és
//             teherbírás határozza meg.
//           </p>

//           <p className="leading-relaxed mb-6">
//             Integratív szemlélettel dolgozom, amelyben helyet kapnak a
//             beszélgetésen alapuló megközelítések, az imaginatív elemek, valamint
//             a test jelzéseinek figyelembevétele is. A hangsúly a megértésen, az
//             önreflexión és a belső biztonság erősödésén van.
//           </p>
//         </div>
//       </div>
//       <div className="p-4">
//         <div className="grid md:grid-cols-3 gap-16 items-stretch bg-[#c8bfa7] my-1">
//           <div className="flex flex-col justify-center ms-6">
//             <h5 className="leading-relaxed mb-6 text-gray-700">
//               Az egyéni kísérés azoknak szól, akik szeretnének elmélyülni
//               önismereti folyamataikban, és nyitottak arra, hogy ne elkerülni,
//               hanem megtartva feldolgozni próbálják életük nehézségeit.
//             </h5>
//           </div>
//           <div className=" p-8 rounded-lg">
//             <h3 className="text-xl mb-4">Amiben segíthetek</h3>

//             <ul className="space-y-2 ">
//               <li>• elakadások, belső feszültségek</li>
//               <li>• érzelmi túlterheltség vagy üresség</li>
//               <li>• kapcsolati minták átgondolása</li>
//               <li>• élethelyzeti válságok kísérése</li>
//               <li>• önreflexió és belső stabilitás erősítése</li>
//             </ul>
//           </div>
//           <div className="flex flex-col justify-center me-6 text-gray-700">
//             <p className="leading-relaxed mb-6">
//               Az egyéni folyamat olyan tér, ahol nem kell erősnek lenned, nem
//               kell mindent értened, nem kell készen lenned.
//             </p>
//             <p className="leading-relaxed">
//               Sokan érkeznek hozzám érzelmi elhanyagolással, korai felnőtté
//               válással, parentifikációval, vagy olyan múltbeli tapasztalatokkal,
//               amelyek ma is hatással vannak a kapcsolataikra, döntéseikre,
//               önértékelésükre.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="grid md:grid-cols-3 gap-16 items-stretch bg-[#e9e5d9] my-1">
//         <div className=" p-8 rounded-lg">
//           <h3 className="text-xl mb-4">A közös munka során</h3>

//           <ul className="space-y-2 ">
//             <li>• megtartó jelenléttel kísérlek</li>
//             <li>• segítem az egészséges felnőtt részek megerősödését</li>
//             <li>
//               • és támogatlak abban, hogy belső támaszaid stabilabbá váljanak
//             </li>
//           </ul>
//         </div>
//         <div className="flex flex-col justify-center me-6 text-gray-700">
//           <p className="leading-relaxed mb-6">
//             Nem megjavítani szeretnélek. Hanem melletted lenni abban, ami van,
//             és támogatni abban, ami formálódni szeretne.
//           </p>
//           <p className="leading-relaxed">
//             Nem ígérek gyors megoldást. De ott vagyok veled abban, amiben vagy.
//           </p>
//         </div>

//         <div className="h-full flex">
//           <img
//             src={Stua_med_sofa}
//             alt="stua med sofa"
//             className="w-full h-full object-cover shadow-lg max-h-[500px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// <section className="max-w-6xl mx-auto px-6 py-20">
//   <div className="grid md:grid-cols-2 gap-16">
//     <div className="space-y-10">
//       <img src={Stua} alt="stua" className="shadow-lg" />
//     </div>
//     <div>
//       <h3 className="text-2xl mb-6 tracking-wide">Egyéni folyamatok</h3>
//       <p className="leading-relaxed mb-6">
//         Az egyéni munka során olyan biztonságos teret kínálok, ahol
//         lehetőség van a belső folyamatok megértésére, az érzelmi és testi
//         jelzések felismerésére, valamint a nehéz élethelyzetek
//         átgondolására.
//       </p>
//       <p className="leading-relaxed mb-6">
//         A közös munka nem gyors megoldásokra épül, hanem arra, hogy a kliens
//         fokozatosan kapcsolatba kerülhessen azokkal a belső tartalmakkal,
//         amelyek eddig megterhelőnek vagy zavarónak tűntek.
//       </p>
//       <p className="leading-relaxed mb-6">
//         Integratív szemlélettel dolgozom, amelyben helyet kapnak a
//         beszélgetésen alapuló megközelítések, az imaginatív elemek és a test
//         jelzéseinek figyelembevétele is.
//       </p>
//       <p className="leading-relaxed mb-6">
//         Az egyéni kísérés azoknak szól, akik szeretnének elmélyülni
//         önismereti folyamataikban, és nyitottak arra, hogy ne elkerülni,
//         hanem megtartva feldolgozni próbálják életük nehézségeit.
//       </p>
//     </div>
//   </div>
// </section>

// <section className="max-w-6xl mx-auto px-6 py-20">
//   <h1 className="text-3xl mb-12 text-center">Egyéni folyamatok</h1>

//   <div className="grid md:grid-cols-2 gap-16">
//     {/* BAL OSZLOP */}
//     <div className="space-y-6 text-gray-700 leading-relaxed max-w-prose" >
//       {/* <img
//         src={Trans_line_logo_2}
//         alt="Line Logo"
//         className="w-24 mx-auto mb-4 brightness-200 contrast-200 pb-4"
//       /> */}
//       <p>
//         Az egyéni munka során olyan biztonságos teret kínálok, ahol
//         lehetőség van a belső folyamatok megértésére, az érzelmi és testi
//         jelzések felismerésére, valamint a nehéz élethelyzetek
//         átgondolására.
//       </p>

//       <p>
//         A közös munka nem gyors megoldásokra épül, hanem arra, hogy a kliens
//         fokozatosan kapcsolatba kerülhessen azokkal a belső tartalmakkal,
//         amelyek eddig megterhelőnek vagy zavarónak tűntek.
//       </p>

//       <p>
//         Integratív szemlélettel dolgozom, amelyben helyet kapnak a
//         beszélgetésen alapuló megközelítések, az imaginatív elemek és a test
//         jelzéseinek figyelembevétele is.
//       </p>

//       <p>
//         Az egyéni kísérés azoknak szól, akik szeretnének elmélyülni
//         önismereti folyamataikban, és nyitottak arra, hogy ne elkerülni,
//         hanem megtartva feldolgozni próbálják életük nehézségeit.
//       </p>
//     </div>

//     {/* JOBB OSZLOP */}
//     <div className="space-y-10">
//       {/* SEGÍTSÉG BLOKK */}
//       <div className="bg-[#f4f1ea] p-8 rounded-lg">
//         <h3 className="text-xl mb-4">Amiben segíthetek</h3>

//         <ul className="space-y-2 text-gray-700">
//           <li>• elakadások, belső feszültségek</li>
//           <li>• érzelmi túlterheltség vagy üresség</li>
//           <li>• kapcsolati minták átgondolása</li>
//           <li>• élethelyzeti válságok kísérése</li>
//           <li>• belső stabilitás erősítése</li>
//         </ul>
//       </div>

//       {/* IDÉZET */}
//       <div className="border-l-4 border-gray-300 pl-6 italic text-lg">
//         Az egyéni folyamat olyan tér, ahol nem kell erősnek lenned, nem kell
//         mindent értened, és nem kell készen lenned.
//       </div>

//       {/* FOLYAMAT */}
//       <div className="bg-[#f4f1ea] p-8 rounded-lg">
//         <h3 className="text-xl mb-4">A közös munka során</h3>

//         <ul className="space-y-2 text-gray-700">
//           <li>• megtartó jelenléttel kísérlek</li>
//           <li>• segítek a belső támaszok erősítésében</li>
//           <li>• támogatlak az önreflexióban</li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </section>

//   return <section className="max-w-3xl mx-auto py-20 px-6 leading-relaxed text-gray-700">

//   <h1 className="text-3xl mb-8">Egyéni folyamatok</h1>

//   <p className="text-lg mb-8">
//     Az egyéni munka során olyan biztonságos teret kínálok, ahol lehetőség van a
//     belső folyamatok megértésére, az érzelmi és testi jelzések felismerésére,
//     valamint a nehéz élethelyzetek átgondolására.
//   </p>

//   <h2 className="text-xl mt-12 mb-4">A folyamat jellege</h2>

//   <p className="mb-6">
//     A közös munka nem gyors megoldásokra épül, hanem arra, hogy a kliens
//     fokozatosan kapcsolatba kerülhessen azokkal a belső tartalmakkal, amelyek
//     eddig elkerülhetetlennek vagy megterhelőnek tűntek.
//   </p>

//   <p className="mb-6">
//     A folyamat tempóját mindig az adott élethelyzet és a teherbírás határozza meg.
//   </p>

//   <h2 className="text-xl mt-12 mb-4">A szemlélet</h2>

//   <p className="mb-6">
//     Integratív szemlélettel dolgozom, amelyben helyet kapnak a beszélgetésen
//     alapuló megközelítések, az imaginatív elemek, valamint a test jelzéseinek
//     figyelembevétele is.
//   </p>

//   <p className="mb-6">
//     A hangsúly a megértésen, az önreflexión és a belső biztonság erősödésén van.
//   </p>

//   <h2 className="text-xl mt-12 mb-4">Amiben tudok segíteni</h2>

//   <ul className="space-y-3 mb-10">
//     <li>• elakadások és belső feszültségek megértése</li>
//     <li>• érzelmi túlterheltség vagy üresség</li>
//     <li>• kapcsolati minták átgondolása</li>
//     <li>• élethelyzeti válságok kísérése</li>
//     <li>• önreflexió és belső stabilitás erősítése</li>
//   </ul>

//   <blockquote className="border-l-4 pl-6 italic text-lg my-12">
//     Az egyéni folyamat olyan tér, ahol nem kell erősnek lenned,
//     nem kell mindent értened, és nem kell készen lenned.
//   </blockquote>

//   <p className="mb-6">
//     Sokan érkeznek hozzám érzelmi elhanyagolással, korai felnőtté válással,
//     vagy olyan múltbeli tapasztalatokkal, amelyek ma is hatással vannak
//     kapcsolataikra, döntéseikre és önértékelésükre.
//   </p>

//   <h2 className="text-xl mt-12 mb-4">A közös munka során</h2>

//   <ul className="space-y-3 mb-10">
//     <li>• megtartó jelenléttel kísérlek</li>
//     <li>• segítek abban, hogy belső támaszaid megerősödjenek</li>
//     <li>• támogatlak abban, hogy közelebb kerülj önmagadhoz</li>
//   </ul>

//   <p className="text-lg">
//     Nem megjavítani szeretnélek. Hanem melletted lenni abban, ami van,
//     és támogatni abban, ami formálódni szeretne.
//   </p>

// </section>;

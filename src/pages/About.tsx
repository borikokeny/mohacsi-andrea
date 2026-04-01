import { useEffect, useState } from "react";
import { client } from "../services/contentful";
import { Link } from "react-router-dom";
import Terepauta from "../images/terepauta.jpg";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { methods } from "../data/methods";

// AboutPage.jsx

export default function AboutPage() {
  // smooth scroll offset (fix header miatt)
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <main className="bg-[#f8f6f2] text-[#2a2a2a]">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-serif mb-4">
            Mohácsi Andrea
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Integratív szemléletű mentálhigiénés szakemberként olyan teret
            kínálok, ahol biztonságban megállhatsz, és ránézhetsz arra, ami
            belül történik.
          </p>

          {/* ANCHOR NAV */}
          <div className="flex flex-wrap gap-3">
            <button onClick={() => scrollToId("bemutatkozas")} className="chip">
              Bemutatkozás
            </button>
            <button onClick={() => scrollToId("szemlelet")} className="chip">
              Szemlélet
            </button>
            <button onClick={() => scrollToId("hogyan")} className="chip">
              Hogyan dolgozom
            </button>
            <button onClick={() => scrollToId("modszer")} className="chip">
              Módszerek
            </button>
            <button onClick={() => scrollToId("hatter")} className="chip">
              Szakmai háttér
            </button>
          </div>
        </div>
        <img
          src={Terepauta}
          alt="Mohácsi Andrea"
          className="w-full max-w-md h-[400px] rounded-lg  shadow-md object-cover"
        />
        {/* <div className="w-full h-[400px] bg-gray-200 rounded-2xl" /> */}
      </section>

      {/* BEMUTATKOZÁS */}
      <section
        id="bemutatkozas"
        className="max-w-3xl mx-auto px-6 py-16 space-y-6 text-lg leading-relaxed"
      >
        <p>
          Van, amikor nem megoldásra van szükségünk, hanem egy olyan térre, ahol
          biztonságban megállhatunk egy pillanatra.
        </p>
        <p>
          Van egy pont az életben, amikor már nem elég beszélni róla. Amikor
          valami belül jelez, itt az idő ránézni arra, ami mozgat, ami
          visszatart, ami ismétlődik.{" "}
        </p>
        <p>
          A tapasztalatom szerint a valódi változás akkor indul el, amikor van
          tér megállni, ránézni arra, ami belül történik, és mindezt nem egyedül
          kell vinni.
        </p>

        <p>
          Egyéni és csoportos folyamatokban kísérem azokat, akik szeretnének
          közelebb kerülni önmagukhoz, jobban érteni belső működésüket.
        </p>
      </section>

      {/* SZEMLÉLET */}
      <section
        id="szemlelet"
        className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h2 className="text-2xl font-serif mb-4">Integratív szemlélet</h2>
          <p className="leading-relaxed">
            Integratív szemlélettel dolgozom, amelyben a pszichológiai
            megközelítések, az érzelmi folyamatok, a test jelzései és a belső
            narratívák egyaránt fontos szerepet kapnak.
          </p>
        </div>
        <div className="w-full h-[300px] bg-gray-200 rounded-2xl" />
      </section>

      {/* HOGYAN DOLGOZOM */}
      <section
        id="hogyan"
        className="max-w-3xl mx-auto px-6 py-16 text-lg leading-relaxed space-y-6"
      >
        <h2 className="text-2xl font-serif text-center">Hogyan dolgozom?</h2>

        {/* <p>
          Nem megoldásokat kínálok, hanem egy biztonságos keretet, ahol
          lehetőség van megérteni, mi történik belül.
        </p> */}
        <p>
          A közös munka során nem megoldásokat kínálok, hanem egy olyan
          biztonságos keretet, ahol lehetőség van megérteni, mi történik belül,
          és hogyan kapcsolódik ez az élet aktuális élethelyzethez.{" "}
        </p>
        <p>
          {" "}
          A folyamatot közösen alakítjuk, a hangsúly azon van, hogy kialakuljon
          egy belsőbb kapcsolódás, amely hosszabb távon is támpontot jelenthet.
        </p>
        <p>
          Integratív szemléletben dolgozom. Ez azt jelenti, hogy nem egyetlen
          módszerre építek, hanem több megközelítés szemléletét kapcsolom össze
          annak érdekében, hogy a folyamat hozzád és az aktuális
          élethelyzetedhez igazodjon.
        </p>

        <div className="bg-[#ece8e1] p-8 rounded-2xl text-center">
          <h3 className="font-semibold mb-3">
            Nem módszerekkel, hanem szemlélettel dolgozom
          </h3>
          <p>
            A közös munka mindig a kliens tempójához és aktuális teherbírásához
            igazodik.
          </p>
        </div>
      </section>

      {/* MÓDSZEREK */}
      <section id="modszer" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-serif mb-10 text-center">Módszerek</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {methods.map((method, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition transform hover:scale-[1.02]"
            >
              <h3 className="font-semibold mb-3">{method.title}</h3>
              <p className="text-sm leading-relaxed">{method.description}</p>
            </div>
          ))}
        </div>
        {/* <div className="grid md:grid-cols-3 gap-8">
          {[
            "Segítő beszélgetés",
            "Imagináció",
            "Testorientált figyelem",
            "Pszichodráma",
            "Családállítás",
          ].map((title, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition transform hover:scale-[1.02]"
            >
              <h3 className="font-semibold mb-3">{title}</h3>
              <p className="text-sm leading-relaxed">
                Rövid leírás helye — ezt majd finomítjuk a végleges szöveggel.
              </p>
            </div>
          ))}
        </div> */}
      </section>

      {/* SZAKMAI HÁTTÉR */}
      <section
        id="hatter"
        className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10"
      >
        <div>
          <h2 className="text-xl font-serif mb-4">Szemléleti alapok</h2>
          <ul className="space-y-2">
            <li>• pszichodinamikus gondolkodás</li>
            <li>• érzelmi biztonság</li>
            <li>• kapcsolati minták vizsgálata</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-serif mb-4">Képzések</h2>
          <ul className="space-y-2">
            <li>• Mentálhigiénés segítő</li>
            <li>• Imaginatív módszerek</li>
            <li>• Testorientált képzések</li>
          </ul>
        </div>
      </section>

      {/* ZÁRÁS */}
      <section className="text-center py-20 px-6 max-w-3xl mx-auto">
        <p className="text-xl leading-relaxed mb-8">
          Itt nem kell megfelelni. Nem kell jól lenni. Csak jelenlét van,
          kísérés és megtartás.
        </p>

        <Link
          to="/contact"
          className="border px-8 py-3 rounded-full hover:bg-black hover:text-white transition"
        >
          Rólam bővebben
        </Link>
      </section>
    </main>
  );
}

// AboutPage.jsx

// export default function AboutPage() {
//   return (
//     <main className="bg-[#f8f6f2] text-[#2a2a2a]">

//       {/* HERO */}
//       <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h1 className="text-3xl md:text-4xl font-serif mb-4">
//             Mohácsi Andrea
//           </h1>
//           <p className="text-lg leading-relaxed mb-6">
//             Integratív szemléletű mentálhigiénés szakemberként olyan teret kínálok,
//             ahol biztonságban megállhatsz, és ránézhetsz arra, ami belül történik.
//           </p>
//           <button className="border px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
//             Olvass tovább
//           </button>
//         </div>

//         <div className="w-full h-[400px] bg-gray-200 rounded-2xl" />
//       </section>

//       {/* FULL INTRO */}
//       <section className="max-w-3xl mx-auto px-6 py-12 leading-relaxed space-y-6 text-lg">
//         <p>
//           Van, amikor nem megoldásra van szükségünk, hanem egy olyan térre,
//           ahol biztonságban megállhatunk egy pillanatra.
//         </p>
//         <p>
//           A tapasztalatom szerint a valódi változás akkor indul el,
//           amikor van tér megállni, ránézni arra, ami belül történik,
//           és mindezt nem egyedül kell vinni.
//         </p>
//         <p>
//           Egyéni és csoportos folyamatokban kísérem azokat,
//           akik szeretnének közelebb kerülni önmagukhoz.
//         </p>
//       </section>

//       {/* SZEMLÉLET */}
//       <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h2 className="text-2xl font-serif mb-4">Integratív szemlélet</h2>
//           <p className="leading-relaxed">
//             Integratív szemlélettel dolgozom, amelyben a pszichológiai
//             megközelítések, az érzelmi folyamatok és a test jelzései
//             egyaránt fontos szerepet kapnak.
//           </p>
//         </div>
//         <div className="w-full h-[300px] bg-gray-200 rounded-2xl" />
//       </section>

//       {/* KINEK SZÓL */}
//       <section className="max-w-4xl mx-auto px-6 py-12">
//         <h2 className="text-2xl font-serif mb-6 text-center">
//           Kinek szól
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6 text-center">
//           <div className="p-6 bg-white rounded-2xl shadow-sm">
//             „Jól működöm, mégis van bennem feszültség”
//           </div>
//           <div className="p-6 bg-white rounded-2xl shadow-sm">
//             „Sokat gondolkodom, de nehéz érezni”
//           </div>
//           <div className="p-6 bg-white rounded-2xl shadow-sm">
//             „Már próbáltam dolgokat, mégsem változik”
//           </div>
//         </div>
//       </section>

//       {/* ZÁRÓ BLOKK */}
//       <section className="text-center py-20 px-6 max-w-3xl mx-auto">
//         <p className="text-xl leading-relaxed mb-8">
//           Itt nem kell megfelelni. Nem kell jól lenni.
//           Csak jelenlét van, kísérés és megtartás.
//         </p>

//         <button className="border px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
//           Kapcsolat
//         </button>
//       </section>

//     </main>
//   );
// }

// export default function About() {
//   const [page, setPage] = useState<any>(null);

//   useEffect(() => {
//     client.getEntries({
//       content_type: "page",
//       "fields.slug": "rolam"
//     })
//     .then((res) => setPage(res.items[0]))
//     .catch(console.error);
//   }, []);

//   if (!page) return <p>Betoltes...</p>;

//   const { title, tartalom } = page.fields;

//   return (
//     <div>
//             <section className="w-5/6 mx-auto bg-gray-100 py-16 px-4">
//         <div className="max-w-3xl mx-auto text-center">
//           <p className="text-gray-600 italic mb-2">Rólam</p>

//           <h2 className="text-3xl font-semibold mb-6">Mohácsi Andrea</h2>

//           <p className="text-gray-700 leading-relaxed mb-10">
//             Nem hiszek abban, hogy az emberi nehézségek gyors megoldásokkal kezelhetők. A tapasztalatom szerint a valódi változás akkor indul el, amikor van tér megállni, ránézni arra, ami belül történik, és mindezt nem egyedül kell hordozni.
//           </p>
//           <p className="text-gray-700 leading-relaxed mb-10">
//             Integratív szemlélettel dolgozom, amelyben a mentálhigiénés, pszichológiai megközelítések, az érzelmi folyamatok, a test jelzései és a belső narratívák egyaránt fontos szerepet kapnak. A közös munka során a megértés, az önreflexió és a belső biztonság erősítése áll a középpontban.
//           </p>
//           <p className="text-gray-700 leading-relaxed mb-10">Azok fordulnak hozzám, akik gyakran „jól működnek” a mindennapokban, mégis feszültséget, ürességet vagy elakadást élnek meg. Akik sokat gondolkodnak, de nehezebben férnek hozzá az érzéseikhez, vagy akik már kipróbáltak több módszert, mégsem érzik, hogy valóban közelebb kerültek volna önmagukhoz.</p>
//           <p className="text-gray-700 leading-relaxed mb-10">A közös munkában fontos számomra a kiszámítható keret, az érzelmi biztonság és az együtt gondolkodás. Nem ígérek gyors változást, viszont lehetőséget kínálok arra, hogy a belső folyamatok érthetőbbé, megtarthatóbbá váljanak, és a kliens fokozatosan másképp tudjon jelen lenni a saját életében.</p>
//           {/* <Link to="/about" className="border-2 w-80 p-2 px-4 mt-3">
//             Tovább &gt;
//           </Link> */}

//           {/* <p className="text-gray-500 mb-10">-----&gt;</p> */}

//           <div className="flex justify-center mt-4">
//             <img
//               src={Terepauta}
//               alt="Mohácsi Andrea"
//               className="w-full max-w-md rounded-lg shadow-md object-cover"
//             />
//           </div>
//         </div>
//       </section>
//         {/* {page.fields.kep && (
//       <img
//         src={page.fields.kep.fields.file.url}
//         alt={title}
//         style={{
//           width: "50%",
//           maxHeight: "400px",
//           objectFit: "cover",
//           borderRadius: "8px",
//           marginBottom: "20px"
//         }}
//       />
//     )}
//       <h1>{title}</h1>
//       <div>{documentToReactComponents(tartalom)}</div> */}

//     </div>
//   );
// }

import Terepauta from "../images/terepauta.jpg";
import { methods } from "../data/methods";

// AboutPage.jsx

export default function AboutPage() {
  // smooth scroll offset (fix header miatt)
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);

    if (!el) return;

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <main className="bg-[#f8f6f2] text-[#2a2a2a]">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-serif mb-4">
            Mohácsi Andrea
          </h1>
          <p>
            pszichodráma vezető, integrál szemléletű mentálhigiénés szakember,
            Metamorphoses meseterepauta, Integrative Core Dynamics testorientált
            szakember
          </p>
          <p className="text-xl leading-relaxed mt-9 mb-6">
            Integratív szemléletű mentálhigiénés szakemberként olyan teret
            kínálok, ahol biztonságban megállhatsz, és ránézhetsz arra, ami
            belül történik.
          </p>
        </div>
        <img
          src={Terepauta}
          alt="Mohácsi Andrea"
          className="w-full max-w-md h-[400px] rounded-lg shadow-md object-cover ms-12"
        />
      </section>
      <div>
        {/* ANCHOR NAV */}
        <div className="flex justify-center mt-6">
          <div className="flex flex-wrap justify-center gap-3">
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
              Eszközök és megközelítések
            </button>
            <button onClick={() => scrollToId("hatter")} className="chip">
              Szakmai háttér
            </button>
          </div>
        </div>
      </div>
      {/* BEMUTATKOZÁS */}
      <section
        id="bemutatkozas"
        className="max-w-3xl mx-auto bg-[#f4f6f5] px-6 py-16 space-y-6 text-lg leading-relaxed"
      >
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-lg leading-relaxed">
          <p>
            Van, amikor nem megoldásra van szükségünk, hanem egy olyan térre,
            ahol biztonságban megállhatunk egy pillanatra.
          </p>
          <p>
            Van egy pont az életben, amikor már nem elég beszélni róla. Amikor
            valami belül jelez, itt az idő ránézni arra, ami mozgat, ami
            visszatart, ami ismétlődik.{" "}
          </p>
          <p>
            A tapasztalatom szerint a valódi változás akkor indul el, amikor van
            tér megállni, ránézni arra, ami belül történik, és mindezt nem
            egyedül kell vinni.
          </p>
          <hr />
          <p>
            Egyéni és csoportos folyamatokban kísérem azokat, akik szeretnének
            közelebb kerülni önmagukhoz, jobban érteni belső működésüket,
            kapcsolataikat, vagy éppen egy elakadás, veszteség, változás
            időszakában vannak vagy csak elindulnak az önismeret útján és jobban
            szeretnék érteni mindennapi működésüket.
          </p>
        </div>
      </section>

      {/* SZEMLÉLET */}
      <section
        id="szemlelet"
        className="max-w-3xl mx-auto px-6 py-16 space-y-6 text-lg leading-relaxed"
      >
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-serif mb-4">Integratív szemlélet</h2>
          <p>
            Integratív szemlélettel dolgozom, amelyben a testi érzetek, az
            érzelmi folyamatok és a belső történetek egyaránt fontos szerepet
            kapnak. A közös munka során a megértés, az önreflexió és a belső
            biztonság erősítése áll a középpontban. Megtartó, elfogadó térben
            dolgozunk, ahol a teljes ember számít – nem csak a nehézség.
          </p>
          <p>
            Azok fordulnak hozzám, akik gyakran „jól működnek” a mindennapokban,
            mégis feszültséget, ürességet vagy elakadást élnek meg. Akik sokat
            gondolkodnak, de nehezebben férnek hozzá az érzéseikhez, vagy akik
            már több módszert is kipróbáltak, mégsem érzik, hogy valóban
            közelebb kerültek volna önmagukhoz.
          </p>
          <p>
            A közös munkában fontos számomra a kiszámítható keret, az érzelmi
            biztonság és az együtt gondolkodás. Nem ígérek gyors változást,
            viszont lehetőséget kínálok arra, hogy a belső folyamatok érthetőbbé
            és megtarthatóbbá váljanak, és fokozatosan másképp tudj jelen lenni
            a saját életedben.
          </p>
          <p>
            Van, amikor már sok mindent értünk magunkról, mégis nehéz a
            jelenlét, a kapcsolódás a mindennapokban. Itt nem kell megfelelni.
            Nem kell jól lenni. Nincs sietség, és nincs elvárás arra, „hol
            kellene tartanod”. Csak jelenlét van, kísérés és megtartás.
          </p>
          <p>
            Ez a tér azoknak szól, akik szeretnének hidat építeni önmaguk felé.
            Ha olyan helyet keresel, ahol nem maradsz egyedül a mélységekben
            sem, megérkeztél.
          </p>
        </div>
      </section>

      {/* HOGYAN DOLGOZOM */}
      <section
        id="hogyan"
        className="max-w-3xl mx-auto px-6 py-16 text-lg leading-relaxed space-y-6"
      >
        {/* <h2 className="text-2xl font-serif text-center">Hogyan dolgozom?</h2> */}
        <div className="bg-[#ece8e1] p-8 text-center border border-[#e0ddd6]">
          <h3 className="font-semibold mb-3">
            Nem módszerekkel, hanem szemlélettel dolgozom
          </h3>
          {/* <p>
            A közös munka mindig a kliens tempójához és aktuális teherbírásához
            igazodik.
          </p> */}
        </div>

        {/* <p>
          Nem megoldásokat kínálok, hanem egy biztonságos keretet, ahol
          lehetőség van megérteni, mi történik belül.
        </p> */}
        <p>
          Munkámban nem egyetlen módszer áll a középpontban, hanem az ember. Az
          integratív szemlélet számomra azt jelenti, hogy a belső folyamatokat
          több nézőpontból, egymással összefüggésben vizsgáljuk: érzelmi, testi,
          kapcsolati és jelentésalkotó szinteken egyaránt.
        </p>
        <p>
          A különböző megközelítések nem technikák gyűjteményeként jelennek meg,
          hanem egy közös célt szolgálnak: hogy a belső élmények érthetőbbé,
          megtarthatóbbá váljanak, és kialakuljon egy stabilabb kapcsolat
          önmagunkkal. A közös munka mindig a kliens tempójához és aktuális
          teherbírásához igazodik.
        </p>

        <p>
          A közös munka során beszélgetésen alapuló, imaginatív, testorientált,
          dramatikus és tapasztalati elemekkel is dolgozom, integratív
          szemléletben. A hangsúly nem a módszereken, hanem azon van, hogy
          biztonságos térben lehessen ránézni a belső folyamatokra, megérteni az
          elakadások hátterét, és megtalálni a saját, belsőbb irányt
        </p>
        <p>
          Munkámat rendszeres önreflexió, továbbképzés és szakmai
          felelősségvállalás kíséri. Fontos számomra, hogy a segítői munka ne
          technikák alkalmazása legyen, hanem egy folyamatosan átgondolt, etikus
          és biztonságos kísérés.
        </p>
      </section>

      {/* MÓDSZEREK */}
      <section id="modszer" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-serif mb-10 text-center">
          Eszközök és megközelítések
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {methods.map((method, i) => (
            <div
              key={i}
              className="bg-white p-6 border border-[#e5e5e5] hover:border-[#4f8f8a]/40 transition"
            >
              <h3 className="font-semibold mb-3">{method.title}</h3>
              <p className="text-sm leading-relaxed">{method.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SZAKMAI HÁTTÉR */}
      <section id="hatter" className="bg-[#f4f6f5] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* BAL OLDAL */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-serif mb-4">Szakmai háttér</h2>
              <p className="leading-relaxed text-[#555]">
                Mentálhigiénés segítőként integratív szemléletben dolgozom.
                Szakmai utam során olyan megközelítések iránt érdeklődtem,
                amelyek a belső folyamatokat összefüggéseikben vizsgálják, és
                figyelembe veszik az érzelmi, testi és narratív szinteket is.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif mb-3">Szemléleti alapok</h3>
              <ul className="space-y-2 text-[#555] leading-relaxed">
                <li>• pszichodinamikus gondolkodás</li>
                <li>• érzelmi biztonság</li>
                <li>• kapcsolati minták vizsgálata</li>
              </ul>
            </div>
          </div>

          {/* JOBB OLDAL */}
          <div className="space-y-6">
            <h2 className="text-xl font-serif">Képzések és tanulmányok</h2>

            <ul className="space-y-2 text-[#555] leading-relaxed">
              <li>• Mentálhigiénés segítő képzés</li>
              <li>• Imaginatív módszerekkel végzett segítői munka</li>
              <li>• Testorientált szemléletű továbbképzések</li>
            </ul>

            <p className="text-sm text-[#777]">
              Ez a felsorolás nem a teljességet, hanem a szakmai irányultságot
              kívánja megmutatni.
            </p>
          </div>
        </div>
      </section>

      {/* ZÁRÁS */}
      <section className="bg-[#4f8f8a] text-white text-center py-24">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-xl leading-relaxed">
            Itt nem kell megfelelni. Nem kell jól lenni. Csak jelenlét van,
            kísérés és megtartás.
          </p>
        </div>
      </section>
    </main>
  );
}

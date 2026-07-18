import Portre_cut from "../images/Portre_about_cut.jpg";
import Botanika from "../images/Botanika.png";
import Mandala_teal from "../images/Mandala_teal.png";
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
    <main className="bg-[#ffffff] text-[#2a2a2a]">
      <section className="relative overflow-hidden">

  {/* DESKTOP VERSION */}
  <div className="hidden md:block relative h-[40vh] min-h-[600px] overflow-hidden">

    <img
      src={Portre_cut}
      alt="Mohácsi Andrea"
      className="absolute inset-0 h-full w-full object-cover"
    />

    {/* content */}
    <div className="relative z-10 mx-auto flex h-full max-w-6xl items-start justify-end px-6 mt-16 me-3">
      <div className="w-full max-w-[610px] rounded-sm bg-[#f8f6f2]/75 px-10 py-10 text-left backdrop-blur-[2px] md:px-14 md:py-10">

        <p className="mb-3 text-[11px] uppercase leading-relaxed tracking-[0.22em] text-[#32302f] md:text-xs">
          Integratív szemléletű mentálhigiénés szakember
        </p>

        <h1 className="mb-3 font-serif text-4xl leading-tight text-[#2a2a2a] md:text-6xl">
          Mohácsi Andrea
        </h1>

        <p className="max-w-xl text-xl leading-relaxed text-[#3d3d3d]">
          Olyan teret kínálok, ahol biztonságban megállhatsz,
          és ránézhetsz arra, ami belül történik.
        </p>

      </div>
    </div>

    {/* bottom wave */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
      <svg
        className="relative block h-[90px] w-[calc(100%+1.3px)]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,74.7C1120,64,1280,64,1360,64L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          className="fill-[#6fa7aa]"
        />
      </svg>
    </div>
  </div>

  {/* MOBILE VERSION */}
  <div className="md:hidden bg-[#f8f6f2]">
        {/* Image */}
    <div className="relative">
      <img
        src={Portre_cut}
        alt="Mohácsi Andrea"
        className="h-[340px] w-full object-cover object-top object-left"
      />

      {/* Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block h-[60px] w-[calc(100%+1.3px)]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,74.7C1120,64,1280,64,1360,64L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            className="fill-[#6fa7aa]"
          />
        </svg>
      </div>
    </div>
    <div className="px-6 py-8 text-left">

      {/* <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-[#32302f]">
        Integratív szemléletű mentálhigiénés szakember
      </p> */}
<p className="mb-3 text-sm text-[#6d6b68]">
  Integratív szemléletű mentálhigiénés szakember
</p>
      <h1 className="mb-5 font-serif text-4xl leading-tight text-[#2a2a2a]">
        Mohácsi Andrea
      </h1>

      <p className="text-lg leading-9 text-[#3d3d3d]">
        Olyan teret kínálok, ahol biztonságban megállhatsz,
        és ránézhetsz arra, ami belül történik.
      </p>

    </div>


    {/* Text */}

  </div>
</section>

      {/* <section className="relative h-[80vh] min-h-[700px] overflow-hidden">
  <img
    src={Portre_about}
    alt="Mohácsi Andrea"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center justify-end px-6">
    
    <div className="max-w-2xl bg-[#f8f6f2]/55 backdrop-blur-[2px] p-8 md:p-10 rounded-sm">
      
      <p className="uppercase tracking-[0.3em] text-sm text-[#6d6a64] mb-4">
        Integratív szemléletű mentálhigiénés szakember
      </p>

      <h1 className="text-5xl md:text-6xl font-serif mb-6 text-[#2a2a2a] leading-tight">
        Mohácsi Andrea
      </h1>

      <p className="text-xl leading-relaxed text-[#3d3d3d] max-w-xl">
        Olyan teret kínálok, ahol biztonságban megállhatsz,
        és ránézhetsz arra, ami belül történik.
      </p>

    </div>
  </div>
</section> */}
      {/* <section className="relative h-[80vh] min-h-[700px] overflow-hidden">
  <img
    src={Portre_about}
    alt="Mohácsi Andrea"
    className="absolute inset-0 w-full h-full object-cover"
  />


  <div className="absolute inset-0 " />

  <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center justify-end px-6 ">
    <div className="max-w-2xl">
      <p className="uppercase tracking-[0.3em] text-sm text-[#6d6a64] mb-4">
        Integratív szemléletű mentálhigiénés szakember
      </p>

      <h1 className="text-5xl md:text-6xl font-serif mb-6 text-[#2a2a2a] leading-tight">
        Mohácsi Andrea
      </h1>

      <p className="text-xl leading-relaxed text-[#3d3d3d] max-w-xl">
        Olyan teret kínálok, ahol biztonságban megállhatsz,
        és ránézhetsz arra, ami belül történik.
      </p>
    </div>
  </div>
</section> */}

      {/* <section className="relative h-[80vh] min-h-[700px] overflow-hidden">
  <img
    src={Portre_about}
    alt="Mohácsi Andrea"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-[#f8f6f2]/15" />


  <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center justify-end px-6">
    <div className="max-w-2xl">
      <p className="uppercase tracking-[0.3em] text-sm text-[#6d6a64] mb-4">
        Integratív szemléletű mentálhigiénés szakember
      </p>

      <h1 className="text-5xl md:text-6xl font-serif mb-6 text-[#2a2a2a] leading-tight">
        Mohácsi Andrea
      </h1>

      <p className="text-xl leading-relaxed text-[#3d3d3d] max-w-xl">
        Olyan teret kínálok, ahol biztonságban megállhatsz,
        és ránézhetsz arra, ami belül történik.
      </p>
    </div>
  </div>
</section> */}
      {/* <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
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
      </section> */}

      {/* <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
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
      
      </section> */}
      {/* <div>
        <img src={Portre_cut} alt="Mohácsi Andrea" />
      </div> */}
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
      <section className="relative bg-[#ffffff] overflow-hidden py-8">
        {/* right decoration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-40 hidden lg:block">
          <img src={Botanika} alt="" className="w-[260px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            {/* text */}
            <div className="max-w-3xl ms-6">
              <h2 className="text-xl md:text-2xl font-serif text-[#48969f] leading-tight mb-8">
                Van, amikor nem megoldásra van szükségünk, hanem egy olyan
                térre, ahol biztonságban megállhatunk egy pillanatra.
              </h2>

              <div className="space-y-6 text-lg leading-[1.9] text-[#3e4343]">
                <p>
                  Van egy pont az életben, amikor már nem elég beszélni róla.
                  Amikor valami belül jelez, itt az idő ránézni arra, ami
                  mozgat, ami visszatart, ami ismétlődik.
                </p>

                <p>
                  A tapasztalatom szerint a valódi változás akkor indul el,
                  amikor van tér megállni, ránézni arra, ami belül történik, és
                  mindezt nem egyedül kell vinni.
                </p>

                <p>
                  Egyéni és csoportos folyamatokban kísérem azokat, akik
                  szeretnének közelebb kerülni önmagukhoz, jobban érteni belső
                  működésüket, kapcsolataikat, vagy éppen egy elakadás,
                  veszteség, változás időszakában vannak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="relative bg-[#f8fbfb] overflow-hidden py-24">

  <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
    <img
      src={Botanika}
      alt=""
      className="w-[260px]"
    />
  </div>

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-[220px_1fr] gap-14 items-center">

   
      <div className="flex justify-center md:justify-start">
        <img
          src={Logo_teal}
          alt="Hidak önmagunkhoz"
          className="w-[180px] md:w-[220px] opacity-40"
        />
      </div>

      <div className="max-w-3xl">

        <h2 className="text-xl md:text-2xl font-serif text-[#24484c] leading-tight mb-8">
          Van, amikor nem megoldásra van szükségünk,
          hanem egy olyan térre, ahol biztonságban
          megállhatunk egy pillanatra.
        </h2>

        <div className="space-y-6 text-lg leading-[1.9] text-[#3e4343]">

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
          <p>
            Egyéni és csoportos folyamatokban kísérem azokat, akik szeretnének
            közelebb kerülni önmagukhoz, jobban érteni belső működésüket,
            kapcsolataikat, vagy éppen egy elakadás, veszteség, változás
            időszakában vannak vagy csak elindulnak az önismeret útján és jobban
            szeretnék érteni mindennapi működésüket.
          </p>
        </div>
      </div>
    </div>
  </div>
</section> */}
      {/* <section
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
      </section> */}

      {/* SZEMLÉLET */}
      <section
        id="szemlelet"
        className="relative overflow-hidden bg-[#f4f9f9] py-12 sm:py-24"
      >
        {/* mandala */}
        <div className="absolute left-[-220px] top-[-90px] opacity-[0.3] hidden lg:block">
          <img src={Mandala_teal} alt="" className="w-[620px] scale-x-[-1]" />
        </div>

        {/* <div className="relative z-10 max-w-6xl mx-auto px-6"> */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          {/* heading */}
          {/* <div className="max-w-2xl mb-10"> */}
          <div className="max-w-3xl mb-8 sm:mb-14 lg:ml-24">
            <h2 className="text-4xl md:text-4xl font-serif text-[#24484c] leading-tight mb-8">
              Integratív szemlélet
            </h2>

            <div className="w-24 h-[2px] sm:mb-6" />

            <p className="text-2xl leading-[1.8] text-[#3c4343]">
              Integratív szemlélettel dolgozom, amelyben a testi érzetek, az
              érzelmi folyamatok és a belső történetek egyaránt fontos szerepet
              kapnak.
            </p>
          </div>

          {/* columns */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-14 text-lg leading-[2] text-[#3f4444]">
            <div className="space-y-8">
              <p>
                A közös munka során a megértés, az önreflexió és a belső
                biztonság erősítése áll a középpontban. Megtartó, elfogadó
                térben dolgozunk, ahol a teljes ember számít – nem csak a
                nehézség.
              </p>

              <p>
                Azok fordulnak hozzám, akik gyakran „jól működnek” a
                mindennapokban, mégis feszültséget, ürességet vagy elakadást
                élnek meg.
              </p>
            </div>

            <div className="space-y-8">
              <p>
                A közös munkában fontos számomra a kiszámítható keret, az
                érzelmi biztonság és az együtt gondolkodás.
              </p>

              <p>
                Van, amikor már sok mindent értünk magunkról, mégis nehéz a
                jelenlét, a kapcsolódás a mindennapokban.
              </p>

              <p>
                Ez a tér azoknak szól, akik szeretnének hidat építeni önmaguk
                felé.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section
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
      </section> */}

      {/* HOGYAN DOLGOZOM */}
      {/* MOBILE */}
<div className="bg-[#6fa7aa] px-8 py-12 text-center md:hidden">
  <h2 className="text-sm uppercase tracking-[0.18em] leading-relaxed text-white">
    Nem módszerekkel,
    <br />
    hanem szemlélettel dolgozom
  </h2>
</div>

{/* DESKTOP */}
<div className="hidden h-40 items-center justify-center bg-[#6fa7aa] md:flex">
  <div className="inline-block border border-[#ddd8d1] bg-white/60 px-10 py-8">
    <h2 className="text-sm uppercase tracking-[0.28em] leading-relaxed text-[#4a4a46]">
      Nem módszerekkel, hanem szemlélettel dolgozom
    </h2>
  </div>
</div>
      {/* <div className="h-40 bg-[#6fa7aa] flex justify-center items-center">
        <div className="inline-block border border-[#ddd8d1] bg-white/60 px-10 py-8">
          <h2 className="text-[11px] md:text-sm uppercase tracking-[0.28em] text-[#4a4a46] leading-relaxed ">
            Nem módszerekkel, hanem szemlélettel dolgozom
          </h2>
        </div>
      </div> */}
      <section
        id="hogyan"
        className="relative bg-[#f8f6f2] py-12  overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* <div className="max-w-4xl mx-auto text-center mb-14">

      <div className="inline-block border border-[#ddd8d1] bg-white/60 px-10 py-8">

        <h2 className="text-[11px] md:text-sm uppercase tracking-[0.28em] text-[#4a4a46] leading-relaxed">
          Nem módszerekkel, hanem szemlélettel dolgozom
        </h2>

      </div>
    </div> */}
          {/* intro */}
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-2xl leading-[1.9] text-[#46929a] font-serif">
              Munkámban nem egyetlen módszer áll a középpontban, hanem az ember.
            </p>
          </div>

          {/* editorial columns */}
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 max-w-6xl mx-auto">
            <div className="space-y-10 text-lg leading-[2] text-[#4a4a48]">
              <p>
                Az integratív szemlélet számomra azt jelenti, hogy a belső
                folyamatokat több nézőpontból, egymással összefüggésben
                vizsgáljuk: érzelmi, testi, kapcsolati és jelentésalkotó
                szinteken egyaránt.
              </p>

              <p>
                A különböző megközelítések nem technikák gyűjteményeként
                jelennek meg, hanem egy közös célt szolgálnak: hogy a belső
                élmények érthetőbbé, megtarthatóbbá váljanak, és kialakuljon egy
                stabilabb kapcsolat önmagunkkal. A közös munka mindig a kliens
                tempójához és aktuális teherbírásához igazodik.
              </p>
            </div>

            <div className="space-y-10 text-lg leading-[2] text-[#4a4a48]">
              <p>
                A közös munka során beszélgetésen alapuló, imaginatív,
                testorientált, dramatikus és tapasztalati elemekkel is dolgozom,
                integratív szemléletben. A hangsúly nem a módszereken, hanem
                azon van, hogy biztonságos térben lehessen ránézni a belső
                folyamatokra, megérteni az elakadások hátterét, és megtalálni a
                saját, belsőbb irányt.
              </p>

              <p>
                Munkámat rendszeres önreflexió, továbbképzés és szakmai
                felelősségvállalás kíséri. Fontos számomra, hogy a segítői munka
                ne technikák alkalmazása legyen, hanem egy folyamatosan
                átgondolt, etikus és biztonságos kísérés.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section
        id="hogyan"
        className="max-w-3xl mx-auto px-6 py-16 text-lg leading-relaxed space-y-6"
      >
      
        <div className="bg-[#ece8e1] p-8 text-center border border-[#e0ddd6]">
          <h3 className="font-semibold mb-3">
            Nem módszerekkel, hanem szemlélettel dolgozom
          </h3>
     
        </div>

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
          elakadások hátterét, és megtalálni a saját, belsőbb irányt.
        </p>
        <p>
          Munkámat rendszeres önreflexió, továbbképzés és szakmai
          felelősségvállalás kíséri. Fontos számomra, hogy a segítői munka ne
          technikák alkalmazása legyen, hanem egy folyamatosan átgondolt, etikus
          és biztonságos kísérés.
        </p>
      </section> */}

      {/* MÓDSZEREK */}
      <section
        id="modszer"
        className="relative bg-[#f8fbfb] py-10 sm:py-28 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* heading */}
          <div className="text-center mb-10 sm:mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2f6f6b] mb-6">
              Eszközök és megközelítések
            </h2>

            <div className="w-24 h-[2px] bg-[#7fb2b4] mx-auto" />
          </div>

          {/* cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {methods.map((method, i) => (
              <div
                key={i}
                className="group bg-white/70 backdrop-blur-sm border border-[#dce7e7] rounded-[6px] px-8 py-6 sm:py-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              >
                {/* icon */}
                <div className="mb-8 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#2f7c80] flex items-center justify-center shadow-sm">
                    <img
                      src={method.icon}
                      alt={method.title}
                      className="w-15 h-15 object-contain opacity-95"
                    />
                  </div>
                </div>

                {/* title */}
                <h3 className="text-xl font-serif text-[#29565a] sm:mb-5 leading-snug min-h-[64px]">
                  {method.title}
                </h3>

                {/* text */}
                <p className="text-[#4a4f4f] leading-[1.9] text-[15px] sm:mb-8">
                  {method.description}
                </p>

                {/* button */}
                {/* <button className="px-6 py-2 rounded-full border border-[#7baeb0] text-[#34656a] text-sm bg-white/60 backdrop-blur-sm transition-all duration-300 hover:bg-[#5f9698] hover:text-white hover:border-[#5f9698]">
            Bővebben
          </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section id="modszer" className="max-w-6xl mx-auto px-6 py-16">
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
      </section> */}

      {/* SZAKMAI HÁTTÉR */}
      <section id="hatter" className="bg-[#f4f6f5] py-8 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 sm:gap-16">
          {/* BAL OLDAL */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-serif text-[#48969f] mb-4">
                Szakmai háttér
              </h2>
              <p className="leading-relaxed text-[#555]">
                Mentálhigiénés segítőként integratív szemléletben dolgozom.
                Szakmai utam során olyan megközelítések iránt érdeklődtem,
                amelyek a belső folyamatokat összefüggéseikben vizsgálják, és
                figyelembe veszik az érzelmi, testi és narratív szinteket is.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif text-[#48969f] mb-1 sm:mb-3">
                Szemléleti alapok
              </h3>
              <ul className="space-y-2 text-[#555] leading-relaxed">
                <li>• pszichodinamikus gondolkodás</li>
                <li>• érzelmi biztonság</li>
                <li>• kapcsolati minták vizsgálata</li>
              </ul>
            </div>
          </div>

          {/* JOBB OLDAL */}
          <div className="space-y-2 sm:space-y-6">
            <h2 className="text-xl font-serif text-[#48969f] ">
              Képzések és tanulmányok
            </h2>

            <ul className="space-y-2 text-[#555] leading-relaxed">
              <li>• Mentálhigiénés segítő képzés</li>
              <li>• Imaginatív módszerekkel végzett segítői munka</li>
              <li>• Testorientált szemléletű továbbképzések</li>
            </ul>

            <p className="text-sm text-[#777] pt-6 sm:pt-20">
              Ez a felsorolás nem a teljességet, hanem a szakmai irányultságot
              kívánja megmutatni.
            </p>
          </div>
        </div>
      </section>

      {/* ZÁRÁS */}
      <section className="relative overflow-hidden bg-[#6fa7aa] text-white text-center py-12 sm:py-24">
        <div className="absolute right-0 top-30 -translate-y-1/2 opacity-30 hidden lg:block">
          <img src={Botanika} alt="" className="w-[260px]" />
        </div>
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

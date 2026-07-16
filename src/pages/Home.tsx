import { Link } from "react-router-dom";
import Portre_home from "../images/Portre_home.jpg";
import Home_hero from "../images/Home_hero_optimized_200.jpg";
import Portre_mobile from "../images/Home_hero_mobile.jpg";
import Stuavegg from "../images/Stuavegg.jpg";
import Logo from "../images/logo.png";

export default function HomePage() {
  return (
    <main className="bg-[#F4F1EC] text-[#2F2F2F]">
      <section className="relative overflow-hidden">
        {/* DESKTOP HERO */}
        <div className="hidden md:block">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={Home_hero}
              alt="Mohácsi Andrea"
              className="h-full w-full object-cover object-top"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/8" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
          </div>

          {/* Desktop content */}
          <div className="relative mx-auto flex min-h-[620px] max-w-[1440px] items-center px-6 py-24 md:px-12 lg:px-20">
            <div className="max-w-2xl text-left text-white">
              <h1 className="mb-8 font-serif text-5xl leading-tight md:text-6xl">
                Biztonságos tér
                <br />a valódi változáshoz
              </h1>

              <div className="mb-8 h-[2px] w-24 bg-[#72b7b1]" />

              <p className="max-w-xl text-lg leading-9 text-white/90 md:text-xl">
                Egyéni és csoportos folyamatok azoknak, akik szeretnének jobban
                kapcsolódni önmagukhoz, tisztábban érezni, mire van szükségük és
                megtanulni képviselni magukat kapcsolataikban.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg
              className="relative block w-[calc(100%+1.3px)] h-[60px]"
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

        {/* MOBILE HERO */}
        <div className="md:hidden bg-[#f8f6f3]">
          {/* Image */}
          <div className="relative">
            <img
              src={Portre_mobile}
              alt="Mohácsi Andrea"
              className="w-full object-cover"
            />

            {/* Wave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
              <svg
                className="relative block w-[calc(100%+1.3px)] h-[60px]"
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

          {/* Text content */}
          <div className="px-6 py-12 text-[#2d2d2d]">
            <h1 className="mb-6 font-serif text-5xl leading-tight text-[#2f6f6b]">
              Biztonságos tér
              <br />a valódi változáshoz
            </h1>

            <div className="mb-8 h-[2px] w-24 bg-[#72b7b1]" />

            <p className="text-lg leading-9">
              Egyéni és csoportos folyamatok azoknak, akik szeretnének jobban
              kapcsolódni önmagukhoz, tisztábban érezni, mire van szükségük és
              megtanulni képviselni magukat kapcsolataikban.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="min-h-[35vh] md:h-[40vh] grid md:grid-cols-[2fr_1fr] items-center bg-gradient-to-br from-[#7fb7b2] via-[#5f9f9a] to-[#3f7f7b]">
    
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

        
        <div className="h-[300px] md:h-full">
          <img
            src={Portre_home}
            alt="hero"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section> */}

      {/* SUPPORT */}
      <section className="bg-[#f4f6f5] py-5 sm:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
          <img src={Stuavegg} className="rounded-2xl shadow-md" />

          <div className="max-w-md">
            <h2 className="text-3xl font-serif mb-6 text-[#2f6f6b]">
              Miben tudlak támogatni
            </h2>

            <p className="mb-4 leading-relaxed text-[#555]">
              Azért dolgozom, hogy biztonságos teret tartsak és jelenléttel
              kísérjem azokat, akik elakadtak.
            </p>

            <p className="mb-4 leading-relaxed text-[#555]">
              Kérdéseken, figyelmen és lassításon keresztül segítem, hogy újra
              kapcsolódni tudj önmagadhoz – a testedhez, az érzéseidhez és a
              belső történeteidhez.
            </p>

            <p className="leading-relaxed text-[#555]">
              Így válik elérhetővé egy mélyebb kiegyensúlyozottság.
            </p>
          </div>
        </div>
      </section>
      {/* HOW I WORK */}

      <section className="bg-[#e6efee] py-5 sm:py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif mb-6 sm:mb-12 text-[#2f6f6b]">
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
      <section className="bg-white py-6 sm:py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5 sm:gap-20 items-center">
          <div className="max-w-md">
            <h2 className="text-3xl font-serif mb-6 text-[#2f6f6b]">
              Bemutatkozás
            </h2>

            <p className="mb-6 leading-relaxed text-[#555]">
              Mohácsi Andrea vagyok, integrál szemléletű mentálhigiénés
              szakember, Metamorphoses meseterapeuta, pszichodráma vezető,
              Integrative Core Dynamics testorientált szakember,
              gyászcsoportvezető, családállító, integrál önismereti tanácsadó és
              még sokfelé jártam az úton, míg most ott vagyok, ahol találkozunk.
            </p>

            <Link to="/about" className="text-[#2f6f6b] underline">
              Rólam bővebben →
            </Link>
          </div>

          <img
            src={Portre_home}
            alt="portrait"
            className="rounded-2xl shadow-md"
          />
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-20">

  {/* ---------- CÍM ---------- */}

  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-4xl font-aboreto mb-6">
      Miért Hidak Önmagunkhoz?
    </h2>

    <p className="text-xl font-aboreto">
      A híd számomra a kapcsolódás szimbóluma
    </p>

    <p className="mt-4 text-lg font-aboreto tracking-wide">
      Kapcsolódás önmagunkhoz,
      másokhoz és a minket körülvevő világhoz
    </p>

    <div className="w-10 h-10 mx-auto mt-6">
      <img
              src={Logo}
              alt="Logo"
              className=" object-cover object-top opacity-80"
            />
    </div>
     <div className="w-24 h-[2px] bg-[#5f9f98] mx-auto mt-10"></div>
  </div>


  {/* ---------- ELSŐ GONDOLAT ---------- */}

  <div className="max-w-3xl mx-auto mt-10">

    <p className="text-4xl text-herodarkseablue 
leading-snug
max-w-4xl
text-center">
      Hiszem, hogy az önismeret nem egyetlen nagy felismerés,
      hanem sok apró átkelés egymás után.
    </p>

    <p className="mt-8 text-lg leading-loose text-gray-700">
      Vannak hidak, amelyeken könnyedén haladunk végig,
      és vannak olyanok is, amelyek ijesztő mélységek felett vezetnek.
      Előfordul, hogy bizonytalanul lépünk rájuk,
      nem tudjuk, elbírnak-e bennünket,
      vagy mi vár a túloldalon.
    </p>

  </div>


  {/* ---------- KÉT HASÁB ---------- */}

  <div className="grid lg:grid-cols-2 gap-20 mt-24">

    <div>

      <h3 className="text-2xl font-aboreto mb-6 text-[#2f6f6b]">
        A kísérés számomra...
      </h3>

      <p className="leading-loose text-lg text-gray-700">
        Segítő szakemberként abban szeretnék társ lenni,
        hogy ezeket a hidakat ne egyedül kelljen bejárni.

        <br /><br />

        Van, amikor elég,
        ha valaki mellettünk halad.

        <br /><br />

        Van, amikor szükség van egy megtartó jelenlétre.

        <br /><br />

        És van,
        amikor közösen építjük fel azt a hidat,
        amelyen később már önállóan is
        biztonsággal át lehet kelni.
      </p>

    </div>



    <div>

      <h3 className="text-2xl font-aboreto mb-6 text-[#2f6f6b]">
        A logó üzenete
      </h3>

      <p className="leading-loose text-lg text-gray-700">

        A logóban megjelenő víz
        a változás és az élet áramlását idézi.

        <br /><br />

        A belőle kibontakozó növény
        a fejlődés,
        a növekedés
        és az új lehetőségek jelképe.

        <br /><br />

        A híd mindezt összeköti:
        emlékeztet arra,
        hogy a fejlődés nem elszakadás,
        hanem egyre mélyebb kapcsolódás
        önmagunkhoz,
        másokhoz
        és a világhoz.

      </p>

    </div>

  </div>



  {/* ---------- TÜRKIZ BLOKK ---------- */}

  <div className="mt-24 bg-[#eef6f5] rounded-3xl p-10">

    <h3 className="text-2xl font-aboreto text-center text-[#2f6f6b] mb-8">
      Mit jelent számomra a türkiz?
    </h3>

    <p className="max-w-3xl mx-auto text-center leading-loose text-lg text-gray-700">

      A logó türkiz színe számomra
      az integráció,
      az egyensúly,
      az összekapcsolódás
      és a teljesség felé vezető fejlődés
      szimbóluma.

      <br /><br />

      Olyan szemléletet képvisel,
      amelyben a test,
      a psziché,
      a gondolatok,
      az érzelmek
      és a kapcsolataink
      egymással összefüggő rendszert alkotnak.

    </p>

  </div>



  {/* ---------- ZÁRÓ IDÉZET ---------- */}

  <div className="max-w-3xl mx-auto mt-24 text-center">

    <p className="text-3xl text-herodarkseablue leading-relaxed italic">

      „Hiszem, hogy mindannyiunk életében
      vannak olyan időszakok,
      amikor jól jön egy kísérő a hídon.”

    </p>

    <p className="mt-10 text-xl leading-loose text-gray-700">

      Nem azért,
      hogy helyettünk menjen át,

      <br /><br />

      hanem hogy mellettünk legyen,

      <br /><br />

      amíg megtaláljuk
      a saját lépéseinket.

    </p>

  </div>

</section>
      

      {/* CTA */}
      <section className="text-center py-10 sm:py-24 px-6 bg-[#5f9f9a] text-white/90">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif mb-8 leading-relaxed">
            Ha úgy érzed, megszólít ez az út, szeretettel várlak.
          </h2>

          <Link
            to="/contact"
            className="inline-block bg-white text-[#2f6f6b] px-8 py-3 rounded-full hover:bg-[#f4f6f5] transition chip"
          >
            Kapcsolat
          </Link>
        </div>
      </section>
    </main>
  );
}

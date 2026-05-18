import { Link } from "react-router-dom";
import Portre_home from "../images/Portre_home.jpg";
import Home_hero from "../images/Home_hero_optimized_200.jpg";
import Portre_mobile from "../images/Home_hero_mobile.jpg";
import Stuavegg from "../images/Stuavegg.jpg";

export default function HomePage() {
  return (
    <main className="bg-[#F4F1EC] text-[#2F2F2F]">
<section className="relative overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0">
    {/* <img
      src={Home_hero}
      alt="Mohácsi Andrea"
      className="h-full w-full object-cover object-top"
    /> */}
<picture>
  <source media="(max-width: 768px)" srcSet={Portre_mobile} />
  <img src={Home_hero} />
</picture>
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/8" />

    {/* Soft gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
  </div>

  {/* Content */}
  <div className="relative mx-auto flex min-h-[620px] max-w-[1440px] items-center px-6 py-24 md:px-12 lg:px-20">
    <div className="max-w-2xl text-white text-left">
     

      {/* Heading */}
      <h1 className="mb-8 font-serif text-5xl leading-tight md:text-6xl">
        Biztonságos tér
        <br />
        a valódi változáshoz
      </h1>
{/* Decorative line */}
      <div className="mb-8 h-[2px] w-24 bg-[#72b7b1]" />
      {/* Text */}
      <p className="mb-12 max-w-xl text-lg leading-9 text-white/90 md:text-xl">
        Egyéni és csoportos folyamatok azoknak,
        akik szeretnének jobban kapcsolódni
        önmagukhoz, tisztábban érezni,
        mire van szükségük és megtanulni
        képviselni magukat kapcsolataikban.
      </p>

      {/* Buttons */}
      {/* <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href="/egyeni"
          className="rounded-full bg-[#5FA9A1] px-8 py-4 text-center text-sm tracking-wide text-white transition hover:bg-[#4c9189]"
        >
          EGYÉNI FOLYAMATOK
        </a>

        <a
          href="/csoportos"
          className="rounded-full border border-white/70 px-8 py-4 text-center text-sm tracking-wide text-white transition hover:bg-white hover:text-[#2c2c2c]"
        >
          CSOPORTOS LEHETŐSÉGEK
        </a>
      </div> */}
    </div>
  </div>
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
  <svg
    className="relative block w-[calc(100%+1.3px)] h-[90px]"
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
      <section className="bg-[#f4f6f5] py-20 px-6">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    
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
        kapcsolódni tudj önmagadhoz – a testedhez, az érzéseidhez és a belső
        történeteidhez.
      </p>

      <p className="leading-relaxed text-[#555]">
        Így válik elérhetővé egy mélyebb kiegyensúlyozottság.
      </p>
    </div>
  </div>
</section>
      {/* HOW I WORK */}

<section className="bg-[#e6efee] py-20 px-6 text-center">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-3xl font-serif mb-12 text-[#2f6f6b]">
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
      <section className="bg-white py-24 px-6">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">

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

      <a href="/about" className="text-[#2f6f6b] underline">
        Rólam bővebben →
      </a>
    </div>

    <img
      src={Portre_home}
      alt="portrait"
      className="rounded-2xl shadow-md"
    />
  </div>
</section>
<section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-aboreto mb-12">Rólam mondták</h2>

        <div className="grid md:grid-cols-3 gap-12 text-herodarkseablue">
          {/* 1. vélemény */}
          <div>
            <p className="text-lg leading-relaxed">
              "Andrea jelenléte biztonságot ad, vele könnyű megnyílni. A közös
              munkánk során olyan felismerésekhez jutottam, amelyek alapjaiban
              változtatták meg az életemhez való hozzáállásom."
            </p>
            <p className="mt-6 font-semibold">Katalin M.</p>
          </div>

          {/* 2. vélemény */}
          <div>
            <p className="text-lg leading-relaxed">
              "A csoport légköre Andrea mellett támogató és megtartó. Mindig
              figyelmes, pontosan kérdez, és segít meglátni az összefüggéseket,
              amiket egyedül nem vettem volna észre."
            </p>
            <p className="mt-6 font-semibold">Dávid P.</p>
          </div>

          {/* 3. vélemény */}
          <div>
            <p className="text-lg leading-relaxed">
              "A pszichodráma alkalmakon Andrea finoman, mégis határozottan
              vezetett. Felszabadító élmény volt olyan helyzeteket megélni és
              átírni, amelyek régóta bennem voltak. Hálás vagyok az egész
              folyamatért."
            </p>
            <p className="mt-6 font-semibold">Eszter L.</p>
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
      className="inline-block bg-white text-[#2f6f6b] px-8 py-3 rounded-full hover:bg-[#f4f6f5] transition chip"
    >
      Kapcsolat
    </Link>

  </div>
</section>
    </main>
  );
}

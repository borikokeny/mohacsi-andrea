import { useParams } from "react-router-dom";
import { groups } from "../data/groups";

export default function GroupDetailPage() {
  const { slug } = useParams();
  const group = groups.find((g) => g.slug === slug);

  if (!group) {
    return <div className="p-10">Csoport nem található</div>;
  }

  return (
    <>
      {/* HERO */}
      <section className="relative h-[320px] overflow-hidden">
        <img
          src={group.image}
          alt={group.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2f6f6b]/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <h1 className="text-3xl md:text-4xl font-serif text-white max-w-2xl">
              {group.title}
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          <p className="text-lg text-[#555]">{group.description}</p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#666]">
            <span>📅 {group.date}</span>
            <span>📍 {group.location}</span>
            <span>💰 {group.price}</span>
          </div>
        </div>
      </section>

      {/* MIT AD */}
      <section className="bg-[#f4f6f5] py-10 ">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-[#2f6f6b] mb-8">
            Mit adhat Neked ez a folyamat?
          </h2>

          <ul className="space-y-3 text-[#444]">
            <li>• Mélyebb megértést önmagadhoz</li>
            <li>• Biztonságos hozzáférést az érzéseidhez</li>
            <li>• Tisztább határokat és kapcsolódásokat</li>
            <li>• Régi minták újraértelmezését</li>
            <li>• Megtapasztalást, hogy nem vagy egyedül</li>
          </ul>
        </div>
      </section>

      {/* KINEK SZÓL */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-[#2f6f6b] mb-8">
            Téged várunk, hogyha ...
          </h2>

          <ul className="space-y-3 text-[#444]">
            <li>• Szeretnél őszintébben kapcsolódni önmagadhoz és másokhoz</li>
            <li>• Vágysz egy biztonságos térre, ahol nem kell megfelelni</li>
            <li>• Nyitott vagy a mély, élményalapú önismereti munkára</li>
          </ul>
        </div>
      </section>

      {/* SZÖVEG BLOKK */}
      <section className="bg-[#f4f6f5] py-10">
        <div className="max-w-3xl mx-auto px-6 text-center text-[#444] leading-relaxed">
          <p>
            Számunkra minden ember története egy{" "}
            <strong>híd: a múlt és a jelen között</strong>, a kimondatlan és a
            kimondható között, és talán a régi önmagad és az új között. A dráma
            nálunk nem technika, hanem találkozás önmagaddal, a kapcsolataiddal,
            a belső szerepeiddel.
          </p>
        </div>
      </section>

      {/* VEZETŐK */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-[#2f6f6b] mb-6">
            Csoportvezetők
          </h2>

          <p className="text-[#444]">
            <strong>Mohácsi Andrea</strong> – pszichodráma vezető, integrál
            szemléletű mentálhigiénés szakember, Metamorphoses meseterepauta,
            Integrative Core Dynamics testorientált szakember
          </p>

          <p className="text-[#444] mt-2">
            <strong>Méth Anna</strong> – pszichodráma asszisztens, jógaoktató
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 p-6 rounded-2xl text-center space-y-4">
        <h2 className="text-xl font-semibold">Jelentkezés</h2>
        <p>Jelentkezés, érdeklődés az alábbi űrlap kitöltésével</p>
        <ul>
          <li>
            <p>Email: hidak.onismeret@gmail.com</p>
          </li>
          <li>
            Facebook oldalunk:{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61587835397317"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Hidak Önmagunkhoz
            </a>
          </li>
          <li>
            {" "}
            <strong>
              Mohácsi Andrea 30/383-9838, Méth Anna 20/526-5144
            </strong>{" "}
          </li>
        </ul>
        <a
          href="IDE_JON_A_GOOGLE_FORM_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-[#2f6f6b] px-6 py-3 text-white hover:bg-gray-800"
        >
          Jelentkezési űrlap
        </a>
      </section>
    </>
  );
}

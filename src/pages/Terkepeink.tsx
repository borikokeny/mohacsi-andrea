// export default function Terkepeink() {
//   return <h1>Terkepeink oldal</h1>;
// }
// export default function MesejaroTerkep() {
//   return <h1>Mesejaro oldal</h1>;
// }
import { client } from "../services/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DatesByMonth from "../components/DatesByMonth";
import Folyo from "../images/Folyo.jpg";

export default function Terkepeink() {
  const [page, setPage] = useState<any>(null);
  const dates = [
    "2025.05.24.",
    "2025.06.21.",
    "2025.07.19.",
    "2025.09.07.",
    "2025.10.12.",
    "2025.11.08.",
    "2025.12.13.",
    "2026.01.24.",
    "2026.02.28.",
    "2026.03.28.",
    "2026.04.25.",
    "2026.05.23.",
    "2026.06.13.",
    "2026.08.29.",
    "2026.09.26.",
    "2026.10.17.",
    "2026.11.14.",
    "2026.12.06",
  ];
  useEffect(() => {
    const fetchPage = async () => {
      const entries = await client.getEntries({
        content_type: "page",
        "fields.slug": "fooldal",
      });

      if (entries.items.length > 0) {
        setPage(entries.items[0]);
      }
    };

    fetchPage();
  }, []);

  if (!page) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* ---------------- HERO SZEKCIÓ ---------------- */}
      <div className="relative h-96 rounded-md overflow-hidden mb-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Folyo})` }}
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative h-full flex items-center px-8">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold text-white mb-3">
              Lásd meg életed mintáit és alakítsd őket tudatosan!
            </h1>

            <div className="h-0.5 bg-white/40 w-32 mb-4" />

            <h2 className="text-white text-lg leading-relaxed">
              A pszichodráma hatékony út az önismerethez, a fejlődéshez és a
              belső harmónia megteremtéséhez.
            </h2>
          </div>
        </div>
      </div>

      {/* ---------------- LEÍRÁS ---------------- */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">
          Pszichodráma Csoport - 2026 szeptembertől
        </h2>

        <h3 className="text-lg">
          180 órás, 18 alkalmas hétvégi önismereti csoport Budapesten
        </h3>

        <p>
          Hogyan igazodunk el önmagunkban, kapcsolatainkban, életünkben, a
          világban? Milyen belső térképek szerint haladunk – és mikor érezzük,
          hogy új irányra, új utakra van szükségünk?
        </p>

        <p>
          Csoportunk ebben az úton levésben kísér – hogy ne csak elindulj, de
          meg is érkezz önmagadhoz. A csoport biztonságos, megtartó tér, ahol új
          mintákat és megoldásokat próbálhatsz ki.
        </p>
        <div className="mt-4">
          <h3 className="font-semibold mb-2">
            Időpontok (havonta egy hétvége):
          </h3>
          {/* <div>
            <h1 className="text-3xl font-bold mb-6">Időpontok</h1>
            <DatesByMonth dates={dates} />
          </div> */}

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              "2026.03.25.",
              "2026.04.25.",
              "2026.05.25.",
              "2026.06.25.",
              "2026.07.25.",
              "2026.08.12.",
              "2026.09.08.",
              "2026.10.13.",
              "2026.11.24.",
              "2026.12.28.",
              "2027.01.28.",
              "2027.02.25.",
              "2027.03.23.",
              "2027.04.13.",
              "2027.05.29.",
              "2027.06.26.",
              "2027.08.17.",
              "2027.09.14.",
              "2027.10.06.",
            ].map((date, i) => (
              <p key={i}>{date}</p>
            ))}
          </div>
        </div>

        <p>
          <strong>Időbeosztás: </strong> 9:00–18:00
        </p>
        <p>
          <strong>Helyszín: </strong> GyöngyHáz Stúdió, Budapest XIII. Váci út
          6.
        </p>
        <p>
          <strong>Díj: </strong> 30.000 Ft/alkalom
        </p>
        <p>
          <strong>Csoportok: </strong> 10–12 fős csoportok, előzetes ismeret nem
          szükséges.
        </p>
        <p>
          <strong>Csoportvezetők: </strong>
          <div className="ms-6 mt-1">
            <li>
              {" "}
              <strong>Mezey Anikó</strong>– kommunikációs tréner, coach, képzett
              családállító
            </li>
            <li>
              <strong>Mohácsi Andrea</strong>– integrál szemléletű
              mentálhigiénés szakember, Metamorphoses meseterapeuta, Integrative
              Core Dynamics szakember, képzett családállító
            </li>
          </div>
        </p>
      </section>

      {/* ---------------- FOLYAMAT LISTA ---------------- */}
      <section className="mb-10">
        <h3 className="font-semibold mb-4 text-xl">Folyamat:</h3>

        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="text-heromenta font-bold">1.</span>
            <p>
              A csoportba való bekerülést díjmentes személyes egyéni beszélgetés
              előzi meg: ismerkedés, kérdések tisztázása, közös munka
              előkészítése.
            </p>
          </li>

          <li className="flex gap-3">
            <span className="text-heromenta font-bold">2.</span>
            <p>
              Az első két alkalom nyitott, a második alkalmon történik az
              elköteleződés, utána zárt csoportként működünk.
            </p>
          </li>

          <li className="flex gap-3">
            <span className="text-heromenta font-bold">3.</span>
            <p>
              A találkozások 3 hetente zajlanak, fokozatosan mélyülő önismereti
              folyamattal.
            </p>
          </li>

          <li className="flex gap-3">
            <span className="text-heromenta font-bold">4.</span>
            <p>
              A 18. alkalmon lezárjuk a folyamatot és összefoglaljuk az együtt
              végzett munkát.
            </p>
          </li>
        </ol>
      </section>

      {/* ---------------- JELENTKEZÉS ---------------- */}
      <section className="mb-12">
        <h3 className="font-semibold mb-2">Jelentkezés:</h3>

        <ul className="list-disc list-inside space-y-1">
          <li>e-mail: terkeponmagamhoz@gmail.com</li>
          <li>Mohácsi Andrea – 30/383-9838, Mezey Anikó 30/991-1849</li>
          <li>
            Ha emailt írsz, adj meg pár információt magadról és feltétlenül
            telefonszámot.
          </li>
        </ul>
      </section>
      <Link to="" className="underline text-blue-600">
        Szórólap letöltése
      </Link>
    </div>
  );
}

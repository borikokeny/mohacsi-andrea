// import { client } from "../services/contentful";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MintChecklist from "../components/MintChecklist";

import Pafrany from "../images/Pafrany.jpg";
import Folyo from "../images/Folyo.jpg";
import Erdo from "../images/Erdo.jpg";
import Csillag from "../images/kiscsillag.png";

export default function Group() {
  // const [page, setPage] = useState<any>(null);

  // useEffect(() => {
  //   const fetchPage = async () => {
  //     const entries = await client.getEntries({
  //       content_type: "page",
  //       "fields.slug": "fooldal",
  //     });

  //     if (entries.items.length > 0) {
  //       setPage(entries.items[0]);
  //     }
  //   };

  //   fetchPage();
  // }, []);

  // if (!page) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* ---------------- HERO SZEKCIÓ ---------------- */}
      <div className="relative h-96 rounded-md overflow-hidden mb-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Pafrany})` }}
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative h-full flex items-center px-8">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold text-white mb-3">
              Lásd meg életed mintáit és alakítsd őket tudatosan!
            </h1>

            <div className="h-0.5 bg-white/40 w-100 mb-4" />

            {/* <h2 className="text-white text-lg leading-relaxed">
              A pszichodráma hatékony út az önismerethez, a fejlődéshez és a
              belső harmónia megteremtéséhez.
            </h2> */}
          </div>
        </div>
      </div>

      {/* ---------------- LEÍRÁS ---------------- */}
      <section className="space-y-4 mb-10">
        <h1 className="text-4xl font-semibold">Hidak Önmagunkhoz</h1>
        <h2 className="text-2xl font-semibold">
          Hétvégi Önismereti Csoportok Budapesten
        </h2>

        {/* <h3 className="text-lg">
          180 órás, 18 alkalmas hétvégi önismereti csoportok Budapesten
        </h3> */}
        <div className="mt-4">
          <a
            href="/latest"
            className=" text-blue-600 underline hover:text-blue-800"
          >
            Aktuális csoportjaink
          </a>
        </div>

        <p>
          Hogyan igazodunk el önmagunkban, kapcsolatainkban, életünkben, a
          világban? Milyen belső térképek szerint haladunk – és mikor érezzük,
          hogy új irányra, új utakra van szükségünk?
        </p>

        <p>
          Csoportjaink ebben az úton levésben kísérnek – hogy ne csak elindulj,
          de meg is érkezz önmagadhoz. A csoport biztonságos, megtartó tér, ahol
          lehetőség nyílik új minták és megoldások kipróbálására.
        </p>
        <p>
          A csoport olyan tér, ahol nem vagy egyedül a történeteddel. A
          kapcsolódás, a tükröződés és a közös jelenlét segít abban, hogy
          láthatóvá válj – a saját tempódban, biztonságos keretek között.
        </p>
        <p>
          A csoport olyan tér, ahol nem vagy egyedül a történeteddel. A
          kapcsolódás, a tükröződés és a közös jelenlét segít abban, hogy
          láthatóvá válj – a saját tempódban, biztonságos keretek között.
        </p>
        <p>
          A folyamatot biztonságos, elfogadó keretek között tartom, ahol minden
          érzésnek, állapotnak és tapasztalatnak helye van.
        </p>

        {/* <p>
          <strong>Időbeosztás: </strong> 9:00–18:00
        </p> */}
        <p>
          <strong>Helyszín: </strong> Budapest (jól megközelíthető helyen)
        </p>
        <p>
          <strong>Csoportok: </strong> 10–12 fős csoportok, előzetes ismeret nem
          szükséges.
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
              A találkozások csoporttól függően 2-4 hetente zajlanak,
              fokozatosan mélyülő önismereti folyamattal.
            </p>
          </li>

          <li className="flex gap-3">
            <span className="text-heromenta font-bold">4.</span>
            <p>
              Az utolsó alkalmon lezárjuk a folyamatot és összefoglaljuk az
              együtt végzett munkát.
            </p>
          </li>
        </ol>
      </section>

      {/* ---------------- KINEK AJÁNLJUK ---------------- */}
      <section className="mb-10">
        <h3 className="font-semibold mb-4">Várunk téged, ha</h3>
        <MintChecklist />
      </section>

      {/* ---------------- JELENTKEZÉS ---------------- */}
      <section className="mb-12">
        <h3 className="font-semibold mb-2">Jelentkezés:</h3>
        <div className="mt-2">
          <a
            href="/latest"
            className=" text-blue-600 underline hover:text-blue-800"
          >
            Aktuális csoportjaink
          </a>
        </div>

        <ul className="mt-3 list-disc list-inside space-y-1">
          <li>e-mail: terkeponmagamhoz@gmail.com</li>
          <li>telefon: Mohácsi Andrea – 30/383-9838</li>
          <li>
            Ha emailt írsz, adj meg pár információt magadról és feltétlenül
            telefonszámot.
          </li>
          <li>
            Kövess minket{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100090615291518"
              target="_blank"
              rel="noopener noreferrer"
              className="font-quicksand text-blue-600 hover:underline"
            >
              Facebook
            </a>{" "}
            oldalunkon a friss információkért!
          </li>
          <li>
            Ha szeretnél a hírlevelünkre feliratkozni, kattints{" "}
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="font-quicksand text-blue-600 hover:underline"
            >
              ide
            </a>{" "}
            !
          </li>
        </ul>
        
      </section>
      {/* <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-aboreto mb-12">Rólam mondták</h2>

        <div className="grid md:grid-cols-3 gap-12 text-herodarkseablue">
         
          <div>
            <p className="text-lg leading-relaxed">
              "Andrea jelenléte biztonságot ad, vele könnyű megnyílni. A közös
              munkánk során olyan felismerésekhez jutottam, amelyek alapjaiban
              változtatták meg az életemhez való hozzáállásom."
            </p>
            <p className="mt-6 font-semibold">Katalin M.</p>
          </div>

          <div>
            <p className="text-lg leading-relaxed">
              "A csoport légköre Andrea mellett támogató és megtartó. Mindig
              figyelmes, pontosan kérdez, és segít meglátni az összefüggéseket,
              amiket egyedül nem vettem volna észre."
            </p>
            <p className="mt-6 font-semibold">Dávid P.</p>
          </div>

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
      </section> */}

      {/* ---------------- KÁRTYÁK RÉSZ ---------------- */}
      <section className="space-y-10">
        {/* 1. Kártya */}
        {/* <Card
          image={Folyo}
          title="Térképeink"
          subtitle="180 órás pszichodráma csoport"
          date="2025. májustól Budapesten"
          link="/terkepeink"
        /> */}

        {/* 2. Kártya */}
        {/* <Card
          image={Pafrany}
          title="Belső Tájakon, közös úton"
          subtitle="180 órás pszichodráma csoport"
          date="2026. februártól Budapesten"
          link="/belso-tajakon"
          reversed
        /> */}

        {/* 3. Kártya */}
        {/* <Card
          image={Erdo}
          title="Mesejáró Térkép"
          subtitle="Egynapos önismereti workshop"
          date="2026. márciustól Budapesten"
          link="/mesejaro-terkep"
        /> */}
      </section>
      <section className="mt-4">
        <p>
          <strong>Gyakran ismételt kérdések</strong>
        </p>
        <div className="ms-6">
          <li>Lemondási feltételek</li>
          <li>Fizetési módok</li>
          <li>Bővebben a pszihodrámáról</li>
        </div>
      </section>
    </div>
  );
}

/* ---------------------------------------------  
   KÁRTYA KOMPONENS  
---------------------------------------------- */
// function Card({ image, title, subtitle, date, link, reversed = false }) {
//   return (
//     <div
//       className={`flex flex-col md:flex-row ${
//         reversed ? "md:flex-row-reverse" : ""
//       }`}
//     >
//       <div className="md:w-1/2 h-64 md:h-auto">
//         <img src={image} className="w-full h-full object-cover" alt="" />
//       </div>

//       <div className="md:w-1/2 bg-heromenta flex flex-col items-center justify-center text-center p-10">
//         <img src={Csillag} alt="" className="w-16 mb-3" />
//         <h2 className="text-4xl mb-2">{title}</h2>
//         <h3 className="mb-3">{subtitle}</h3>
//         <p>{date}</p>

//         <Link to={link} className="border-2 w-64 p-2 px-4 mt-4">
//           Részletek &gt;
//         </Link>
//       </div>
//     </div>
//   );
// }

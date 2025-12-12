// import { client } from "../services/contentful";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Pafrany from "../images/Pafrany.jpg";
// import Folyo from "../images/Folyo.jpg";
// import Erdo from "../images/Erdo.jpg";
// import Csillag from "../images/kiscsillag.png";

// export default function Group() {
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
//     <div className="max-w-6xl mx-auto px-4">
//       <div className="relative h-96">
//         {/* Háttérkép */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${Pafrany})` }}
//         ></div>

//         {/* Átlátszó overlay */}
//         <div className="absolute inset-0 bg-black/30"></div>

//         {/* Tartalom */}
//         <div className="relative h-full flex items-center">
//           <div className="p-8 shadow-md ms-8 max-w-xl">
//             <h1 className="text-3xl font-extrabold text-stone-50 mb-3">
//               Lásd meg életed mintáit és alakítsd őket tudatosan!
//             </h1>
//             <div className="h-0.5 bg-white/50 mb-6" />
//             <h2 className="text-stone-50">
//               A pszichodráma hatékony út az önismerethez, a fejlődéshez és a
//               belső harmónia megteremtéséhez.
//             </h2>
//           </div>
//         </div>
//       </div>

//       {/* <div className="relative">
//    <div
//         className="absolute inset-0 h-96 bg-cover bg-center"
//         style={{ backgroundImage: `url(${Pafrany})` }}
//       >
//         <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
//           <div className="max-w-3xl md:max-w-2xl bg-white/60 backdrop-blur-sm p-6 md:p-10 rounded-md shadow-md">
// <div className="w-2/3 ms-5 pt-5">
//   <h1 className="text-3xl text-stone-50 font-extrabold ">
//           Lásd meg életed mintáit – és alakítsd őket tudatosan!
//         </h1>
//         <h2 className="text-stone-50">
//           A pszichodráma hatékony út az önismerethez, a fejlődéshez és a belső
//           harmónia megteremtéséhez.{" "}
//         </h2>
//         </div>
//           </div>

//         </div>
        
      
//       </div>
//       </div> */}

//       <h2 className="mt-3 text-2xl">Pszichodráma Csoportok</h2>
//       <h3 className="mb-3">
//         180 órás, 18 alkalmas hétvégi önismereti csoportok Budapesten
//       </h3>
//       <p>
//         {" "}
//         Hogyan igazodunk el önmagunkban, kapcsolatainkban, életünkben, a
//         világban? Milyen belső térképek szerint haladunk – és mikor érezzük,
//         hogy új irányra, új utakra van szükségünk?
//       </p>
//       <p className="mt-2">
//         Csoportunk ebben az úton levésben kísér – hogy ne csak elindulj, de meg
//         is érkezz önmagadhoz. Mindezt egy közösen létrehozott, biztonságos
//         térben, az itt és most jelenében. A csoportban támogatást kaphatsz a
//         változtatáshoz, továbblépéshez, fejlődéshez, új mintákat, új
//         megoldásokat kaphatsz és próbálhatsz ki.{" "}
//       </p>
//       <p className="mt-3">
//         <strong>Időbeosztás: </strong>9:00 órától 18:00 óráig
//       </p>

//       <p>
//         <strong>Helyszín: </strong> Budapest (jól megközelíthető helyen)
//       </p>
//       <p>
//         <strong>Csoportok: </strong> A program 10-12 fős csoporttal indul. A
//         jelentkezéshez nincs szükség semmilyen előzetes ismeretre, csak hozd
//         magad!
//       </p>

//       <div className="mt-4">
//         <h3 className="font-semibold mb-4">Folyamat:</h3>

//         <ol className="space-y-4">
//           <li className="flex gap-3">
//             <span className="text-heromenta font-bold">1.</span>
//             <p>
//               A csoportba való bekerülést egy díjmentes személyes egyéni
//               beszélgetés előzi meg, ahol megismerkedünk, lehetőséget adunk
//               további kérdések tisztázására és előkészítjük a közös munkát.
//             </p>
//           </li>

//           <li className="flex gap-3">
//             <span className="text-heromenta font-bold">2.</span>
//             <p>
//               A csoport az első két alkalommal nyitott, a második alkalommal
//               történik az elköteleződés, a harmadik alkalomtól zárt csoportként
//               működik tovább.{" "}
//             </p>
//           </li>

//           <li className="flex gap-3">
//             <span className="text-heromenta font-bold">3.</span>
//             <p>
//               A következő alkalmak során 3 hetente fogunk találkozni. Egyre
//               jobban megismerjük egymást és önmagunkat is.
//             </p>
//           </li>
//           <li className="flex gap-3">
//             <span className="text-heromenta font-bold">3.</span>
//             <p>
//               A 18-ik utolsó találkozáson lezárjuk a folyamatot és
//               összefoglaljuk mi történt velünk ebben az időszakban.
//             </p>
//           </li>
//         </ol>
//       </div>
//       <div>
//         <p className="mt-3">
//           <strong>Jelentkezés: </strong>
//         </p>
//         <ul className="list-disc list-inside space-y-1">
//           <li> e-mail: terkeponmagamhoz@gmail.com</li>
//           <li>telefon: Mohácsi Andrea 30/383-9838</li>
//           <li>
//             Kérünk, ha emailt írsz, írj pár sort magadról, illetve adj meg egy
//             telefonszámot is, hogy minél előbb meg tudjunk keresni.
//           </li>
//         </ul>
//       </div>

//       <p className="mt-4 mb-6">
//         <strong>Bővebb információ és időpontok az alábbi linkeken: </strong>
//       </p>
//       {/* <h1>{page.fields.heroTitle}</h1>
//       {documentToReactComponents(page.fields.tartalom)} */}
//       <div className="">
//         <div className="flex flex-col md:flex-row">
//           <div className="col-6 w-1/2">
//             <img
//               src={Folyo}
//               alt="portrait"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="col-6 bg-heromenta w-1/2 flex flex-col items-center justify-center text-center p-8">
//             <img src={Csillag} alt="" className="w-16 mb-3" />
//             <h1 className="text-4xl">Térképeink</h1>
//             <h2 className="mb-3">180 órás pszichodráma csoport</h2>
//             <p>2025. májustól Budapesten</p>
//             {/* <p className="">{documentToReactComponents(page.fields.tartalom)}</p> */}
//             <Link to="/terkepeink" className="border-2 w-80 p-2 px-4 mt-3">
//               Részletek &gt;
//             </Link>
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row">
//           <div className="col-6 bg-heromenta w-1/2 flex flex-col items-center justify-center text-center p-8">
//             <img src={Csillag} alt="" className="w-16 mb-3" />
//             {/* <h1 className="text-4xl mb-2">{page.fields.heroTitle}</h1> */}
//             <h1 className="text-4xl mb-2">Belső Tájakon, közös úton</h1>
//             <h2 className="mb-3">180 órás pszichodráma csoport</h2>
//             <p>2026. februártól Budapesten</p>
//             <Link to="/belso-tajakon" className="border-2 w-80 p-2 px-4 mt-3">
//               Részletek &gt;
//             </Link>
//             {/* <p className="">{documentToReactComponents(page.fields.tartalom)}</p> */}
//           </div>
//           <div className="col-6 w-1/2">
//             <img src={Pafrany} alt="" />
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row">
//           <div className="col-6 w-1/2">
//             <img
//               src={Erdo}
//               alt="portrait"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="col-6 bg-heromenta w-1/2 flex flex-col items-center justify-center text-center p-8">
//             {/* <h1 className="text-2xl">Hidak Önmagunkhoz</h1> */}
//             <img src={Csillag} alt="" className="w-16 mb-3" />
//             <h1 className="text-4xl">Mesejáró Térkép</h1>
//             <h2 className="mb-3">EGYNAPOS ÖNISMERETI WORKSHOP</h2>
//             <p>2026. márciustól Budapesten</p>
//             {/* <p className="">{documentToReactComponents(page.fields.tartalom)}</p> */}
//             <Link to="/mesejaro-terkep" className="border-2 w-80 p-2 px-4 mt-3">
//               Részletek &gt;
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { client } from "../services/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Pafrany from "../images/Pafrany.jpg";
import Folyo from "../images/Folyo.jpg";
import Erdo from "../images/Erdo.jpg";
import Csillag from "../images/kiscsillag.png";

export default function Group() {
  const [page, setPage] = useState<any>(null);

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
          style={{ backgroundImage: `url(${Pafrany})` }}
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
        <h1 className="text-4xl font-semibold">Hidak Önmagunkhoz</h1>
        <h2 className="text-2xl font-semibold">Pszichodráma Csoportok</h2>

        <h3 className="text-lg">
          180 órás, 18 alkalmas hétvégi önismereti csoportok Budapesten
        </h3>

        <p>
          Hogyan igazodunk el önmagunkban, kapcsolatainkban, életünkben, a
          világban? Milyen belső térképek szerint haladunk – és mikor érezzük,
          hogy új irányra, új utakra van szükségünk?
        </p>

        <p>
          Csoportunk ebben az úton levésben kísér – hogy ne csak elindulj, de
          meg is érkezz önmagadhoz. A csoport biztonságos, megtartó tér, ahol
          új mintákat és megoldásokat próbálhatsz ki.
        </p>

        <p>
          <strong>Időbeosztás: </strong> 9:00–18:00
        </p>
        <p>
          <strong>Helyszín: </strong> Budapest (jól megközelíthető helyen)
        </p>
        <p>
          <strong>Csoportok: </strong> 10–12 fős csoportok, előzetes ismeret
          nem szükséges.
        </p>
      </section>

      {/* ---------------- FOLYAMAT LISTA ---------------- */}
      <section className="mb-10">
        <h3 className="font-semibold mb-4 text-xl">Folyamat:</h3>

        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="text-heromenta font-bold">1.</span>
            <p>
              A csoportba való bekerülést díjmentes személyes egyéni
              beszélgetés előzi meg: ismerkedés, kérdések tisztázása,
              közös munka előkészítése.
            </p>
          </li>

          <li className="flex gap-3">
            <span className="text-heromenta font-bold">2.</span>
            <p>
              Az első két alkalom nyitott, a második alkalmon történik
              az elköteleződés, utána zárt csoportként működünk.
            </p>
          </li>

          <li className="flex gap-3">
            <span className="text-heromenta font-bold">3.</span>
            <p>
              A találkozások 3 hetente zajlanak, fokozatosan mélyülő
              önismereti folyamattal.
            </p>
          </li>

          <li className="flex gap-3">
            <span className="text-heromenta font-bold">4.</span>
            <p>
              A 18. alkalmon lezárjuk a folyamatot és összefoglaljuk az
              együtt végzett munkát.
            </p>
          </li>
        </ol>
      </section>

      {/* ---------------- JELENTKEZÉS ---------------- */}
      <section className="mb-12">
        <h3 className="font-semibold mb-2">Jelentkezés:</h3>

        <ul className="list-disc list-inside space-y-1">
          <li>e-mail: terkeponmagamhoz@gmail.com</li>
          <li>telefon: Mohácsi Andrea – 30/383-9838</li>
          <li>
            Ha emailt írsz, adj meg pár információt magadról és
            feltétlenül telefonszámot.
          </li>
          <li>
            Kövess minket {" "}
  <a
    href="https://www.facebook.com/profile.php?id=100090615291518" 
    target="_blank"
    rel="noopener noreferrer"
    className="font-quicksand text-blue-600 hover:underline"
  >
    Facebook
  </a>
  {" "}oldalunkon a friss információkért!
          </li>
        </ul>
      </section>

      {/* ---------------- KÁRTYÁK RÉSZ ---------------- */}
      <section className="space-y-10">

        {/* 1. Kártya */}
        <Card
          image={Folyo}
          title="Térképeink"
          subtitle="180 órás pszichodráma csoport"
          date="2025. májustól Budapesten"
          link="/terkepeink"
        />

        {/* 2. Kártya */}
        <Card
          image={Pafrany}
          title="Belső Tájakon, közös úton"
          subtitle="180 órás pszichodráma csoport"
          date="2026. februártól Budapesten"
          link="/belso-tajakon"
          reversed
        />

        {/* 3. Kártya */}
        <Card
          image={Erdo}
          title="Mesejáró Térkép"
          subtitle="Egynapos önismereti workshop"
          date="2026. márciustól Budapesten"
          link="/mesejaro-terkep"
        />
      </section>
    </div>
  );
}

/* ---------------------------------------------  
   KÁRTYA KOMPONENS  
---------------------------------------------- */
function Card({ image, title, subtitle, date, link, reversed = false }) {
  return (
    <div className={`flex flex-col md:flex-row ${reversed ? "md:flex-row-reverse" : ""}`}>
      <div className="md:w-1/2 h-64 md:h-auto">
        <img src={image} className="w-full h-full object-cover" alt="" />
      </div>

      <div className="md:w-1/2 bg-heromenta flex flex-col items-center justify-center text-center p-10">
        <img src={Csillag} alt="" className="w-16 mb-3" />
        <h2 className="text-4xl mb-2">{title}</h2>
        <h3 className="mb-3">{subtitle}</h3>
        <p>{date}</p>

        <Link to={link} className="border-2 w-64 p-2 px-4 mt-4">
          Részletek &gt;
        </Link>
      </div>
    </div>
  );
}

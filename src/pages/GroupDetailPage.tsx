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
      <section className="bg-[#f4f6f5] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-[#2f6f6b] mb-8">
            Mit adhat Neked ez a 150 óra?
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
      <section className="py-20">
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
      <section className="bg-[#f4f6f5] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center text-[#444] leading-relaxed">
          <p>
            Számunkra minden ember története egy{" "}
           <strong>híd: a múlt és a jelen között</strong>, a kimondatlan és a
          kimondható között, és talán a régi önmagad és az új között. A dráma
           nálunk nem technika, hanem találkozás önmagaddal, a kapcsolataiddal, a
           belső szerepeiddel.
          </p>
        </div>
      </section>

      {/* VEZETŐK */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-[#2f6f6b] mb-6">
            Csoportvezetők
          </h2>

          <p className="text-[#444]">
            <strong>Mohácsi Andrea</strong> – pszichodráma vezető,
            integrál szemléletű mentálhigiénés szakember, Metamorphoses meseterepauta,
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
         
         <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
           Jelentkezési űrlap
         </button>
       </section>
      {/* <section className="bg-[#4f8f8a] text-white text-center py-24">
        <div className="max-w-xl mx-auto px-6 space-y-4">

          <h2 className="text-2xl font-serif">
            Jelentkezés
          </h2>

          <p className="text-white/80">
            Jelentkezés, érdeklődés az alábbi űrlap kitöltésével
          </p>

          <p className="text-sm">
            Email: hidak.onismeret@gmail.com
          </p>
          <p>Facebook oldalunk:{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61587835397317"
              target="_blank"
              rel="noopener noreferrer"
               className="text-black-600 hover:text-blue-800"
            >
               Hidak Önmagunkhoz
             </a></p>
             <p>{" "}
             <strong>
               Mohácsi Andrea 30/383-9838, Méth Anna 20/526-5144             </strong>{" "}</p>

          <button className="bg-white text-[#2f6f6b] px-6 py-3 rounded-full mt-4">
            Jelentkezési űrlap
          </button>

        </div>
      </section> */}
    </>
  );
}


// import { useParams } from "react-router-dom";
// import type { GroupCardProps } from "../components/GroupCard";
// import { groups } from "../data/groups";

// export default function GroupDetailPage() {
//   const { slug } = useParams();
//   console.log("PARAM SLUG:", slug);
//   const group = groups.find((g) => g.slug === slug);

//   if (!group) {
//     return <div className="p-10">Csoport nem található</div>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
//       {/* HERO */}
//       <section className="space-y-4">
//         <h1 className="text-3xl font-bold">{group.title}</h1>
//         {/* <li>email: {group.email}</li> */}
//         <p className="text-gray-600 text-lg">{group.description}</p>

//         <div className="flex gap-4 text-sm text-gray-500">
//           <span>📅 Indulás {group.date} 9:00 - 18:00 óráig</span>
//           <span>📍 {group.location}</span>
//           <span>💰 {group.price}</span>
//         </div>

//         {/* <button className="mt-4 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
//           Jelentkezem
//         </button> */}
//       </section>

//       {/* KINEK SZÓL */}
//       <section>
//         <h2 className="text-xl font-semibold mb-2">
//           Mit adhat Neked ez a 150 óra?
//         </h2>
//         <ul className="list-disc pl-5 text-gray-600 space-y-1">
//           <li>Mélyebb megértést önmagadhoz</li>
//           <li>Biztonságos hozzáférést az érzéseidhez</li>
//           <li>Tisztább határokat és kapcsolódásokat</li>
//           <li>Régi minták újraértelmezését</li>
//           <li>Megtapasztalást, hogy nem vagy egyedül</li>
//         </ul>
//       </section>

//       {/* MIT KAPSZ */}
//       <section>
//         <h2 className="text-xl font-semibold mb-2">Téged várunk, hogyha ...</h2>
//         <ul className="list-disc pl-5 text-gray-600 space-y-1">
//           <li>Szeretnél őszintébben kapcsolódni önmagadhoz és másokhoz</li>
//           <li>Vágysz egy biztonságos térre, ahol nem kell megfelelni</li>
//           <li>Nyitott vagy a mély, élményalapú önismereti munkára</li>
//         </ul>
//       </section>

//       <section>
//         <p className="text-gray-600">
//           Számunkra minden ember története egy{" "}
//           <strong>híd: a múlt és a jelen között</strong>, a kimondatlan és a
//           kimondható között, és talán a régi önmagad és az új között. A dráma
//           nálunk nem technika, hanem találkozás önmagaddal, a kapcsolataiddal, a
//           belső szerepeiddel.
//         </p>
//       </section>

//       {/* HOGYAN ZAJLIK */}
//       <section>
//         <h2 className="text-xl font-semibold mb-2">Csoportvezetők</h2>
//         <p className="text-gray-600">
//           <strong>Mohácsi Andrea -</strong> pszihodráma vezető, integrál
//           szemléletű mentálhigiénés szakember, Metamorphoses meseterepauta,
//           Integrative Core Dynamics testorientált szakember
//         </p>
//         <p className="text-gray-600">
//           <strong>Méth Anna -</strong> pszihodráma asszisztens, jógaoktató
//         </p>
//       </section>

//       {/* CTA */}
//       <section className="bg-gray-100 p-6 rounded-2xl text-center space-y-4">
//         <h2 className="text-xl font-semibold">Jelentkezés</h2>
//         <p>Jelentkezés, érdeklődés az alábbi űrlap kitöltésével</p>
//         <ul>
//           <li>
//             <p>Email: hidak.onismeret@gmail.com</p>
//           </li>
//           <li>
//             Facebook oldalunk:{" "}
//             <a
//               href="https://www.facebook.com/profile.php?id=61587835397317"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:text-blue-800"
//             >
//               Hidak Önmagunkhoz
//             </a>
//           </li>
//           <li>
//             {" "}
//             <strong>
//               Mohácsi Andrea 30/383-9838, Méth Anna 20/526-5144
//             </strong>{" "}
//           </li>
//         </ul>
//         {/* <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
//           Jelentkezem a csoportra
//         </button> */}
//         <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
//           Jelentkezési űrlap
//         </button>
//       </section>
//     </div>
//   );
// }

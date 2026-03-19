import { useParams } from "react-router-dom";
import type { GroupCardProps } from "../components/GroupCard";
import { groups } from "../data/groups";

// const groups: GroupCardProps[] = [
//   {
//     title: "Önismereti csoport nőknek",
//     description:
//       "Egy támogató közeg, ahol mélyebb kapcsolatba kerülhetsz önmagaddal.",
//     date: "Kedd 18:00 – indul: Okt. 10.",
//     location: "Online (Zoom)",
//     price: "45 000 Ft / 8 alkalom",
//     status: "open",
//     slug: "onismereti-noknek",
//   },
// ];

export default function GroupDetailPage() {
  
  const { slug } = useParams();
console.log("PARAM SLUG:", slug);
  const group = groups.find((g) => g.slug === slug);

  if (!group) {
    return <div className="p-10">Csoport nem található</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
      
      {/* HERO */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">{group.title}</h1>

        <p className="text-gray-600 text-lg">{group.description}</p>

        <div className="flex gap-4 text-sm text-gray-500">
          <span>📅 {group.date}</span>
          <span>📍 {group.location}</span>
          <span>💰 {group.price}</span>
        </div>

        <button className="mt-4 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
          Jelentkezem
        </button>
      </section>

      {/* KINEK SZÓL */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Kinek szól?</h2>
        <p className="text-gray-600">
          Azoknak, akik szeretnének mélyebb önismeretre szert tenni,
          és egy támogató közegben dolgozni saját kérdéseiken.
        </p>
      </section>

      {/* MIT KAPSZ */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Mit kapsz?</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Biztonságos, elfogadó tér</li>
          <li>Gyakorlati önismereti eszközök</li>
          <li>Csoportos megosztás és támogatás</li>
        </ul>
      </section>

      {/* HOGYAN ZAJLIK */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Hogyan zajlik?</h2>
        <p className="text-gray-600">
          A csoport heti rendszerességgel találkozik, vezetett
          gyakorlatokkal és beszélgetésekkel.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 p-6 rounded-2xl text-center space-y-4">
        <h2 className="text-xl font-semibold">Szeretnél csatlakozni?</h2>
        <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
          Jelentkezem a csoportra
        </button>
      </section>
    </div>
  );
}
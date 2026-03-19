import GroupCard from "../components/GroupCard";
import type { GroupCardProps } from "../components/GroupCard";
import { groups } from "../data/groups";

export default function AktualisCsoportok() {
  // const groups: GroupCardProps[] = [
  //   {
  //     title: "Hidak Önmagunkhoz - 150 órás önismereti pszihodráma csoport",
  //     description:
  //       "Biztonságban kapcsolódni úgy, hogy lehetek önmagam",
  //     date: "2026. április",
  //     location: "Budapest belváros",
  //     price: "33 000 Ft/alkalom (3300 Ft / óra)",
  //     status: "open",
  //     slug: "önismereti-pszihodráma",
  //   },
  //   {
  //     title: "Nem vagyok elkésve - önismereti csoport fiatal felnőtteknek",
  //     description:
  //       "Van egy hely, ahol nem kell erősnek lenned és egy út, ami elvezet ahhoz, aki valójában vagy.",
  //     date: "2026. április",
  //     location: "Budapest belváros",
  //     price: "20 000 Ft / alkalom (6 alkalom)",
  //     status: "soon",
  //     slug: "fiatal-felnott-csoport",
  //   },
  // ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-bold">Aktuális csoportok</h1>

      {groups.map((group) => (
        <GroupCard key={group.slug} {...group} />
      ))}
    </div>
  );
}

// import GroupCard, { GroupCardProps } from "../components/GroupCard";

// export default function AktualisCsoportok() {
//   const groups = [
//     {
//       title: "Önismereti csoport nőknek",
//       description:
//         "Egy támogató közeg, ahol mélyebb kapcsolatba kerülhetsz önmagaddal.",
//       date: "Kedd 18:00 – indul: Okt. 10.",
//       location: "Online (Zoom)",
//       price: "45 000 Ft / 8 alkalom",
//       status: "open",
//       slug: "onismereti-noknek",
//     },
//     {
//       title: "Szülői támogató csoport",
//       description:
//         "Segít feldolgozni a mindennapi nehézségeket és erőt ad.",
//       date: "Csütörtök 17:00 – indul: Nov. 2.",
//       location: "Budapest",
//       price: "40 000 Ft / 6 alkalom",
//       status: "soon",
//       slug: "szuloi-tamogato",
//     },
//   ];

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
//       <h1 className="text-2xl font-bold">Aktuális csoportok</h1>

//       {groups.map((group) => (
//         <GroupCard key={group.slug} {...group} />
//       ))}
//     </div>
//   );
// }
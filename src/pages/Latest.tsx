import GroupCard from "../components/GroupCard";
import type { GroupCardProps } from "../components/GroupCard";
import { groups } from "../data/groups";

export default function AktualisCsoportok() {
  
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      <h1 className="text-3xl font-serif text-[#2f6f6b] text-center">
  Aktuális csoportok
</h1>

      {groups.map((group) => (
        <GroupCard key={group.slug} {...group} />
      ))}
    </div>
  );
}
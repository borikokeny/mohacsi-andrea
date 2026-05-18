import { useState } from "react";

export default function FAQGroup() {
  // const [open, setOpen] = useState(null);
  const [open, setOpen] = useState<number | null>(null);

  const items = [
    {
      q: "Milyen problémákkal lehet hozzám fordulni?",
      a: "Bármilyen élethelyzettel, ahol elakadás, bizonytalanság vagy változás iránti igény jelenik meg.",
    },
    {
      q: "Kell konkrét problémával érkezni?",
      a: "Nem, elég a kíváncsiság és a nyitottság.",
    },
    {
      q: "Mennyire aktív a segítő?",
      a: "Jelenléttel, kérdésekkel és támogatással kísérem a folyamatot.",
    },
    {
      q: "Gyors eredményekre lehet számítani?",
      a: "Ez egy mélyebb folyamat, nem gyors megoldás.",
    },
  ];

  return (
    <section className="py-8 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-2xl font-serif text-center text-[#2f6f6b] mb-10">
          Gyakran ismételt kérdések
        </h2>

        <div className="divide-y">

          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-4 flex justify-between items-center"
              >
                <span>{item.q}</span>
                <span>{open === i ? "−" : "+"}</span>
              </button>

              {open === i && (
                <p className="pb-4 text-[#555]">
                  {item.a}
                </p>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
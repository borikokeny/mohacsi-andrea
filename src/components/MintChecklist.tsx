import React from "react";

/**
 * MintChecklist
 * - Tailwind CSS osztályokat használ (a te configodban van `heromenta`).
 * - Mobilon és asztalon is jól néz ki, accessible markup (role/list).
 */

const items = [
  "érdekel, hogy mik akadályoznak és mely erőforrásaid segítenek céljaid elérésében",
  "szeretnéd megismerni kapcsolati mintázataidat, kiegyensúlyozottabb kapcsolatokra vágysz",
  "nyitott vagy új megoldási módok megtalálására, kipróbálására",
  "szeretnél többet megtudni önmagadról, ezáltal a környezetedről, saját magad működéséről",
  "szeretnél közelebb kerülni valódi önmagadhoz, saját kezedbe szeretnéd venni az életed irányítását",
  "olyan biztonságos helyet keresel, ahol kipróbálhatsz különböző szerepeket, ahol az lehetsz, aki vagy",
  "szeretnél egy olyan elfogadó csoporthoz tartozni, ahol megtapasztalhatod, hogy a problémáiddal nem vagy egyedül",
  "szeretnéd az érzéseidet tisztán kommunikálni, a saját igényeidet kifejezni, és adott helyzetekben határt húzni",
  "szeretnél aktívan tenni azért, hogy az életed alakítója, irányítója lehess",
  "szeretnéd megtapasztalni a spontán, felszabadult játék örömét és átélni saját alkotó aktivitásodat",
  "az elemi kíváncsiság és a fejlődés vágya mozgat, érdekel, hogyan formálhatod tudatosabban az életed",
];

export default function MintChecklist({
  useStar = false,
  className = "",
}: {
  useStar?: boolean;
  className?: string;
}) {
  // Icon: pipa (default) vagy csillag (useStar=true)
  const Icon = ({ title = "jelölő" }: { title?: string }) =>
    useStar ? (
      // csillag ikon
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="block"
      >
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.17L12 18.896 4.664 23.167l1.402-8.17L.132 9.21l8.2-1.192z" />
      </svg>
    ) : (
      // pipa ikon
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="block"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );

  return (
    <ul
      role="list"
      className={`space-y-3 ${className}`}
      aria-label="Érdekel lista"
    >
      {items.map((text, i) => (
        <li key={i} className="flex items-start gap-4">
          {/* ikon körben */}
          <span
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-heromenta bg-heromenta/20 mt-1"
            aria-hidden="true"
            title={useStar ? "csillag" : "ellenőrzés"}
          >
            <Icon />
          </span>

          {/* szöveg */}
          <span className="text-base leading-relaxed">
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
}

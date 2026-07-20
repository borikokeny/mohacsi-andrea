import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#f4f6f5] text-[#444] mt-0 sm:mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-16 grid md:grid-cols-3 gap-6 md:gap-12">
        {/* BAL – BRAND */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg text-[#2f6f6b]">Mohácsi Andrea</h3>
          <p className="text-sm leading-relaxed">
            Integratív szemléletű mentálhigiénés kísérés egyéni és csoportos
            folyamatokban.
          </p>
        </div>

        {/* KÖZÉP – NAV */}
        <div className="space-y-3 text-sm"></div>

        {/* JOBB – KAPCSOLAT */}
        <div className="space-y-3 text-sm">
          <p className="font-medium text-[#2f6f6b]">Kapcsolat</p>

          <ul className="space-y-2">
            <li>Email: hidak.onismeret@gmail.com</li>
            <li>Telefon: +36 30 383 9838</li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61587835397317"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook oldal
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ALSÓ SOR */}
      <div className="border-t border-[#e0e0e0]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#777] gap-4">
          <p>© {new Date().getFullYear()} Mohácsi Andrea</p>

          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Impresszum
            </a>
            <Link to="/adatkezelesi-tajekoztato" className="hover:underline">
              Adatvédelem
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

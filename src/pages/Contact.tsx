import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 md:py-20">
      {/* ---------- CÍM ---------- */}

      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-aboreto text-[#48969f]">Kapcsolat</h1>
        <div className="w-20 h-[2px] bg-gray-500 mx-auto mt-5"></div>
        <p className="mt-5 text-xl text-herodarkseablue leading-relaxed">
          Ha kérdése van, szeretne jelentkezni egyéni folyamatra vagy csoportra,
          illetve szeretne többet megtudni a lehetőségekről, keressen
          bizalommal.
        </p>

  
      </div>
      <div></div>
      <div className="mt-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        {/* ================= BAL OLDAL ================= */}

        <section className="bg-[#f6fbfa] rounded-3xl p-10 shadow-sm border border-[#edf6f5]">
          <h2 className="text-3xl font-aboreto text-center text-[#48969f] mb-6">
            Hidak Önmagunkhoz hírlevél
          </h2>

          <p className="text-center text-gray-700 leading-relaxed">
            Időről időre új önismereti csoportokat, pszichodráma alkalmakat,
            workshopokat, valamint szakmai írásokat és gondolatokat osztok meg.
          </p>

          <p className="text-center text-gray-700 leading-relaxed font-semibold mt-6 mb-10">
            Ha szeretne ezekről elsőként értesülni, iratkozzon fel a értesítőre.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Név"
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-heromenta"
            />

            <input
              type="email"
              placeholder="E-mail cím"
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-heromenta"
            />

            <button
              type="submit"
              className="bg-heromenta text-white font-semibold py-3 rounded-xl hover:bg-heroturquoise transition"
            >
              Feliratkozom
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            Adatait bizalmasan kezelem, harmadik félnek nem adom át.
          </p>
        </section>

        {/* ================= JOBB OLDAL ================= */}

        <div className="space-y-8">
          <h2 className="text-3xl mt-10 font-aboreto text-center text-[#48969f]">
            Elérhetőségek
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">E-mail</h3>

              <a
                href="mailto:hidak.onismeret@gmail.com"
                className="text-sm text-herodarkseablue hover:text-heromenta transition"
              >
                hidak.onismeret@
                <wbr />
                gmail.com
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Telefon</h3>

              <a
                href="tel:+36303839838"
                className="text-herodarkseablue hover:text-heromenta transition"
              >
                Mohácsi Andrea
                <br />
                +36 30 383 9838
              </a>
            </div>
          </div>

          {/* KÖZÖSSÉGI MÉDIA */}

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl  text-center text-[#48969f] mb-6">
              Szeretettel várom online is!
            </h3>

            <div className="flex justify-center gap-14">
              <a
                href="https://facebook.com/profile.php?id=61587835397317"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#e9f5f4] flex items-center justify-center mx-auto group-hover:bg-heromenta transition">

                  <FontAwesomeIcon
                    icon={faFacebook}
                    className=" text-herodarkseablue group-hover:text-white transition"
                  />
                </div>

                <p className="mt-3">Facebook</p>
              </a>

              <a
                href="https://instagram.com/IDEJONALINK"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#e9f5f4] flex items-center justify-center mx-auto group-hover:bg-heromenta transition">
            
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-herodarkseablue group-hover:text-white transition"
                  />
                </div>

                <p className="mt-3">Instagram</p>
              </a>
            </div>

            {/* <p className="text-center text-gray-500 mt-8">
              Szeretettel várom online is!
            </p> */}
          </div>
        </div>
      </div>

      {/* ---------- ZÁRÓ GONDOLAT ---------- */}

      <p className="text-center text-gray-500 italic mt-20">
        Minden kapcsolat egy első beszélgetéssel kezdődik.
      </p>
    </div>
  );
}

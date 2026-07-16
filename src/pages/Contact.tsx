export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* ---------- CÍM ---------- */}

      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-aboreto text-[#48969f]">Kapcsolat</h1>

        <p className="mt-8 text-xl text-herodarkseablue leading-relaxed">
          Ha kérdése van, szeretne jelentkezni egyéni folyamatra vagy csoportra,
          illetve szeretne többet megtudni a lehetőségekről, keressen
          bizalommal.
        </p>

        <div className="w-20 h-[2px] bg-heromenta mx-auto mt-10"></div>
      </div>

      {/* ---------- HÍRLEVÉL ---------- */}

      <section className="mt-20 bg-[#f6fbfa] rounded-3xl p-10 sm:p-14">
        <h2 className="text-3xl font-aboreto text-center text-[#48969f] mb-6">
          Hírlevél
        </h2>

        <p className="max-w-2xl mx-auto text-center text-gray-700 leading-relaxed mb-10">
          Szeretne értesülni az induló csoportokról és programokról?
          <br />
          <br />
          Időről időre új önismereti csoportokat, pszichodráma alkalmakat,
          workshopokat és szakmai írásokat osztok meg. Ha szeretne ezekről
          elsőként értesülni, iratkozzon fel az értesítőre.
        </p>

        <form className="max-w-lg mx-auto flex flex-col gap-5">
          <input
            type="text"
            placeholder="Név"
            className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-heromenta"
          />

          <input
            type="email"
            placeholder="E-mail cím"
            className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-heromenta"
          />

          <button
            type="submit"
            className="bg-heromenta text-herodarkseablue font-semibold py-3 rounded-md hover:bg-heroturquoise transition"
          >
            Feliratkozom
          </button>
        </form>
      </section>

      {/* ---------- ELÉRHETŐSÉGEK ---------- */}

      <section className="mt-20">
        <h2 className="text-3xl font-aboreto text-center text-[#48969f] mb-12">
          Elérhetőségek
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">E-mail</h3>

            <a
              href="mailto:terkeponmagamhoz@gmail.com"
              className="text-herodarkseablue hover:text-heromenta transition"
            >
              hidak.onismeret@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Telefon</h3>

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
      </section>

      {/* ---------- ZÁRÓ GONDOLAT ---------- */}

      <p className="text-center text-gray-500 italic mt-20">
        Minden kapcsolat egy első beszélgetéssel kezdődik.
      </p>
    </div>
  );
}

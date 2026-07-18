export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* ---------- CÍM ---------- */}

      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-aboreto text-[#48969f]">Kapcsolat</h1>
<div className="w-20 h-[2px] bg-purple-800 mx-auto mt-5"></div>
        <p className="mt-5 text-xl text-herodarkseablue leading-relaxed">
          Ha kérdése van, szeretne jelentkezni egyéni folyamatra vagy csoportra,
          illetve szeretne többet megtudni a lehetőségekről, keressen
          bizalommal.
        </p>

        {/* <div className="w-20 h-[2px] bg-heromenta mx-auto mt-10"></div> */}
      </div>
      <div></div>
      <div className="mt-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">

  {/* ================= BAL OLDAL ================= */}

  <section className="bg-[#f6fbfa] rounded-3xl p-10 shadow-sm border border-[#edf6f5]">

    <h2 className="text-3xl font-aboreto text-center text-[#48969f] mb-6">
      Hidak Önmagunkhoz hírlevél
    </h2>

    <p className="text-center font-semibold text-gray-800 mb-6">
      Szeretne elsőként értesülni az induló programokról?
    </p>

    <p className="text-center text-gray-700 leading-relaxed">
      Időről időre új önismereti csoportokat,
      pszichodráma alkalmakat, workshopokat,
      valamint szakmai írásokat és gondolatokat osztok meg.
    </p>

    <p className="text-center text-gray-700 leading-relaxed mt-6 mb-10">
      Ha szeretne ezekről elsőként értesülni,
      iratkozzon fel a hírlevélre.
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

    <h2 className="text-3xl font-aboreto text-center text-[#48969f]">
      Elérhetőségek
    </h2>

    <div className="grid sm:grid-cols-2 gap-6">

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">

        <h3 className="text-xl font-semibold mb-4">
          E-mail
        </h3>

        <a
          href="mailto:hidak.onismeret@gmail.com"
          className="text-herodarkseablue hover:text-heromenta transition"
        >
          hidak.onismeret@gmail.com
        </a>

      </div>


      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">

        <h3 className="text-xl font-semibold mb-4">
          Telefon
        </h3>

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

      <h3 className="text-xl font-semibold text-center mb-6">
        Kövessen a közösségi médiában
      </h3>

      <div className="flex justify-center gap-14">

        <a
          href="https://facebook.com/profile.php?id=61587835397317"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-center"
        >

          <div className="w-14 h-14 rounded-full bg-[#e9f5f4] flex items-center justify-center mx-auto group-hover:bg-heromenta transition">

            {/* Facebook ikon */}

            ...

          </div>

          <p className="mt-3">
            Facebook
          </p>

        </a>


        <a
          href="https://instagram.com/IDEJONALINK"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-center"
        >

          <div className="w-14 h-14 rounded-full bg-[#e9f5f4] flex items-center justify-center mx-auto group-hover:bg-heromenta transition">

            {/* Instagram ikon */}

            ...

          </div>

          <p className="mt-3">
            Instagram
          </p>

        </a>

      </div>

      <p className="text-center text-gray-500 mt-8">
        Szeretettel várom online is!
      </p>

    </div>

  </div>

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
              href="mailto:hidak.onismeret@gmail.com"
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
      {/* ---------- KÖZÖSSÉGI MÉDIA ---------- */}

      <section className="mt-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
          <h2 className="text-2xl font-aboreto text-center text-[#48969f]">
            Kapcsolódjunk online is
          </h2>

          <p className="max-w-2xl mx-auto text-center text-gray-600 leading-relaxed mt-5">
            A Facebook- és Instagram-oldalon szakmai gondolatokat, induló
            csoportokat, eseményeket és aktualitásokat osztok meg.
          </p>

          <div className="flex justify-center gap-16 mt-10">
            {/* FACEBOOK */}

            <a
              href="https://facebook.com/profile.php?id=61587835397317"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#e9f5f4] flex items-center justify-center mx-auto transition group-hover:bg-heromenta">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-7 h-7 fill-[#48969f] group-hover:fill-white transition"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91V127.36c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72V195.3H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </div>

              <p className="mt-4 text-herodarkseablue font-medium">Facebook</p>
            </a>

            {/* INSTAGRAM */}

            <a
              href="https://instagram.com/IDEJONALINK"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#e9f5f4] flex items-center justify-center mx-auto transition group-hover:bg-heromenta">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-7 h-7 fill-[#48969f] group-hover:fill-white transition"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zM398.8 80c-11.1-28-33-49.9-61-61C309.8 8 224 8 224 8S138.2 8 110.2 19c-28 11.1-49.9 33-61 61C38 108.2 38 224 38 224s0 115.8 11.2 143.8c11.1 28 33 49.9 61 61C138.2 440 224 440 224 440s85.8 0 113.8-11.2c28-11.1 49.9-33 61-61C410 339.8 410 224 410 224s0-115.8-11.2-143.8z" />
                </svg>
              </div>

              <p className="mt-4 text-herodarkseablue font-medium">Instagram</p>
            </a>
          </div>

          <p className="text-center text-gray-500 mt-10">
            Szeretettel várom online is!
          </p>
        </div>
      </section>

      {/* ---------- ZÁRÓ GONDOLAT ---------- */}

      <p className="text-center text-gray-500 italic mt-20">
        Minden kapcsolat egy első beszélgetéssel kezdődik.
      </p>
    </div>
  );
}

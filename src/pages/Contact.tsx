export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 font-quicksand">

      {/* ----------- OLDAL CÍM ----------- */}
      <h1 className="text-4xl font-aboreto text-center text-[#48969f] mb-10">
        Kapcsolat & Hírlevél
      </h1>

      {/* ----------- HÍRLEVÉL FELIRATKOZÁS ----------- */}
      <section className="bg-white border border-heromenta/60 rounded-lg p-8 shadow-sm">

        <h2 className="text-2xl font-aboreto text-center text-[#48969f] mb-4">
          Iratkozz fel hírlevelünkre
        </h2>

        <p className="text-center text-gray-700 max-w-xl mx-auto mb-6">
          Elsőként értesülhetsz új csoportokról, programokról és 
          pszichodráma-műhelyekről. Havonta egyszer küldünk friss híreket — spam nélkül.
        </p>

        {/* ŰRLAP */}
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Neved"
            className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-heromenta"
          />

          <input
            type="email"
            placeholder="Email címed"
            className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-heromenta"
            required
          />

          <button
            type="submit"
            className="bg-heromenta text-herodarkseablue font-semibold py-3 rounded-md hover:bg-heroturquoise transition"
          >
            Feliratkozom
          </button>
        </form>
      </section>

      {/* ----------- ELÉRHETŐSÉGEK ----------- */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-aboreto text-[#48969f] mb-4">Elérhetőségek</h2>

        <p className="mb-2">
          <strong>Email: </strong> terkeponmagamhoz@gmail.com
        </p>

        <p className="mb-2">
          <strong>Telefon: </strong> Mohácsi Andrea 30/383-9838
        </p>
      </section>

    </div>
  );
}

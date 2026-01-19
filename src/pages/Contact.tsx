// export default function Contact() {
//   return (
// <div className="max-w-4xl mx-auto px-6 py-12">
//   <div className="bg-heromenta/30 border border-heromenta rounded-lg p-8 md:p-12 text-center">
//     <h2 className="text-3xl font-aboreto mb-4">
//       Iratkozz fel hírlevelünkre
//     </h2>
//     <p className="text-lg font-quicksand mb-6">
//       Hasznos önismereti tartalmak, friss hírek és közelgő csoportok elsőként a postaládádban.
//     </p>

//     {/* INPUT + BUTTON */}
//     <form className="flex flex-col sm:flex-row gap-4 justify-center">
//       <input
//         type="email"
//         placeholder="Add meg az email címed"
//         className="w-full sm:w-2/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none 
//                    focus:ring-2 focus:ring-heromenta font-quicksand"
//         required
//       />

//       <button
//         type="submit"
//         className="px-6 py-3 bg-heromenta text-herodarkseablue font-semibold rounded-md 
//                    hover:bg-heroturquoise transition"
//       >
//         Feliratkozom
//       </button>
//     </form>

//     {/* Adatkezelési megjegyzés */}
//     <p className="text-sm text-gray-600 mt-4 font-quicksand">
//       A feliratkozással elfogadod az adatkezelési tájékoztatónkat.
//     </p>
//   </div>
// </div>
//   )
  

// }
export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 font-quicksand">

      {/* ----------- OLDAL CÍM ----------- */}
      <h1 className="text-4xl font-aboreto text-center mb-10">
        Kapcsolat & Hírlevél
      </h1>

      {/* ----------- HÍRLEVÉL FELIRATKOZÁS ----------- */}
      <section className="bg-white border border-heromenta/60 rounded-lg p-8 shadow-sm">

        <h2 className="text-2xl font-aboreto text-center mb-4">
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
        <h2 className="text-2xl font-aboreto mb-4">Elérhetőségek</h2>

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

import { useEffect, useState } from "react";
import { client } from "../services/contentful";
import { Link } from "react-router-dom";
import Terepauta from "../images/terepauta.jpg";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function About() {
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    client.getEntries({
      content_type: "page",
      "fields.slug": "rolam"
    })
    .then((res) => setPage(res.items[0]))
    .catch(console.error);
  }, []);

  if (!page) return <p>Betoltes...</p>;

  const { title, tartalom } = page.fields;

  return (
    <div>
            <section className="w-5/6 mx-auto bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 italic mb-2">Rólam</p>

          <h2 className="text-3xl font-semibold mb-6">Mohácsi Andrea</h2>

          <p className="text-gray-700 leading-relaxed mb-10">
            Nem hiszek abban, hogy az emberi nehézségek gyors megoldásokkal kezelhetők. A tapasztalatom szerint a valódi változás akkor indul el, amikor van tér megállni, ránézni arra, ami belül történik, és mindezt nem egyedül kell hordozni.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            Integratív szemlélettel dolgozom, amelyben a mentálhigiénés, pszichológiai megközelítések, az érzelmi folyamatok, a test jelzései és a belső narratívák egyaránt fontos szerepet kapnak. A közös munka során a megértés, az önreflexió és a belső biztonság erősítése áll a középpontban.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">Azok fordulnak hozzám, akik gyakran „jól működnek” a mindennapokban, mégis feszültséget, ürességet vagy elakadást élnek meg. Akik sokat gondolkodnak, de nehezebben férnek hozzá az érzéseikhez, vagy akik már kipróbáltak több módszert, mégsem érzik, hogy valóban közelebb kerültek volna önmagukhoz.</p>
          <p className="text-gray-700 leading-relaxed mb-10">A közös munkában fontos számomra a kiszámítható keret, az érzelmi biztonság és az együtt gondolkodás. Nem ígérek gyors változást, viszont lehetőséget kínálok arra, hogy a belső folyamatok érthetőbbé, megtarthatóbbá váljanak, és a kliens fokozatosan másképp tudjon jelen lenni a saját életében.</p>
          {/* <Link to="/about" className="border-2 w-80 p-2 px-4 mt-3">
            Tovább &gt;
          </Link> */}

          {/* <p className="text-gray-500 mb-10">-----&gt;</p> */}

          <div className="flex justify-center mt-4">
            <img
              src={Terepauta}
              alt="Mohácsi Andrea"
              className="w-full max-w-md rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>
        {/* {page.fields.kep && (
      <img
        src={page.fields.kep.fields.file.url}
        alt={title}
        style={{
          width: "50%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "20px"
        }}
      />
    )}
      <h1>{title}</h1>
      <div>{documentToReactComponents(tartalom)}</div> */}
      
    </div>
  );
}

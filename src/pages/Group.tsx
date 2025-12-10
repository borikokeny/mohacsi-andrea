import { client } from "../services/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pafrany from "../images/Pafrany.jpg";
import Folyo from "../images/Folyo.jpg";
import Erdo from "../images/Erdo.jpg";
import Csillag from "../images/kiscsillag.png";

export default function Group() {
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    const fetchPage = async () => {
      const entries = await client.getEntries({
        content_type: "page",
        "fields.slug": "fooldal", // a te valós slug értéked
      });

      if (entries.items.length > 0) {
        setPage(entries.items[0]);
      }
    };

    fetchPage();
  }, []);

  if (!page) return <div>Loading...</div>;

  return (
    <div className="">
      {/* <h1>{page.fields.heroTitle}</h1>
      {documentToReactComponents(page.fields.tartalom)} */}
      <div className="flex flex-col md:flex-row">
        <div className="col-6 w-1/2">
          <img
            src={Folyo}
            alt="portrait"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="col-6 bg-heromenta w-1/2 flex flex-col items-center justify-center text-center p-8">
          <img src={Csillag} alt="" className="w-16 mb-3" />
          <h1 className="text-4xl">Térképeink</h1>
          <h2 className="mb-3">180 órás pszichodráma csoport</h2>
          <p>2025. májustól</p>
          {/* <p className="">{documentToReactComponents(page.fields.tartalom)}</p> */}
          <Link to="/individual" className="border-2 w-80 p-2 px-4 mt-3">
            Részletek &gt;
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="col-6 bg-heromenta w-1/2 flex flex-col items-center justify-center text-center p-8">
          <img src={Csillag} alt="" className="w-16 mb-3" />
          {/* <h1 className="text-4xl mb-2">{page.fields.heroTitle}</h1> */}
          <h1 className="text-4xl mb-2">Belső Tájakon, közös úton</h1>
          <h2 className="mb-3">180 órás pszichodráma csoport</h2>
          <p>2026. februártól</p>
          <Link to="/group" className="border-2 w-80 p-2 px-4 mt-3">
            Részletek &gt;
          </Link>
          {/* <p className="">{documentToReactComponents(page.fields.tartalom)}</p> */}
        </div>
        <div className="col-6 w-1/2">
          <img src={Pafrany} alt="" />
        </div>
      </div>
            <div className="flex flex-col md:flex-row">
        <div className="col-6 w-1/2">
          <img
            src={Erdo}
            alt="portrait"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="col-6 bg-heromenta w-1/2 flex flex-col items-center justify-center text-center p-8">
          {/* <h1 className="text-2xl">Hidak Önmagunkhoz</h1> */}
          <img src={Csillag} alt="" className="w-16 mb-3" />
          <h1 className="text-4xl">Mesejáró Térkép</h1>
          <h2 className="mb-3">EGYNAPOS ÖNISMERETI WORKSHOP</h2>
          <p>2026. márciustól</p>
          {/* <p className="">{documentToReactComponents(page.fields.tartalom)}</p> */}
          <Link to="/individual" className="border-2 w-80 p-2 px-4 mt-3">
            Részletek &gt;
          </Link>
        </div>
      </div>
    </div>
  );
}

// export default function Group() {
//   return <h1>Csoportos oldal – a csoportos terápia kerül ide</h1>;
// }

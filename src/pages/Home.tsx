import { client } from "../services/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Plant from "../images/Plant.jpg";
import Portre from "../images/Portre.jpg";
import Part from "../images/Part.jpg";
import Pafrany from "../images/Pafrany.jpg";
import Folyo from "../images/Folyo.jpg";
import Erdo from "../images/Erdo.jpg";
import Hullam from "../images/Hullam.jpg";
import Terepauta from "../images/terepauta.jpg";
import Csillag from "../images/kiscsillag.png";
import Logo from "../images/Logo.png";


export default function Home() {
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
          <div className=" bg-heroseablue w-1/2 flex justify-center items-center p-12">
            <img
              src={Portre}
              alt="portrait"
              className="w-full h-full object-cover"
            />
        </div>
        {/* <div className="col-6 w-1/2">
          <img src={Plant} alt="" />
        </div> */}
        <div className="col-6 bg-heromenta w-1/2 flex flex-col items-center justify-center text-center p-8">
          {/* <h1 className="text-2xl">Hidak Önmagunkhoz</h1> */}
          <img src={Csillag} alt="" className="w-16 mb-3"/>
          <h1 className="text-2xl">Mohácsi Andrea</h1>
          <h2 className="mb-6">integrál szemléletű mentálhigiénés szakember</h2>
          {/* <p className="">
            Csoportos és egyéni foglalkozásaink segítségével kapcsolódhatsz
            saját életedhez, ránézhetsz élethelyzeteidre. Mindezt egy közösen
            létrehozott, biztonságos térben
          </p> */}
          {/* <p className="">{documentToReactComponents(page.fields.tartalom)}</p> */}
          <p className="mb-8">
            "Életünk során bármikor kerülhetünk olyan élethelyzetbe, amikor úgy
            érezzük, egyedül nehéz megbirkózni problémáinkkal, képtelenek
            vagyunk objektíven rálátni saját magunkra, felgöngyölíteni a
            miérteket. Amennyiben úgy érzed, a négyszemközti beszélgetés
            segítene problémáid leküzdésében, várlak sok szeretettel egy egyéni
            segítő beszélgetésre." (Simon Dóri)
          </p>
          <Link to="/individual" className="border-2 w-80 p-2 px-4 mt-3">
            Tudj meg többet az egyéni foglalkozásról &gt;
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="col-6 bg-heromenta w-1/2 flex flex-col items-center justify-center text-center p-8">
          {/* <h1 className="text-2xl">Hidak Önmagunkhoz</h1> */}
          <img src={Csillag} alt="" className="w-16 mb-3"/>
          <h1 className="text-4xl mb-2">{page.fields.heroTitle}</h1>
        
          <h2 className="mb-8">Pszihodráma Önismereti Csoportok</h2>
            <p className="">
            Csoportos foglalkozásaink segítségével kapcsolódhatsz
            saját életedhez, ránézhetsz élethelyzeteidre. Mindezt egy közösen
            létrehozott, biztonságos térben
          </p>
          <Link to="/group" className="border-2 w-80 p-2 px-4 mt-3">
            Tudj meg többet a csoportokról &gt;
          </Link>
          {/* <p className="">{documentToReactComponents(page.fields.tartalom)}</p> */}
        </div>
        <div className="col-6 w-1/2">
          <img src={Plant} alt="" />
        </div>
      </div>

      <section className="w-5/6 mx-auto bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 italic mb-2">Rólam</p>

          <h2 className="text-3xl font-semibold mb-6">Mohácsi Andrea</h2>

          <p className="text-gray-700 leading-relaxed mb-10">
            Van benned egy belső térkép. Néha elmosódottak rajta az utak, máskor
            tisztán kirajzolódik, merre tovább. Van, hogy új ösvényeket keresel,
            máskor eltévedsz a megszokott minták között. Hogyan igazodunk el
            önmagunkban, kapcsolatainkban, életünkben, a világban?
          </p>
          <Link to="/about" className="border-2 w-80 p-2 px-4 mt-3">
            Tovább &gt;
          </Link>

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
      <div className="w-5/6 mx-auto flex flex-col md:flex-row justify-center gap-6 mt-4">
        <div className="bg-herogray md:w-1/3 w-full flex flex-col items-center justify-center text-center p-8 rounded">
          <h2 className="font-bold mb-3">EGYÉNI ÜLÉSEK</h2>
          <p className="mb-4">
            Biztonságos, személyre szabott tér, ahol saját belső folyamataidra
            figyelhetsz, és támogatást kapsz az életedben zajló helyzetek
            megértéséhez és átdolgozásához.
          </p>
          <Link
            to="/individual"
            className="bg-herodarkseablue text-white w-1/2 p-2 px-4 mt-3"
          >
            tovább &gt;
          </Link>
        </div>

        <div className="bg-heroturquoise md:w-1/3 w-full flex flex-col items-center justify-center text-center p-8 rounded">
          <h2 className="font-bold mb-3">ONLINE ÜLÉSEK</h2>
          <p className="mb-4">
            Rugalmasságot adó, biztonságos online találkozók, ahol ugyanúgy
            kapcsolódhatsz önmagadhoz és a kísérés folyamathoz, mintha
            személyesen találkoznánk.
          </p>
          <Link
            to="/individual"
            className="bg-herodarkseablue text-white w-1/2 p-2 px-4 mt-3"
          >
            tovább &gt;
          </Link>
        </div>

        <div className="bg-heroseablue md:w-1/3 w-full flex flex-col items-center justify-center text-center p-8 rounded">
          <h2 className="font-bold mb-3">ÖNISMERETI CSOPORTOK</h2>
          <p className="mb-4">
            Megosztó, elfogadó közösségi tér, ahol mások történetein és közös
            gyakorlatokon keresztül mélyebb rálátást szerezhetsz saját mintáidra
            és kapcsolódásaidra.
          </p>
          <Link
            to="/group"
            className="bg-herodarkseablue text-white w-1/2 p-2 px-4 mt-3"
          >
            tovább &gt;
          </Link>
        </div>
      </div>
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-center italic text-xl mb-10">Módszereim</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* 1. Rogers */}
          <div className="bg-white shadow-sm">
            <img
              src={Plant}
              alt="Rogersi segítő beszélgetés"
              className="w-full h-32 object-cover"
            />
            <div className="p-6 text-center">
              <p className="text-xl">Rogersi segítő beszélgetés</p>
            </div>
          </div>

          {/* 2. Meseterápia */}
          <div className="bg-white shadow-sm">
            <img
              src={Hullam}
              alt="Meseterápia"
              className="w-full h-32 object-cover"
            />
            <div className="p-6 text-center">
              <p className="text-xl">Meseterápia</p>
            </div>
          </div>

          {/* 3. Testorientált módszerek */}
          <div className="bg-white shadow-sm">
            <img
              src={Part}
              alt="Testorientált módszerek"
              className="w-full h-32 object-cover"
            />
            <div className="p-6 text-center">
              <p className="text-xl">Testorientált módszerek</p>
            </div>
          </div>

          {/* 4. Családállítás */}
          <div className="bg-white shadow-sm">
            <img
              src={Pafrany}
              alt="Családállítás"
              className="w-full h-32 object-cover"
            />
            <div className="p-6 text-center">
              <p className="text-xl">Családállítás</p>
            </div>
          </div>

          {/* 5. Pszichodráma */}
          <div className="bg-white shadow-sm">
            <img
              src={Erdo}
              alt="Pszichodráma"
              className="w-full h-32 object-cover"
            />
            <div className="p-6 text-center">
              <p className="text-xl">Pszichodráma</p>
            </div>
          </div>

          {/* 6. Monodráma */}
          <div className="bg-white shadow-sm">
            <img
              src={Folyo}
              alt="Monodráma"
              className="w-full h-32 object-cover"
            />
            <div className="p-6 text-center">
              <p className="text-xl">Monodráma</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

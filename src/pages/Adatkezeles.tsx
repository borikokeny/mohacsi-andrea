import "../styles/adatekezeles.css";

const dataProcessing = [
  {
    activity: "Kapcsolatfelvétel",
    data: "Név, e-mail, telefonszám, üzenet",
    purpose: "Kapcsolatfelvétel",
    legal: "Hozzájárulás",
    retention: "6 hónap, ha nem indul folyamat",
  },
  {
    activity: "Egyéni konzultáció",
    data: "Kapcsolattartási adatok, időpontok, kliensjegyzetek",
    purpose: "Segítő folyamat",
    legal: "Szerződés előkészítése és teljesítése, szükség szerint hozzájárulás",
    retention: "A lezárást követő 5 év",
  },
  {
    activity: "Pszichodráma jelentkezés",
    data: "Név, e-mail, telefonszám",
    purpose: "Jelentkezés kezelése",
    legal: "Hozzájárulás",
    retention: "6 hónap vagy a folyamat végéig",
  },
  {
    activity: "Pszichodráma adminisztráció",
    data: "Születési dátum",
    purpose: "Adminisztráció",
    legal: "Szerződés / jogi kötelezettség",
    retention: "5 év",
  },
  {
    activity: "Hírlevél",
    data: "Név, e-mail",
    purpose: "Programértesítők",
    legal: "Hozzájárulás",
    retention: "Leiratkozásig",
  },
  {
    activity: "Számlázás",
    data: "Számlázási adatok",
    purpose: "Számlakiállítás",
    legal: "Jogi kötelezettség",
    retention: "8 év",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <div className="privacy-container">

        <header className="privacy-header">
          <h1>Adatkezelési tájékoztató</h1>
          <p>
            Ez a tájékoztató ismerteti, hogy Mohácsi Andrea egyéni vállalkozó
            milyen személyes adatokat kezel, milyen célból, milyen jogalapon,
            valamint milyen jogok illetik meg az érintetteket.
          </p>
        </header>

        <nav className="privacy-nav">
          <a href="#adatkezelo">1. Adatkezelő</a>
          <a href="#adatok">2. Kezelt adatok</a>
          <a href="#jegyzetek">3. Kliensjegyzetek</a>
          <a href="#titoktartas">4. Titoktartás</a>
          <a href="#adatfeldolgozok">5. Adatfeldolgozók</a>
          <a href="#jogok">6. Érintetti jogok</a>
          <a href="#jogorvoslat">7. Jogorvoslat</a>
          <a href="#zaro">8. Záró rendelkezések</a>
        </nav>

        <section id="adatkezelo" className="privacy-section">
          <h2>1. Az adatkezelő adatai</h2>

          <div className="info-grid">

            <div>
              <span>Név</span>
              <strong>Mohácsi Andrea egyéni vállalkozó</strong>
            </div>

            <div>
              <span>Székhely</span>
              <strong>
                1147 Budapest, Zsolnay V. u. 9. III/4.
              </strong>
            </div>

            <div>
              <span>Nyilvántartási szám</span>
              <strong>60365460</strong>
            </div>

            <div>
              <span>Adószám</span>
              <strong>91000019-1-42</strong>
            </div>

            <div>
              <span>E-mail</span>
              <a href="mailto:andrea5.mohacsi@gmail.com">
                andrea5.mohacsi@gmail.com
              </a>
            </div>

            <div>
              <span>Telefon</span>
              <a href="tel:+36303839838">
                +36 30 383 9838
              </a>
            </div>

            <div>
              <span>Honlap</span>
              <a
                href="https://www.mohacsiandrea.hu"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.mohacsiandrea.hu
              </a>
            </div>

          </div>
        </section>

        <section id="adatok" className="privacy-section">
          <h2>2. A kezelt adatok és az adatkezelés célja</h2>

          <div className="table-wrapper">

            <table className="privacy-table">
              <thead>
                <tr>
                  <th>Adatkezelés</th>
                  <th>Kezelt adatok</th>
                  <th>Cél</th>
                  <th>Jogalap</th>
                  <th>Megőrzés</th>
                </tr>
              </thead>

              <tbody>
                {dataProcessing.map((row) => (
                  <tr key={row.activity}>
                    <td>{row.activity}</td>
                    <td>{row.data}</td>
                    <td>{row.purpose}</td>
                    <td>{row.legal}</td>
                    <td>{row.retention}</td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        </section>

        <section id="jegyzetek" className="privacy-section">
          <h2>3. Kliensjegyzetek</h2>

          <p>
            A szakmai jegyzetek papíralapon készülnek, az adatkezelő
            székhelyén, zárható szekrényben kerülnek megőrzésre.
            A jegyzetekhez kizárólag az adatkezelő fér hozzá.
          </p>
        </section>

        <section id="titoktartas" className="privacy-section">
          <h2>4. Titoktartás</h2>

          <p>
            A konzultációkon elhangzott információk bizalmasak.
            Szakmai szupervízió során kizárólag anonimizált
            esetmegbeszélés történik, amelyet titoktartási
            kötelezettség terhel.
          </p>
        </section>

        {/* Folytatás a következő részben */}
         <section id="adatfeldolgozok" className="privacy-section">
          <h2>5. Adatfeldolgozók</h2>

          <p>
            A szolgáltatás nyújtása során az adatkezelő az alábbi
            adatfeldolgozókat veheti igénybe:
          </p>

          <ul className="privacy-list">
            <li>
              <strong>Tárhelyszolgáltató:</strong> <em>[KITÖLTENDŐ]</em>
            </li>

            <li>
              <strong>Billingo</strong> – számlázási rendszer
            </li>

            <li>
              <strong>Google</strong> – Google Naptár, szükség esetén Google Meet
            </li>

            <li>
              <strong>Microsoft Teams</strong> – online konzultáció
            </li>

            <li>
              <strong>WhatsApp</strong> – online konzultáció esetén
            </li>

            <li>
              <strong>Hírlevélküldő:</strong> <em>[KITÖLTENDŐ]</em>
            </li>
          </ul>
        </section>

        <section id="jogok" className="privacy-section">
          <h2>6. Az érintettek jogai</h2>

          <p>
            Az érintettet a GDPR rendelkezései alapján az alábbi jogok illetik meg:
          </p>

          <div className="rights-grid">

            <div className="right-card">
              <h3>Hozzáférés</h3>
              <p>
                Jogosult tájékoztatást kérni arról, hogy milyen személyes
                adatait kezeli az adatkezelő.
              </p>
            </div>

            <div className="right-card">
              <h3>Helyesbítés</h3>
              <p>
                Kérheti a pontatlan vagy hiányos személyes adatok javítását.
              </p>
            </div>

            <div className="right-card">
              <h3>Törlés</h3>
              <p>
                Bizonyos esetekben kérheti személyes adatainak törlését.
              </p>
            </div>

            <div className="right-card">
              <h3>Korlátozás</h3>
              <p>
                Kérheti az adatkezelés ideiglenes korlátozását a jogszabályban
                meghatározott esetekben.
              </p>
            </div>

            <div className="right-card">
              <h3>Tiltakozás</h3>
              <p>
                Jogosult tiltakozni a személyes adatok kezelése ellen,
                amennyiben annak jogalapja ezt lehetővé teszi.
              </p>
            </div>

            <div className="right-card">
              <h3>Hozzájárulás visszavonása</h3>
              <p>
                A hozzájárulás bármikor visszavonható, amely azonban nem érinti
                a korábbi adatkezelés jogszerűségét.
              </p>
            </div>

          </div>

          <p className="notice">
            Az adatkezelő a beérkezett kérelmeket indokolatlan késedelem nélkül,
            de legkésőbb egy hónapon belül megválaszolja.
          </p>

        </section>

        <section id="jogorvoslat" className="privacy-section">
          <h2>7. Jogorvoslat</h2>

          <p>
            Amennyiben úgy érzi, hogy személyes adatainak kezelése nem felel meg
            a hatályos jogszabályoknak, panasszal fordulhat a
            <strong> Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH)</strong>,
            illetve bírósági jogorvoslatot is kezdeményezhet.
          </p>

          <div className="contact-box">

            <p>
              <strong>NAIH</strong>
            </p>

            <p>1055 Budapest, Falk Miksa utca 9–11.</p>

            <p>Levelezési cím: 1363 Budapest, Pf. 9.</p>

            <p>
              <a
                href="https://www.naih.hu"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.naih.hu
              </a>
            </p>

          </div>
        </section>

        <section id="zaro" className="privacy-section">
          <h2>8. Záró rendelkezések</h2>

          <p>
            Jelen adatkezelési tájékoztató az adatkezelő honlapján közzétett
            hivatalos változat.
          </p>

          <p>
            Az adatkezelő fenntartja a jogot a tájékoztató módosítására,
            különösen jogszabályváltozás vagy a szolgáltatások módosulása
            esetén.
          </p>

          <div className="last-update">
            <strong>Hatályos:</strong> 2026. július 18.
          </div>

        </section>

      </div>
    </main>
  );
}
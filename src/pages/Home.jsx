import { useEffect, useState } from "react";
import { client } from "../services/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Home() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    client.getEntries({
      content_type: "page",
      "fields.slug": "fooldal"
    })
    .then((res) => setPage(res.items[0]))
    .catch(console.error);
  }, []);

  if (!page) return <p>Betöltés…</p>;

  return (
    <div>
      <h1>{page.fields.title}</h1>
      {documentToReactComponents(page.fields.content)}
    </div>
  );
}



// export default function Home() {
//   return <h1>Főoldal – Contentful tartalom hamarosan…</h1>;
// }

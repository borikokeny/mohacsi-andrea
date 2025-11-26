import { useEffect, useState } from "react";
import { client } from "../services/contentful";
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
        {page.fields.kep && (
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
      <div>{documentToReactComponents(tartalom)}</div>
      
    </div>
  );
}

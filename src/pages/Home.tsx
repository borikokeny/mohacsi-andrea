import { client } from "../services/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect, useState } from "react";

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
    <div>
      <h1>{page.fields.title}</h1>
      <h1 className="text-4xl font-bold text-red-600">Tailwind működik! 🎉</h1>
      {documentToReactComponents(page.fields.tartalom)}
    </div>
  );
}

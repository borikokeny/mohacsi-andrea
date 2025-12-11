import { useParams } from "react-router-dom";
import { fetchGroupDetails } from "../api/groups";

export default function GroupDetails() {
  const { slug } = useParams();
  const { data, error, loading } = fetchGroupDetails(slug);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>{data.date}</p>
      <p>{data.price}</p>
    </div>
  );
}

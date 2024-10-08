import useSWR from "swr";
import { useRouter } from "next/router";
import { Card, GridContainer, DetailsCard } from "./StyledComponents";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Session() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/${id}` : null, fetcher);

  console.log("data", data);

  if (!id) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Failed to load session</h1>;
  }

  if (!data) {
    return <h1>Loading session details...</h1>;
  }

  console.log("session details data", data);

  return (
    <DetailsCard>
      <h1>{data.title}</h1>
      <p>{data.category}</p>
      <h3>{data.short}</h3>
      <p>{data.long}</p>
      <p class="summary">Skills: {data.skills}</p>
      <Link href="/sessions">Back</Link>
    </DetailsCard>
  );
}

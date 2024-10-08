import useSWR from "swr";
import { useRouter } from "next/router";
import { Card } from "./StyledComponents";
import Link from "next/link";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/session-data/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  console.log("session details data", data);

  return (
    <Card>
      <h2>{data.title}</h2>
      <h3>{data.short}</h3>
      <p>Description: {data.long}</p>
      <p>Category: {data.category}</p>
      <Link href="/">Back to all</Link>
    </Card>
  );
}

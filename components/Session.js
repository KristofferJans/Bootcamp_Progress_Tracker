import useSWR from "swr";
import { useRouter } from "next/router";
import {
  GridCard,
  GridContainer,
  DetailsCard,
  StatusButton,
} from "./StyledComponents";
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
    <>
      <DetailsCard>
        <h1>{data.title}</h1>
        <p>{data.category}</p>
        <h3>{data.short}</h3>
        <p>{data.long}</p>
        <p class="summary">Skills: {data.skills}</p>
        <Link href="/sessions">Back</Link>
      </DetailsCard>
      {data.challenges && data.challenges.length > 0 ? (
        <GridContainer>
          {data.challenges.map((challenge) => (
            <GridCard key={challenge._id}>
              <h3>{challenge.challenge}</h3>
              <p className="summary">Description of challenge.</p>
              <StatusButton>Not Started</StatusButton>
              <StatusButton>Started</StatusButton>
              <StatusButton>Open Pull Request</StatusButton>
              <StatusButton>Merged</StatusButton>
            </GridCard>
          ))}
        </GridContainer>
      ) : (
        <p>No challenges for this session.</p>
      )}
    </>
  );
}

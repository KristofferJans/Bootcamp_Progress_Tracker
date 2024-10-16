import useSWR from "swr";
import { useRouter } from "next/router";
import {
  GridCard,
  GridContainer,
  DetailsCard,
  StatusButton,
  LoginButton,
  NavButton,
  BackButton,
} from "./StyledComponents";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Session() {
  const [progressLevel, setProgressLevel] = useState(null);
  const { data: session, status } = useSession();

  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/${id}` : null, fetcher);

  const { data: userData, mutate } = useSWR(
    session ? `/api/users?id=${session?.user?.userId}` : null,
    fetcher
  );
  console.log("userData", userData);
  // console.log("data-session-details", session);
  useEffect(() => {
    if (userData) setProgressLevel(userData?.progress);
  }, [userData]);

  if (!id) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Failed to load session</h1>;
  }

  if (!data) {
    return <h1>Loading session details...</h1>;
  }

  // console.log("session details data", session);

  async function updateProgress(challengeId, level) {
    console.log("update progress 44", session.user.userId);
    const response = await fetch(`/api/users?id=${session.user.userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ challengeId: challengeId, progressLevel: level }),
    });

    if (response.ok) {
      console.log("RESPONSE OK");
      mutate();
    }
  }

  function getProgress(challengeId) {
    const challengeProgress = progressLevel?.find(
      (progress) => progress.challengeId.toString() === challengeId
    );
    return challengeProgress?.progressLevel || 1; // Default to 1 if no progress exists
  }

  console.log("user-details", session?.user);

  return (
    <>
      <DetailsCard>
        <h1>{data.title}</h1>
        <p class="summary">{data.category}</p>
        <h3>{data.short}</h3>
        <p>{data.long}</p>
        {/* <p class="summary">Skills: {data.skills}</p> */}
        <BackButton>
          <Link href="/sessions" legacyBehavior>
            Back
          </Link>
        </BackButton>
      </DetailsCard>
      {data.challenges && data.challenges.length > 0 ? (
        <GridContainer>
          {data.challenges.map((challenge) => {
            const progressLevel = getProgress(challenge._id);
            return (
              <GridCard key={challenge._id}>
                <h3>{challenge.challenge}</h3>
                <p className="summary">Description of challenge.</p>
                <StatusButton
                  isActive={progressLevel === 1}
                  onClick={() => {
                    updateProgress(challenge._id, 1);
                  }}
                >
                  Not Started
                </StatusButton>
                <StatusButton
                  isActive={progressLevel === 2}
                  onClick={() => {
                    updateProgress(challenge._id, 2);
                  }}
                >
                  Started
                </StatusButton>
                <StatusButton
                  isActive={progressLevel === 3}
                  onClick={() => {
                    updateProgress(challenge._id, 3);
                  }}
                >
                  Open Pull Request
                </StatusButton>
                <StatusButton
                  isActive={progressLevel === 4}
                  onClick={() => {
                    updateProgress(challenge._id, 4);
                  }}
                >
                  Merged
                </StatusButton>
              </GridCard>
            );
          })}
        </GridContainer>
      ) : (
        <p>No challenges for this session.</p>
      )}
    </>
  );
}

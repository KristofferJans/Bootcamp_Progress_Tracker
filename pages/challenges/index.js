import React from "react";
import { useSession } from "next-auth/react";

import {
  Container,
  MainContent,
  Card,
  GridContainer,
  GridCard,
  StatusButton,
} from "@/components/StyledComponents";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Home() {
  const { data, error } = useSWR("/api/challenges", fetcher);
  const { data: session, status } = useSession();
  console.log("session-data", data);

  // If there is an error during fetching
  if (error) return <div>Error loading session data.</div>;

  // If data is not available yet, or it's undefined
  if (!data) return <div>Loading...</div>;
  return (
    <Container>
      {/* Navigation Sidebar left*/}
      <Navbar></Navbar>

      {/* Main Content */}
      <MainContent>
        {/* Topbar */}
        <Topbar></Topbar>

        <h2 style={{ marginTop: "40px" }}>Challenges</h2>
        {/* <p>{data[0].sessionId.long}</p> */}
        {/* <p>{data[20].title}</p>
        <div>
          {data.map((session) => (
            <Card key={session._id}>
              <h3>{session.title}</h3>
              <p>{session.short}</p>
            </Card>
          ))}
        </div> */}
        {/* add more content here later*/}
        <GridContainer>
          {data.map((challenge) => (
            <GridCard key={challenge._id} style={{ marginBottom: "20px" }}>
              <h3>{challenge.challenge}</h3>
              {/* Check if sessionId is populated */}
              <StatusButton>Not Started</StatusButton>
              <StatusButton>Started</StatusButton>
              <StatusButton>Open Pull Request</StatusButton>
              <StatusButton>Merged</StatusButton>
            </GridCard>
          ))}
        </GridContainer>
      </MainContent>

      {/* Stats Sidebar */}
    </Container>
  );
}

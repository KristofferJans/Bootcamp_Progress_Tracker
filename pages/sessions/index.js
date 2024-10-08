import React from "react";
import { useSession } from "next-auth/react";

import {
  Container,
  MainContent,
  Card,
  GridCard,
  GridContainer,
} from "@/components/StyledComponents";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";

import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Home() {
  const { data, error } = useSWR("/api/session-data", fetcher);
  const { data: session, status } = useSession();
  console.log("session-data", data);

  if (error) return <div>Error loading session data.</div>;

  if (!data) return <div>Loading...</div>;
  return (
    <Container>
      {/* Navigation Sidebar left*/}
      <Navbar></Navbar>

      {/* Main Content */}
      <MainContent>
        {/* Topbar */}
        <Topbar></Topbar>

        <h2 style={{ marginTop: "40px" }}>Sessions</h2>
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
          {data.map((session) => (
            <Link
              key={session._id}
              href={`/${session._id}`}
              passHref
              legacyBehavior
            >
              <GridCard
                key={session._id}
                style={{ marginBottom: "20px", cursor: "pointer" }}
              >
                <h3>{session.title}</h3>

                <p>{session.short}</p>
              </GridCard>
            </Link>
          ))}
        </GridContainer>
      </MainContent>

      {/* Stats Sidebar */}
    </Container>
  );
}

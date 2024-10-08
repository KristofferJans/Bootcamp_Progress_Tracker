import React from "react";
import { useSession } from "next-auth/react";
import { Container, MainContent, Card } from "../components/StyledComponents";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import StatisticSidebar from "@/components/StatisticsSidebar";
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

        {/* Statistic Cards - currently hardcoded */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <Card>
            <h3>10</h3>
            <p>Finished Challenges</p>
          </Card>
          <Card>
            <h3>2/5</h3>
            <p>Recap Projects done</p>
          </Card>
          <Card>
            <h3>13</h3>
            <p>New Skills unlocked</p>
          </Card>
        </div>

        <h2 style={{ marginTop: "40px" }}>Finished Challenges</h2>
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
      </MainContent>

      {/* Stats Sidebar */}
      <StatisticSidebar></StatisticSidebar>
    </Container>
  );
}

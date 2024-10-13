import React from "react";
import { useSession } from "next-auth/react";
import { Container, MainContent, Card } from "../components/StyledComponents";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import StatisticSidebar from "@/components/StatisticsSidebar";
import useSWR from "swr";
import CircularProgressBar from "@/components/CircularProgressBar";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Home() {
  const { data, error } = useSWR("/api/challenges", fetcher);
  const { data: session, status } = useSession();
  console.log("session-data", data);

  // const userId = session?.user?.userId;
  // const { data, error } = useSWR('/api/users?id=${}', fetcher);

  // If there is an error during fetching
  if (error) return <div>Error loading session data.</div>;

  // If data is not available yet, or it's undefined
  if (!data) return <div>Loading...</div>;

  const progressPercentage = 20;
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

        {/* add more content here later*/}

        <div className="App">
          <h1>Animating Circular Progress Bar</h1>
          <CircularProgressBar percent={progressPercentage} />
        </div>
      </MainContent>

      {/* Stats Sidebar */}
      <StatisticSidebar></StatisticSidebar>
    </Container>
  );
}

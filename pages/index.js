import React from "react";
import { useSession } from "next-auth/react";
import { Container, MainContent, Card } from "../components/StyledComponents";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import StatisticSidebar from "@/components/StatisticsSidebar";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Home() {
  const { data, error } = useSWR("/api/session-data", fetcher);
  const { data: session, status } = useSession();
  console.log("session-data", data);
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
        <p>{data[20].title}</p>
        {/* add more content here later*/}
      </MainContent>

      {/* Stats Sidebar */}
      <StatisticSidebar></StatisticSidebar>
    </Container>
  );
}

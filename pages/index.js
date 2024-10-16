import React from "react";
import { useSession } from "next-auth/react";
import {
  Container,
  MainContent,
  Card,
  DashboardCard,
  GridContainer,
} from "../components/StyledComponents";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import StatisticSidebar from "@/components/StatisticsSidebar";
import useSWR from "swr";
import CircularProgressBar from "@/components/CircularProgressBar";

const fetcher = (url) => fetch(url).then((response) => response.json());

function levelUp(progressPercentage2) {
  if (progressPercentage2 >= 76) {
    return "Master";
  } else if (progressPercentage2 >= 51) {
    return "Expert";
  } else if (progressPercentage2 >= 26) {
    return "Advanced";
  } else if (progressPercentage2 >= 11) {
    return "Intermediate";
  } else {
    return "Beginner";
  }
}

function motivation(progressPercentage2) {
  if (progressPercentage2 === 100) {
    return "Congratulations, you finished all the challenges!";
  } else if (progressPercentage2 >= 90) {
    return "You're almost there! Just a little more!";
  } else if (progressPercentage2 >= 80) {
    return "Great job! Keep pushing, you're so close!";
  } else if (progressPercentage2 >= 70) {
    return "You're doing amazing, the finish line is in sight!";
  } else if (progressPercentage2 >= 60) {
    return "Impressive progress! Keep up the great work!";
  } else if (progressPercentage2 >= 50) {
    return "Halfway there, you’re making fantastic progress!";
  } else if (progressPercentage2 >= 40) {
    return "You're building great momentum, keep going!";
  } else if (progressPercentage2 >= 30) {
    return "You're off to a strong start, keep it up!";
  } else if (progressPercentage2 >= 20) {
    return "Good effort! Every step forward counts!";
  } else if (progressPercentage2 >= 10) {
    return "You’ve made the first steps, stay focused!";
  } else if (progressPercentage2 >= 1) {
    return "Great start! Keep moving forward!";
  } else {
    return "You're just beginning! Start your journey now!";
  }
}

export default function Home() {
  const { data, error } = useSWR("/api/challenges", fetcher);
  const { data: session, status } = useSession();
  console.log("session-data", data);

  const { data: userData, mutate } = useSWR(
    session ? `/api/users?id=${session?.user?.userId}` : null,
    fetcher
  );

  console.log("User-Data-Dasboard", userData);

  const finishedChallenges = userData?.finishedChallenges.length || 0;
  const totalChallenges = data?.length;
  const progressPercentage2 = (finishedChallenges / totalChallenges) * 100;

  console.log("progress", progressPercentage2);

  // const userId = session?.user?.userId;
  // const { data, error } = useSWR('/api/users?id=${}', fetcher);

  // If there is an error during fetching
  if (error) return <div>Error loading session data.</div>;

  // If data is not available yet, or it's undefined
  if (!data) return <div>Loading...</div>;

  const userLevel = levelUp(progressPercentage2);

  const progressPercentage = 30;

  return (
    <Container>
      {/* Navigation Sidebar left*/}
      <Navbar></Navbar>

      {/* Main Content */}
      <MainContent>
        {/* Topbar */}
        <Topbar></Topbar>

        {/* Statistic Cards - currently hardcoded */}
        <GridContainer>
          <DashboardCard>
            <h3>{finishedChallenges}</h3>
            <p>Finished Challenges</p>
          </DashboardCard>
          <DashboardCard>
            <h3>2/5</h3>
            <p>Recap Projects done</p>
          </DashboardCard>
          <DashboardCard>
            <h3>13</h3>
            <p>New Skills unlocked</p>
          </DashboardCard>
        </GridContainer>

        {/* <CircularProgressBar percent={progressPercentage2} /> */}

        {/* add more content here later*/}
      </MainContent>

      {/* Stats Sidebar */}
      <StatisticSidebar
        percent={progressPercentage2}
        userLevel={userLevel}
      ></StatisticSidebar>
    </Container>
  );
}

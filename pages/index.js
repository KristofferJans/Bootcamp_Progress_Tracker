// pages/index.js
import React from "react";
import {
  Container,
  Sidebar,
  NavButton,
  TopBar,
  MainContent,
  Card,
  StatsSidebar,
  ProgressSection,
  HomeworkCard,
  CircularProgress,
} from "../components/StyledComponents";

const Home = () => {
  return (
    <Container>
      {/* Sidebar */}
      <Sidebar>
        <h1>Bootcamp Tracker</h1>
        <NavButton>Dashboard</NavButton>
        <NavButton>Topics</NavButton>
        <NavButton>All Challenges</NavButton>
        <NavButton>Homework / ToDo</NavButton>
      </Sidebar>

      {/* Main Content */}
      <MainContent>
        <TopBar>
          <div>
            <h2>Hi There, Kristoffer</h2>
            <p>welcome back!</p>
          </div>
          <input type="text" placeholder="Search..." />
        </TopBar>

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
        {/* More content here */}
      </MainContent>

      {/* Stats Sidebar */}
      <StatsSidebar>
        <h2>Level: Coding Beginner</h2>
        <p>Statistics</p>
        {/* Insert circular progress and stats */}
        <ProgressSection>
          <h3>Homework Progress</h3>
          <HomeworkCard>
            <CircularProgress>50%</CircularProgress>
            <div>
              <h4>Flexbox Navigation</h4>
              <p>CSS Flexbox</p>
            </div>
          </HomeworkCard>
          {/* Repeat for more homework cards */}
        </ProgressSection>
      </StatsSidebar>
    </Container>
  );
};

export default Home;

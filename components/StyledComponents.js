import styled from "styled-components";

// Layout Container
export const Container = styled.div`
  display: flex;
  width: 100vw;
  background-color: #f0f0f0;
  overflow: hidden;
`;

// Sidebar Component
export const Sidebar = styled.div`
  width: 250px;
  background-color: #6e21a8;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
`;

// Navigation Buttons inside Sidebar
export const NavButton = styled.button`
  background-color: #b055f7;
  border: none;
  color: white;
  padding: 15px 20px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 8px;
  text-align: left;
  font-size: 16px;

  &:hover {
    background-color: #9933ea;
  }
`;

// Top Bar
export const TopBar = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Main Content Area
export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
`;

// Card Component for Metrics and Progress
export const Card = styled.div`
  background-color: #8e44ad;
  color: white;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  text-align: center;
  width: auto;
  flex: 1;
`;

// Stats Sidebar
export const StatsSidebar = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
`;

// Progress Section inside Stats Sidebar
export const ProgressSection = styled.div`
  margin-top: 30px;
`;

// Homework Progress Cards
export const HomeworkCard = styled.div`
  background-color: #8e44ad;
  color: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

// Circular Progress example
export const CircularProgress = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 50%;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8e44ad;
  font-weight: bold;
`;

// Grid Components

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-content: space-evenly;
`;

export const GridCard = styled.div`
  background-color: #f5f5f5;
  color: #333;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #8e44ad;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #666;
  }

  .summary {
    font-weight: 500;
    color: #333;
    margin-bottom: 10px;
  }

  .details {
    font-size: 0.875rem;
    color: #777;
  }
`;

export const DetailsCard = styled.div`
  background-color: #f5f5f5;
  color: #333;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #8e44ad;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #666;
  }

  .summary {
    font-weight: 500;
    color: #333;
    margin-bottom: 10px;
  }

  .details {
    font-size: 0.875rem;
    color: #777;
  }
`;

// Progress Button

export const StatusButton = styled.button`
  background-color: ${(props) => (props.isActive ? "#8e44ad" : "#f5f5f5")};
  color: ${(props) => (props.isActive ? "#fff" : "#333")};
  border: 1px solid #8e44ad;
  padding: 10px;
  cursor: pointer;
  margin: 5px;
  border-radius: 5px;

  &:hover {
    background-color: green;
  }
`;

export const ProgressBarContainer = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const DashboardCard = styled.div`
  background-color: #9733ea;
  color: #fff; // Static text color
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    color: #faf5ff;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #ead5ff;
  }

  .statistic {
    font-size: 2.5rem;
    font-weight: bold;
    color: #faf5ff;
  }

  .description {
    font-size: 1rem;
    color: #ead5ff;
    margin-top: 10px;
  }
`;

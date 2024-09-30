import styled from "styled-components";

// Layout Container
export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
`;

// Sidebar Component
export const Sidebar = styled.div`
  width: 250px;
  background-color: #8e44ad;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
`;

// Navigation Buttons inside Sidebar
export const NavButton = styled.button`
  background-color: #7f22f5;
  border: none;
  color: white;
  padding: 15px 20px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 8px;
  text-align: left;
  font-size: 16px;

  &:hover {
    background-color: #692bc9;
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

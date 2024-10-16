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
  background-color: #3d0764;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  height: 100vh;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  width: 100%;
  flex-grow: 0.6;
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
  text-align: center;
  font-size: 16px;
  width: 100%;

  &:hover {
    background-color: #9933ea;
  }
`;

export const BackButton = styled.button`
  background-color: #b055f7;
  border: none;
  color: white;
  padding: 15px 20px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;

  top: 20px;
  right: 20px;
  position: absolute;
  &:hover {
    background-color: #9933ea;
  }
`;

export const LoginButton = styled.button`
  background-color: #ffffff;
  border: 2px solid #9933ea;
  color: #6e21a8;
  padding: 10px 20px;
  margin-top: 170px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  width: 100%;

  &:hover {
    background-color: #9933ea;
    color: #ffffff;
  }
`;

// Top Bar
export const TopBar = styled.div`
  width: 100%;
  padding: 15px 20px;
  background-color: #3d0764;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    margin: 0;
    font-size: 1.8rem;
  }
`;

// Main Content Area
export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  width: 100%;
`;

// export const GridContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   gap: 20px;
//   padding: 20px;
//   justify-content: space-evenly;
// `;

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
    background-color: #8e44ad;
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
  color: #fff;
  padding: 20px;
  margin-top: 25px;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  text-align: center;

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

export const LevelContainer = styled.div`
  background-color: #6e21a8;
  color: #fff;
  padding: 20px;
  margin-top: 0px;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.4rem;
    margin: 0;
    font-weight: bold;
    color: #ffffff;
  }
`;

export const CircularProgressContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 15px;
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const SearchInput = styled.input`
  width: 200px;
  padding: 10px;
  border: none;
  outline: none;
  background-color: #f5f5f5;
  color: #333;
  font-size: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #999;
  }

  &:focus {
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #3d0764;
  margin-bottom: 20px;
  text-align: left;
  border-left: 5px solid #b055f7;
  padding-left: 15px;
  margin-left: 10px;
  margin-top: 30px;
`;

export const DetailsTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #3d0764;
  margin-bottom: 20px;
  text-align: left;
  border-left: 5px solid #b055f7;
  padding-left: 15px;

  margin-top: 20px;
`;

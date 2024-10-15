import {
  StatsSidebar,
  HomeworkCard,
  CircularProgress,
  ProgressSection,
  ProgressBarContainer,
  LevelContainer,
  CircularProgressContainer,
  GridCard,
} from "./StyledComponents";
import CircularProgressBar from "./CircularProgressBar";

export default function StatisticSidebar({ percent, userLevel }) {
  return (
    <StatsSidebar>
      <LevelContainer>
        <h2>Level: {userLevel}</h2>
      </LevelContainer>

      <CircularProgressContainer>
        <h2>Overall Progress</h2>
        <CircularProgressBar percent={percent} />
      </CircularProgressContainer>

      <CircularProgressContainer>
        <h3>Homework</h3>
        <GridCard>
          <CircularProgress>50%</CircularProgress>
          <div>
            <h4>Flexbox Navigation</h4>
            <p>CSS Flexbox</p>
          </div>
        </GridCard>
      </CircularProgressContainer>
    </StatsSidebar>
  );
}

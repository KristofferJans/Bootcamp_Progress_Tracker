import {
  StatsSidebar,
  HomeworkCard,
  CircularProgress,
  ProgressSection,
  ProgressBarContainer,
} from "./StyledComponents";
import CircularProgressBar from "./CircularProgressBar";

export default function StatisticSidebar({ percent, userLevel }) {
  return (
    <StatsSidebar>
      <h2>Level: {userLevel}</h2>
      <h3>Overall Progress</h3>

      <ProgressBarContainer>
        <CircularProgressBar percent={percent} />
      </ProgressBarContainer>

      <ProgressSection>
        <h3>Homework Progress</h3>
        <HomeworkCard>
          <CircularProgress>50%</CircularProgress>
          <div>
            <h4>Flexbox Navigation</h4>
            <p>CSS Flexbox</p>
          </div>
        </HomeworkCard>
      </ProgressSection>
    </StatsSidebar>
  );
}

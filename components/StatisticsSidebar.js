import {
  StatsSidebar,
  HomeworkCard,
  CircularProgress,
  ProgressSection,
} from "./StyledComponents";
import CircularProgressBar from "./CircularProgressBar";

export default function StatisticSidebar({ percent }) {
  return (
    <StatsSidebar>
      <h2>Level: Coding Beginner</h2>
      <h3>Overall Progress</h3>

      <CircularProgressBar percent={percent} />

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

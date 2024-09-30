import {
  StatsSidebar,
  HomeworkCard,
  CircularProgress,
  ProgressSection,
} from "./StyledComponents";

export default function StatisticSidebar() {
  return (
    <StatsSidebar>
      <h2>Level: Coding Beginner</h2>
      <h3>Overall Progress</h3>
      <HomeworkCard>
        <CircularProgress>50%</CircularProgress>
      </HomeworkCard>

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

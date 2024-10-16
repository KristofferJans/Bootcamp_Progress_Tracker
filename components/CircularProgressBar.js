import React from "react";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory";

function CircularProgressBar({ percent }) {
  const [data, setData] = React.useState(getData(percent)); // Use initial percent

  console.log("Data-Esraa", data);
  React.useEffect(() => {
    // Update the data whenever the percent prop changes
    setData(getData(percent));
  }, [percent]); // Re-run this effect when the percent changes

  return (
    <div style={{ width: "200px", height: "200px" }}>
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <VictoryPie
          standalone={false}
          animate={{ duration: 1000 }}
          width={400}
          height={400}
          data={data}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null} // No labels on the pie chart itself
          style={{
            data: {
              fill: ({ datum }) => {
                const color = datum.y > 30 ? "#8222ce" : "#c384fc";
                return datum.x === 1 ? color : "transparent";
              },
            },
          }}
        />
        <VictoryAnimation
          duration={1000}
          data={{ percent: isNaN(percent) ? 0 : percent || 0 }}
        >
          {(newProps) => {
            return (
              <VictoryLabel
                textAnchor="middle"
                verticalAnchor="middle"
                x={200}
                y={200}
                text={`${Math.round(newProps.percent)}%`} // Show percentage inside the circle
                style={{ fontSize: 45 }}
              />
            );
          }}
        </VictoryAnimation>
      </svg>
    </div>
  );
}

function getData(value) {
  const percent = isNaN(value) ? 0 : value || 0;
  // Helper function to generate pie chart data based on percentage
  return [
    { x: 1, y: percent },
    { x: 2, y: 100 - percent },
  ];
}

export default CircularProgressBar;

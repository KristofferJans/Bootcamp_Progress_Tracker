import React from "react";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory";

function CircularProgressBar({ percent }) {
  const [data, setData] = React.useState(getData(percent)); // Use initial percent

  React.useEffect(() => {
    // Update the data whenever the percent prop changes
    setData(getData(percent));
  }, [percent]); // Re-run this effect when the percent changes

  return (
    <div style={{ width: "400px", height: "400px" }}>
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
                const color = datum.y > 30 ? "green" : "red";
                return datum.x === 1 ? color : "transparent";
              },
            },
          }}
        />
        <VictoryAnimation duration={1000} data={{ percent }}>
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

function getData(percent) {
  // Helper function to generate pie chart data based on percentage
  return [
    { x: 1, y: percent },
    { x: 2, y: 100 - percent },
  ];
}

export default CircularProgressBar;

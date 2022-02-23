import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={datapoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
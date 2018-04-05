
import React, { Component } from 'react';
import { Bar } from "react-chartjs-2";

class BarChart extends Component {
  state = {}
  render() { 
    return ( 
      <div className="chart-wrapper">
        <div className="chart headers">
        Average Participants Per Month:
          <Bar
            data={{
              labels: ['December','January',`February`,`March`,`April`],
              datasets: [
                {
                  label: "Average participants",
                  data: [75, 80,90,this.props.monthlyParticipants,0],
                  backgroundColor: ["rgba(43, 54, 58, 0.6)", "rgba(72, 201, 248, 0.6)","rgba(55, 106, 125, 0.6)","rgba(43, 54, 58, 0.6)"]
                }
              ]
            }}
          />
        </div>
      </div>
     )
  }
}
 
export default BarChart;


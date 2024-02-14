import React from "react";
import { Chart as Chartjs,defaults } from "chart.js/auto";
import {Line } from "react-chartjs-2";
import sourceData from "./sourceData.json";

defaults.maintainAspectRatio= false;
defaults.responsive = true;
function LineChartDb() {
  return (

      <Line
        data={{
          labels: sourceData.map((i) => {
            return i.label;
          }),
          datasets: [
            {
              label: "Revenue",
              data: sourceData.map((i) => {
                return i.Value;
              }),
              backgroundColor: [
                "rgba( 250, 235, 215, 1 )",
                "rgba( 0, 255, 255, 1 )",
                "rgba( 127, 255, 212, 1 )",
                "rgba( 240, 255, 255, 1 )",
                "rgba( 245, 245, 220, 1 )",
                "rgba( 255, 228, 196, 1 )",
                "rgba( 138, 43, 226, 1 )",
                "rgba( 165, 42, 42, 1 )",
              ],
                
            },
          ],
        }}
      />

  );
}

export default LineChartDb;

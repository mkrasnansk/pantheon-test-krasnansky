import React from "react";
import { Container } from "@material-ui/core";
import { Bar } from "react-chartjs-2";

const Chart = (props) => {
  const max = props.data.map((item) => Math.floor(item.max_temp).toString());
  const min = props.data.map((item) => Math.floor(item.min_temp).toString());
  const days = props.data.map((item) => item.applicable_date);
  const data = {
    labels: [...days],
    datasets: [
        {
          type: 'line',
          label: 'Max C°',
          borderColor: 'red',
          borderWidth: 4,
          fill: false,
          data: [...max],
        },
        {
            type: 'line',
            label: 'Min C°',
            borderColor: 'blue',
            borderWidth: 4,
            fill: false,
            data: [...min],
          },
    ]
  };
  return (
    <Container maxWidth="md">
      <Bar data={data} />
    </Container>
  );
};

export default Chart;

import React from "react";
import { Card, CardContent, Container, Typography } from "@material-ui/core";
import { Bar } from "react-chartjs-2";

const Chart = (props) => {
  const max = props.data.map((item) => Math.floor(item.max_temp).toString());
  const min = props.data.map((item) => Math.floor(item.min_temp).toString());
//   console.log("max: ", max, ' min: ',min);
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
//   const options = {
//     scales: {
//       yAxes: [
//         {
//           type: 'linear',
//           display: true,
//           position: 'left',
//           id: 'y-axis-1',
//         },
//         {
//           type: 'linear',
//           display: true,
//           position: 'right',
//           id: 'y-axis-2',
//           gridLines: {
//             drawOnArea: false,
//           },
//         },
//       ],
//     },
//   };
  return (
    <Container maxWidth="md">
      <Bar data={data} />
      <Card>
        ciarovy graf
        <CardContent>
          <Typography>
            Čiarový graf zobrazujúci vzťah medzi časom (os x) a teplotou (os y)
            z tabuľky na prvej karte.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Chart;

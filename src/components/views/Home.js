import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";

const Home = (props) => {
  return (
    <Grid container item xs={12} justifyContent="center">
      {props.data.map((item) => (
        <Grid
          key={item.id}
          container
          item
          xs={12}
          sm={6}
          md={3}
          justifyContent="center"
          style={{ padding: 10 }}
        >
          <Card>
            <CardContent>
              <Typography>{item.applicable_date}</Typography>
              <Typography>{item.weather_state_name}</Typography>
              <Typography>Teplota max: {item.max_temp}</Typography>
              <Typography>Teplota min: {item.min_temp}</Typography>
              <Typography>
                Tlak vzduchu:{" "}
                {item.air_pressure === null
                  ? "No Data"
                  : `${item.air_pressure}`}
              </Typography>
              <Typography>Vlhkosť: {item.humidity}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;

import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
const sn = "https://www.metaweather.com/static/img/weather/sn.svg";
const t = "https://www.metaweather.com/static/img/weather/t.svg";
const hod = "https://www.metaweather.com/static/img/weather/hr.svg";
const il = "https://www.metaweather.com/static/img/weather/lr.svg";
const s = "https://www.metaweather.com/static/img/weather/s.svg";
const hc = "https://www.metaweather.com/static/img/weather/hc.svg";
const ic = "https://www.metaweather.com/static/img/weather/lc.svg";
const c = "https://www.metaweather.com/static/img/weather/c.svg";
const Home = (props) => {
  const icons = (e) => {
      switch (e) {
        case "hc":
          return hc;
        case "c":
          return c;
        case "lc":
          return ic;
        case "s":
          return s;
        case "lr":
          return il;
        case "hod":
          return hod;
        case "sn":
          return sn;
        case "t":
          return t;
        default:
          return ic;
      }
  };
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
              <img
                src={icons(item.weather_state_abbr)}
                alt={item.weather_state_name}
              />
              <Typography>
                Teplota max: {item.max_temp.toFixed(0)} C°
              </Typography>
              <Typography>
                Teplota min: {item.min_temp.toFixed(0)} C°
              </Typography>
              <Typography>
                Tlak vzduchu:
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

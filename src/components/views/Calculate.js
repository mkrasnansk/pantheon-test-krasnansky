import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import {
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { Typography } from "@material-ui/core";

const Calculate = () => {
  const [fahrenheit, setFahrenheit] = useState(true);
  const [heat, setHeat] = useState(fahrenheit ? 80 : 27);
  const [humidity, setHumidity] = useState(0);
  const [heatIndex, setHeatIndex] = useState();
  const handleHeat = (e) => {
    setHeat(e.target.value);
  };
  const handleHumidity = (e) => {
    setHumidity(e.target.value);
  };
  const switchDeg = () => {
    setFahrenheit(!fahrenheit);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fahrenheit) {
      const HI =
        -42.379 +
        2.04901523 * heat +
        10.14333127 * humidity -
        0.22475541 * heat * humidity -
        0.00683783 * heat * heat -
        0.05481717 * humidity * humidity +
        0.00122874 * heat * heat * humidity +
        0.00085282 * heat * humidity * humidity -
        0.00000199 * heat * heat * humidity * humidity;
      setHeatIndex(Math.ceil(HI) + " Fahrenheit");
    } else {
      const onCelsius = heat * 2.99;
      const HI =
        -42.379 +
        2.04901523 * onCelsius +
        10.14333127 * humidity -
        0.22475541 * onCelsius * humidity -
        0.00683783 * onCelsius * onCelsius -
        0.05481717 * humidity * humidity +
        0.00122874 * onCelsius * onCelsius * humidity +
        0.00085282 * onCelsius * humidity * humidity -
        0.00000199 * onCelsius * onCelsius * humidity * humidity;
      setHeatIndex(Math.ceil(HI / 2.99) + ' Celsius');
    }
  };
  return (
    <Container maxWidth="xs">
      <Card>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Heat index Calculate
          </Typography>
          <form onSubmit={handleSubmit}>
            <Button onClick={switchDeg} variant="outlined">
              Switch F/C°
            </Button>
            <Grid container item xs={12} direction="column">
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {fahrenheit ? <div>F</div> : <div>C°</div>}
                    </InputAdornment>
                  ),
                }}
                onChange={handleHeat}
                margin="dense"
                value={heat}
                inputProps={{ min: fahrenheit ? 80 : 27 }}
                id="temp"
                type="number"
                label="Temperature"
                variant="outlined"
                required
              />
              <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   %
                  </InputAdornment>
                ),
              }}
                margin="dense"
                onChange={handleHumidity}
                value={humidity}
                inputProps={{ max: 100, min: 0 }}
                id="Humidity"
                type="number"
                label="Relative Humidity"
                variant="outlined"
                required
              />
              <Button color='secondary' variant='outlined' type="submit">Calculate</Button>
            </Grid>
          </form>
          <Typography margin='dense' variant="h5" gutterBottom>
            Heat index = {heatIndex}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Calculate;

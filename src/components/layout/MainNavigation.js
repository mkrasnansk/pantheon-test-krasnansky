import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Home from "./../views/Home";
import Chart from "./../views/Chart";
import Calculate from "./../views/Calculate";
import { Grid } from "@material-ui/core";
import axios from "axios";

const MainNavigation = () => {
  const [value, setValue] = useState("1");
  const [state, setState] = useState([]);
  const [submiting, setSubmiting] = useState(true);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://www.metaweather.com/api/location/2487956/")
        .then((res) => {
          const data = res.data.consolidated_weather;
          setState(data);
          setSubmiting(false);
        });
    };
    if (submiting) {
      getData();
    }
  }, [submiting]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ textAlign: "center", justifyItems: "center" }}>
      <TabContext value={value}>
        <AppBar position="static">
          <Grid container justifyContent="center">
            <TabList onChange={handleChange}>
              <Tab label="Forecast Card" value="1" />
              <Tab label="Forecast Chart" value="2" />
              <Tab label="Heat index Calculate" value="3" />
            </TabList>
          </Grid>
        </AppBar>
        <TabPanel value="1">
          <Home data={state}/>
        </TabPanel>
        <TabPanel value="2">
          <Chart data={state} />
        </TabPanel>
        <TabPanel value="3">
          <Calculate />
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default MainNavigation;

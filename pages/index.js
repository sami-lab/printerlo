import React, { useState } from "react";

import {
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Typography,
  Drawer,
  useMediaQuery,
  Grid,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import SideBar from "../src/components/pagesComponent/starMapEditor/sideBar";

export default function Home() {
  //const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {/* -----------main div------------ */}
      <Grid
        container
        direction={matchesSM ? "row" : "column"}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Grid
          item
          style={{
            border: "1px solid black",
            flex: 1,
          }}
        >
          hello
        </Grid>
        {/* this is for sidebar */}
        <Grid item>
          <SideBar />
        </Grid>
      </Grid>
    </>
  );
}

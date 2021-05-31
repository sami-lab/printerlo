import React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Typography,
  Drawer,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import DoneIcon from "@material-ui/icons/Done";
import ReportIcon from "@material-ui/icons/Report";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../../../Link";

export const sideBarWidth = 400;
const useStyles = makeStyles((theme) => ({
  drawerIconContainer: {
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: "1em",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    width: 50,
    height: 50,
  },
  root: {
    display: "flex",
  },
  drawer: {
    width: "100%",
    flexShrink: 0,
  },
  drawerPaper: {
    width: sideBarWidth,
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
  },
  drawerItem: {
    color: "white",
    padding: "2px 16px",
    "&:hover": {
      opacity: 1,
    },
  },
  smallDrawerItem: {
    color: "white",
    opacity: 0.7,
    fontSize: "0.7rem",
    "&:hover": {
      opacity: 1,
    },
  },
  socialIcon: {
    opacity: 0.7,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function SideBar(props) {
  const classes = useStyles();

  const content = (
    <Grid
      style={{ height: "100%" }}
      container
      justify="space-between"
      direction="column"
      className={[classes.drawerContainer].join(" ")}
    >
      <Grid item></Grid>
      <Grid item style={{ marginLeft: "0.5em", marginBottom: "1em" }}></Grid>
    </Grid>
  );
  const sideBar = (
    <React.Fragment>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        open
        anchor="right"
      >
        {content}
      </Drawer>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <Hidden smDown>{sideBar}</Hidden>
      <Hidden mdUp>{content}</Hidden>
    </React.Fragment>
  );
}

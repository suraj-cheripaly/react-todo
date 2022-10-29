import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="h4">Todo App</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

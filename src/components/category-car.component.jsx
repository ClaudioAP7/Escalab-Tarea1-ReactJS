import React from "react";
import { withRouter } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const CategoryCar = ({ id, description, image, history, match }) => (
    <Grid item xs={12} sm={6} md={4} onClick={() => history.push(`${match.url}/${description.toLowerCase()}`)}>
      <Paper className="paper" elevation={3}>
        <h2>{description}</h2>
        <img src={image} width="350" height="200"></img>
      </Paper>
    </Grid>
);

export default withRouter(CategoryCar);

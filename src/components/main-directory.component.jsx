import React from "react";
import Grid from "@material-ui/core/Grid";

import CategoryCar from "./category-car.component.jsx";

import { CategoryCarData } from "../dummies/data.js";

class MainDirectory extends React.Component {
  constructor() {
    super();

    this.state = {
      CategoryCarData: CategoryCarData,
    };
  }

  
  render() {
    const { CategoryCarData } = this.state;

    return (
      <div className="directory-menu">
        &nbsp;&nbsp;
        <Grid container spacing={3} justify="center">
          {CategoryCarData.map(
            ({ id, ...otherCategoryCarProps }) => (
                <CategoryCar key={id} {...otherCategoryCarProps} />
            )
          )}
        </Grid>
      </div>
    );
  }
}

export default MainDirectory;

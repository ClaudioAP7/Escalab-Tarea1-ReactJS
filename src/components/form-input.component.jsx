import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const FormInput = ({ carsData }) => {

    const getCarByBrand = () => {
        
    }

    return (
        <Grid item xs={ 12 } sm={ 6 }>
          <Paper className="paper">
            <Autocomplete 
              id="SearchCar" 
              freeSolo 
              options={ carsData.map(car => car.brand ) }
              renderInput={ params => (
                  <TextField 
                     {...params}
                     label="Brand"
                     margin="normal"
                     variant="outlined"
                  />
              )}
            />
            <IconButton onClick={ () => getCarByBrand() }>
               <SearchIcon></SearchIcon>
            </IconButton>
          </Paper>
        </Grid>
    )
}

export default FormInput;

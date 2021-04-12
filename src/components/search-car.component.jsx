import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { cars_brand } from "../dummies/data.js";

import Cars from './cars.component';

const SearchCar = ({ carsData }) => {

    /* const [ cars, setCars ] = useState(); */
 
    const getCarByBrand = () => {
        const brand = document.querySelector('#SearchCar').value.toLowerCase().trim();
        const carsFilter = carsData.filter(car => car.brand.toLowerCase().trim().includes(brand));
        /* setCars(carsFilter)
        console.log(cars); */
    }

    return (
        <Grid container item md={12} justify="center" className="top-space">
            <Paper className="paper main-box">
                <Autocomplete 
                    id="SearchCar" 
                    freeSolo 
                    options={ cars_brand.map(car => car.brand ) }
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
            <Grid container spacing={3} justify="center" className="top-space">
                {/* { cars && <Cars cars={ cars } /> } */}
                {carsData.map(({id, ...otherCarProps}) => (
                        <Cars key={id} { ...otherCarProps } />
                ))} 

            </Grid>
        </Grid>
    )
}

export default SearchCar;
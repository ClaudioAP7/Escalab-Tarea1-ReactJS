import React from 'react'
import FormInput from './form-input.component.jsx';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const Cars = ({ price, patent, brand, model, image, color, year, category_car, branch_office }) => (
        <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
            <Paper className="paper">
                <Card>
                <CardActionArea>
                    <CardMedia component="img" src={ image } />
                    <CardContent>
                    <Typography component={'span'} gutterBottom variant="h5" component="h2">
                        { brand } - { model }
                    </Typography>
                    <Typography component={'span'} variant="body2" color="textSecondary" component="p">
                        <p>Patent: { patent }</p>
                        <Divider />
                        <p>Color: { color }</p>
                        <Divider />
                        <p>Year: { year }</p>
                        <Divider />
                        <p>Category: { category_car }</p>
                        <Divider />
                        <p>Branch Office: { branch_office }</p>
                        <Divider />
                        <p>Price: ${ price }</p>
                    </Typography>
                    <Typography component={'span'} variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores reprehenderit animi magnam hic quaerat omnis, a aspernatur ex facere, 
                        fugit recusandae deleniti cupiditate assumenda molestias rerum delectus impedit quam! Nesciunt!
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        More Information
                    </Button>
                </CardActions>
                </Card>
            </Paper>
        </Grid>
)

export default Cars;
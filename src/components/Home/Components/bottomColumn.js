import React from 'react'
import mission1Photo from '../../../assets/images/mission1.jpg';
import { Grid, Container,Button,Typography, Paper } from '@mui/material';
function BottomColumn(){
    return <Container>
        <Grid  sx={{mt:5}}>
            <Typography variant='h4'>
            MEDICAL EQUIPMENT OR SUPPLIES TO DONATE? LET US KNOW!
            </Typography>
        </Grid>
        <Grid  sx={{mt:5}} align="center">

        <Button variant="contained" color="info">More Info</Button>
        </Grid>
        <Grid sx={{mt:5}}>
            <Typography align='center' variant='h4'>
            OUR WORK
            </Typography>
            <Typography align="center" variant='h6'>
            See some of the work we have done from our initiatives and partnerships in Liberia.
            </Typography>
        </Grid>
        <Grid align="center">
            <img src={mission1Photo}/>
        </Grid>
        <Grid  sx={{mt:5,mb:5}} align="center">

        <Button variant="contained" color="info">View more</Button>
        </Grid>
    </Container>
}

export default BottomColumn
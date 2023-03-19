import React from "react";
import moment from "moment";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import WeatherIcon from "../Image/WeatherIcon";

function Weather(props) {
    return (
        <Paper elevation={2}
               sx={{
                   p: 2,
                   margin: 'auto',
                   maxWidth: 500,
                   flexGrow: 1,
                   backgroundColor: (theme) =>
                       theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
               }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <WeatherIcon alt={props.currentDesc} iconCode={props.currentSkyIcon} size={'4x'}
                    />
                </Grid>
                <Grid item xs={12} sm container spacing={2}>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography color={'#729343'} gutterBottom variant="subtitle1" component="div" fontWeight="bold">
                                {props.city}, {props.country}
                            </Typography>
                            <Typography color={'#096a2ecc'} variant="body2" gutterBottom>
                                {moment().format('LL')}
                            </Typography>
                            <Typography color={'#096a2ecc'} variant="body2">
                                {moment().format('dddd')}
                            </Typography>
                            <Typography color={'#096a2ecc'} variant="body2" >
                                Feels like: {Math.round(props.realTemp)} &deg;C
                            </Typography>
                            <Typography color={'#096a2ecc'} variant="body2" >
                                Wind speed: {props.wind} meter/sec
                            </Typography>
                            <Typography color={'#096a2ecc'} variant="body2">
                                Humidity: {props.currentHumidity} %
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography color={'#729343'} variant="subtitle1" component="div" fontWeight="bold">
                            {Math.round(props.currentTemp)} &deg;C
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )

}

export default Weather;
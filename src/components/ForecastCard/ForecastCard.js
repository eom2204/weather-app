import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import WeatherIcon from "../Image/WeatherIcon";

function ForecastCard(props) {
    return (<div>
        {props.forecastData && props.forecastData.map((forecast, index) => {
            return (<Paper key={index} elevation={2}
                           sx={{
                               p: 2,
                               margin: 'auto',
                               maxWidth: 500,
                               flexGrow: 1,
                               backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                           }}
                >
                    <Grid container spacing={2}>
                        <Grid item>
                            <WeatherIcon
                                alt={forecast.weather[0].description}
                                iconCode={forecast.weather[0].icon} size={'2x'}
                            />
                        </Grid>
                        <Grid item xs={12} sm container spacing={2}>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography color={'#729343'} gutterBottom variant="subtitle1" component="div">
                                        {Math.round(forecast.main.temp)} &deg;C
                                    </Typography>
                                    <Typography color={'#729343'} variant="body2">
                                        Feels like: {Math.round(forecast.main.feels_like)} &deg;C
                                    </Typography>
                                    <Typography color={'#096a2ecc'} variant="body2">
                                        Wind speed: {forecast.wind.speed} meter/sec
                                    </Typography>
                                    <Typography color={'#096a2ecc'} variant="body2">
                                        Humidity: {forecast.main.humidity} %
                                    </Typography>
                                    <Typography color={'#096a2ecc'} variant="body2" gutterBottom>
                                        {forecast.weather[0].main}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography color={'#729343'} variant="subtitle1" component="div">
                                    {forecast.dt_txt.split(' ')[1].slice(0, 5)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>)
        })}
    </div>)
}

export default ForecastCard;
import React, {useState} from "react";
import './App.css';

import Weather from "./components/Weather/Weather";
import Forecast from "./components/Forecast/Forecast";
import Form from "./components/Form";
import {getCurrentWeather} from "./api/WeatherService";
import {getForecast} from "./api/WeatherService";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Logo from "./assets/images/logo-color-transparent.png";


function App() {
    const [weatherData, setWeatherData] = useState('');
    const [forecastData, setForecastData] = useState([]);

    const getWeatherData = (inputCityData) => {

        let [lat, lon] = inputCityData.value.split(' ')
        let [city, countryCode] = inputCityData.label.split(',')

        getCurrentWeather({
            city: city.trim(), countryCode: countryCode.trim()
        }).then(currentWeatherData => {setWeatherData(currentWeatherData);
            console.log("Current weather: ", currentWeatherData);
        });

        getForecast({
            lat: lat.trim(), lon: lon.trim(),
        }).then(forecastData => {setForecastData(forecastData);
            console.log("Forecast: ", forecastData);
        });
    }

    return (<div className="App">
            <Container>
                <Grid container columnSpacing={2} rowSpacing={2}>
                    <Grid item xs={12}>
                        <Box
                            component="img"
                            sx={{
                                p: 1, height: {xs: '64px', sm: '98px', md: '124px'}, width: 'auto',
                            }}
                            alt="logo"
                            src={Logo}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box>
                            <Form onDataRecived={getWeatherData}></Form>
                        </Box>
                    </Grid>
                    <Grid item xs={12} rowSpacing={2}>
                        {weatherData && <Weather city={weatherData.name} country={weatherData.sys.country}
                                                 currentSky={weatherData.weather[0].main}
                                                 currentSkyIcon={weatherData.weather[0].icon}
                                                 currentDesc={weatherData.weather[0].description}
                                                 currentHumidity={weatherData.main.humidity}
                                                 currentTemp={weatherData.main.temp}
                                                 realTemp={weatherData.main.feels_like}
                                                 wind={weatherData.wind.speed}></Weather>}
                    </Grid>
                    <Grid container item xs={12} rowSpacing={2}>
                        <Forecast forecastData={forecastData}></Forecast>
                    </Grid>
                </Grid>
            </Container>
        </div>);
}

export default App;

import React, {useState} from "react";

import ForecastCard from "../ForecastCard/ForecastCard";
import "./Forecast.scss";

import moment from "moment";
import Button from "@mui/material/Button";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import CycloneIcon from '@mui/icons-material/Cyclone';
import Grid from "@mui/material/Grid";

function Forecast(props) {

    const [isVisible, setVisible] = useState(false);
    const [expanded, setExpanded] = React.useState(false);

    const showForecast = () => {
        setVisible(!isVisible);
    };
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (<Grid item xs={12}
                  style={{display: props.forecastData.length === 0 ? "none" : "block"}}>
        <Grid
            container
            justifyContent="center"
            spacing={2}
            sx={{
                p: 1
            }}>
            <Button variant="contained"
                    sx={{
                        backgroundColor: '#729343', '&:hover': {
                            backgroundColor: '#096A2E',
                        }
                    }}
                    onClick={showForecast}
                    startIcon={<ThermostatIcon/>}
            >
                Daily forecast
            </Button>
        </Grid>
        <div className={isVisible ? "forecast--visible" : "forecast--hidden"}>
            {props.forecastData.length > 0 && props.forecastData.map((dayForecast, index) => <Accordion
                key={index}
                expanded={`panel${index}` === expanded}
                onChange={handleChange(`panel${index}`)}
            >
                <AccordionSummary
                    expandIcon={<CycloneIcon sx={{color: '#729343'}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography color={'#729343'}>
                        {dayForecast[0]}, {moment(dayForecast[0]).format('dddd')}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ForecastCard forecastData={dayForecast[1]}></ForecastCard>
                </AccordionDetails>
            </Accordion>)}
        </div>
    </Grid>)
}

export default Forecast;
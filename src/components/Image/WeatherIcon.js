import React from "react";
import {styled} from "@mui/material/styles";

function WeatherIcon(props) {

    let isNightIcon = props.iconCode[2] === 'n';

    let filter = isNightIcon ? 'invert(48%) sepia(6%) saturate(2699%) hue-rotate(43deg) brightness(107%) contrast(98%);' : 'invert(29%) sepia(71%) saturate(564%) hue-rotate(90deg) brightness(93%) contrast(95%);';

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        filter: filter,
    });

    return (
        <Img
            alt={props.alt}
            src={`https://openweathermap.org/img/wn/${props.iconCode}@${props.size}.png`}
        />
    )
}

export default WeatherIcon
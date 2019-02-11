import React from 'react';
import SVG from 'react-inlinesvg';
import './style.css';

const PatioCard = (props)=>{
    const date = new Date(props.weather.time *1000);
    const day = date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    let patioMsg = '';
    if(props.weather.temperatureHigh < 60) {
        patioMsg = `It's not a patio day homeslice`;
    } else {
        patioMsg = 'Awww YEAHH PATIO DAY BIOTCH';
    }

    // an array of an object with keys: the icon message value: icon image source *note these messages are specific to darksky weather api
    const iconMsgArray = [
        {
            'clear-day': '/assets/amcharts_weather_icons_1.0.0/animated/day.svg',
        },
        {
            'clear-night': '/assets/amcharts_weather_icons_1.0.0/animated/night.svg',
        },
        {
            'rain': '/assets/amcharts_weather_icons_1.0.0/animated/rainy-1.svg',
        },
        {
            'snow': '/assets/amcharts_weather_icons_1.0.0/animated/snowy-1.svg',
        },
        {
            'sleet': '/assets/amcharts_weather_icons_1.0.0/animated/rainy-4.svg',
        },
        {
            'wind': '/assets/amcharts_weather_icons_1.0.0/animated/day.svg',
        },
        {
            'fog': '/assets/amcharts_weather_icons_1.0.0/animated/cloudy.svg',
        },
        {
            'cloudy': '/assets/amcharts_weather_icons_1.0.0/animated/cloudy.svg',
        },
        {
            'partly-cloudy-day': '/assets/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg',
        },
        {
            'partly-cloudy-night': '/assets/amcharts_weather_icons_1.0.0/animated/cloudy-night-1.svg',
        }
    ]
    let imgSrc;
    console.log(iconMsgArray);
    for(let i = 0; i < iconMsgArray.length; i++){
        if(props.weather.icon === Object.keys(iconMsgArray[i])[0]){
            imgSrc = Object.values(iconMsgArray[i])[0];
        }
    }
    return(
        <div>
            <h1>{day}</h1>
            <SVG
                src={imgSrc}
                className="svgImage"
            >
            </SVG>
            <p>{props.weather.summary}</p><br/>
            <p>High of: {props.weather.temperatureHigh}</p>
            <p>Low of: {props.weather.temperatureLow}</p>
            <p>{patioMsg}</p>
        </div>
    )
}

export default PatioCard;
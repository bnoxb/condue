import React from 'react';

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
            'clear-day': 'sun picture',
        },
        {
            'clear-night': 'moon picture',
        },
        {
            'rain': 'rain picture',
        },
        {
            'snow': 'snowflake',
        },
        {
            'sleet': 'ice picture',
        },
        {
            'wind': 'windy',
        },
        {
            'fog': 'fog picture',
        },
        {
            'cloudy': 'clouds',
        },
        {
            'partly-cloudy-day': 'partial cloud sun pic',
        },
        {
            'partly-cloudy-night': 'moon picture',
        }
    ]
    let imgSrc;

    for(let i = 0; i < iconMsgArray.length; i++){
        if(props.weather.icon === Object.keys(iconMsgArray[i])[0]){
            imgSrc = Object.values(iconMsgArray[i])[0];
        }
    }

    return(
        <div>
            <h1>{day}</h1>
            <h4>{props.weather.icon}</h4>
            <h4>(IMAGE WOULD BE HERE {imgSrc})</h4>
            <p>{props.weather.summary}</p><br/>
            <p>High of:{props.weather.temperatureHigh}</p>
            <p>Low of:{props.weather.temperatureLow}</p>
            <p>{patioMsg}</p>
        </div>
    )
}

export default PatioCard;
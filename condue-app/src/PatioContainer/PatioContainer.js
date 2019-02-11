import React, { Component } from 'react';
import PatioCard from './PatioCard/PatioCard';

class PatioContainer extends Component {
    constructor(){
        super()

        this.state = {
            weather: [],
            currentWeather: {},
        }
    }

    componentDidMount( ){
        this.getWeather();
    }

    getWeather = async () => {
        try{
            const weatherResponse = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f731e2c5a8a857fbe7119a0c1b5e76c9/39.693967,-104.911074?exclude=minutely,hourly`);

            if(!weatherResponse.ok){
                throw Error(weatherResponse.statusText);
            }

            const parsedWeather = await weatherResponse.json();

            this.setState({
                weather: parsedWeather.daily.data,
                currentWeather: parsedWeather.currently
            })
        }catch(err){
            console.log(err);
        }
    }

    render(){
        console.log(this.state);
        const weatherList = this.state.weather.map((weather, i) => {
            return <PatioCard key={i} weather={weather} />     
                
        })
        console.log(this.state, ' is this state');
        return(
            <div>
                <h1>Ittttssss A patio day baby yeah!</h1>
                {weatherList}
            </div>
        )
    }
}

export default PatioContainer;
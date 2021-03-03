
import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react'

const API_KEY= '8768da57bd891fa41359848c1665c9e4';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8768da57bd891fa41359848c1665c9e4&units=metric'






export default class Weather extends React.Component {

    state={

        icon:undefined,
        temp: undefined,
        city: undefined,
        country:undefined ,
        humidity: undefined,
        sunset: undefined,
        description: '...',
      }

      gettingWeather= async (e) =>{
        e.preventDefault();
        const city=e.target.elements.city.value;
    console.log(  'xbfc', city)
        if(city){
          const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8768da57bd891fa41359848c1665c9e4&units=metric`)
          const data = await api_url.json()
          console.log(data)

          var sunset=data.sys.sunset;

          var date = new Date();
          date.setTime(sunset);
          var sunset_date = date.getHours()+ ":" + date.getMinutes()+ ":" + date.getSeconds()

          this.setState({
            city: data.name,
            temp: Math.ceil(data.main.temp)+ '°C',
          // icon:data.weather[0].icon,
            country:data.sys.country,
            humidity: data.main.humidity,
            sunset:  sunset_date,
            description: data.weather[0].description
          })
        }
      }
      render(){
         return (

        <div  className='weather-form'>
        <h2>Weather</h2>
        <form onSubmit={ this.gettingWeather }>
   <input type='text'  placeholder='Choose city..' name='city' />
        </form>

<p>{this.state.city}</p>
<p>{this.state.temp }</p>
<p>Today is {this.state.description}</p>

        </div>
    )
      }

}

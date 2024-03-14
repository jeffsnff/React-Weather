import { useState, useEffect } from 'react';
import axios from 'axios';
const APIKEY = import.meta.env.VITE_REACT_APP_API;

import Location from '../Location/Location.jsx';
import CurrentWeather from '../CurrentWeather/CurrentWeather.jsx';
import Forecast from '../Forecast/Forecast.jsx';
import './WeatherDisplay.css';

const WeatherDisplay = () => {

  const Fahrenheit = 'Fahrenheit';
  const Celsius = 'Celsius';
  const [location, setLocation] = useState([])
  const [currentWeather, setCurrentWeather] = useState([])
  const [forecast, setForcast] = useState([])
  const [text, setText] = useState('')
  const [icon, setIcon] = useState('')
  const [unit, setUnit] = useState(Fahrenheit)
  const [buttonText, setButtonText] = useState(Celsius)
  const [city, setCity] = useState(`bucaramanga`)
  const [days, setDays] = useState('3')

   useEffect(() => {
      getWeather();
  },[])

  function getWeather(){
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${city}&days=${days}&aqi=no&alerts=no`)
      .then(response => {
        setLocation(response.data.location)
        setForcast(response.data.forecast.forecastday)
        setCurrentWeather(response.data.current)
        setText(response.data.current.condition.text)
        setIcon(response.data.current.condition.icon)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const imperial = {
    unit: Fahrenheit,
    feelslike: currentWeather.feelslike_f,
    gustSpeed: currentWeather.gust_mph,
    humidity: currentWeather.humidity,
    precip: currentWeather.precip_in,
    pressure: currentWeather.pressure_in,
    temp: currentWeather.temp_f,
    uv: currentWeather.uv,
    visibility: currentWeather.vis_miles,
    windDir: currentWeather.wind_dir,
    windSpeed: currentWeather.wind_mph,
    icon: icon,
    text: text
  }

  const metric = {
    unit: Celsius,
    feelslike: currentWeather.feelslike_c,
    gustSpeed: currentWeather.gust_kph,
    humidity: currentWeather.humidity,
    precip: currentWeather.precip_mm,
    pressure: currentWeather.pressure_mb,
    temp: currentWeather.temp_c,
    uv: currentWeather.uv,
    visibility: currentWeather.vis_km,
    windDir: currentWeather.wind_dir,
    windSpeed: currentWeather.wind_kph,
    icon: icon,
    text: text
  }

  const handleWeatherUnit = () => {
    if(unit === Fahrenheit){
      setUnit(Celsius)
      setButtonText(Fahrenheit)
    }else if(unit === Celsius){
      setUnit(Fahrenheit)
      setButtonText(Celsius)
    }
  }

  let displayWeather;
  if(unit === Fahrenheit){
    displayWeather = <CurrentWeather 
      currentWeather={imperial}
      weatherUnit={unit}
    />
  }else{
    displayWeather = <CurrentWeather 
      currentWeather={metric}
      weatherUnit={unit}
    />
  }

  return(
    <div>
      <Location
        name={location.name}
        region={location.region}
        country={location.country}
        localtime={location.localtime}
        timeZone={location.tz_id}
        currentWeatherIcon={icon}
      />
      <div className='displayWeather-div'>
        {displayWeather}
      </div>
      <div className='displayForecast-div'>
        <Forecast forecastArray={forecast} displayUnit={unit} />
      </div>
      
      <div className='button-div' >
        <button onClick={() => handleWeatherUnit()}>Change to {buttonText}</button>
        <button onClick={() => getWeather()}>Refresh Weather</button>
      </div>
      
    </div>
  )
}

export default WeatherDisplay;
import { useState, useEffect } from 'react';
import axios from 'axios';
const APIKEY = import.meta.env.VITE_REACT_APP_API;

import Location from '../Location/Location.jsx';
import CurrentWeather from '../CurrentWeather/CurrentWeather.jsx';

const Forecast = () => {

  const [location, setLocation] = useState([])
  const [currentWeather, setCurrentWeather] = useState([])
  const [forecast, setForcast] = useState([])
  const [city, setCity] = useState('Provo')
  const [days, setDays] = useState('1')


  useEffect(() => {
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${city}&days=${days}&aqi=no&alerts=no`)
    .then(response => {
      setLocation(response.data.location)
      setForcast(response.data.forecast)
      setCurrentWeather(response.data.current)
    })
    .catch(error => {
      console.log(error)
    })
  },[])
  
  // console.log(forecast)

  return(
    <div className='weatherDisplay' >
      <Location
        name={location.name}
        region={location.region}
        country={location.country}
        localtime={location.localtime}
        timeZone={location.tz_id}
      />
      <CurrentWeather
        currentWeather={currentWeather}
      />

    </div>
  )
}

export default Forecast
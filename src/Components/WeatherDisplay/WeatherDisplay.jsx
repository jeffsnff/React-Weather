import { useState, useEffect } from 'react'
import axios from 'axios'
const APIKEY = import.meta.env.VITE_REACT_APP_API
const CITY = 'Provo'
const DAYS = '3'

import Location from '../Location/Location.jsx';

const Forecast = () => {

  const [location, setLocation] = useState([])
  const [currentWeather, setCurrentWeather] = useState([])
  const [forecast, setForcast] = useState([])


  useEffect(() => {
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${CITY}&days=${DAYS}&aqi=no&alerts=no`)
    .then(response => {
      setLocation(response.data.location)
      setForcast(response.data.forecast)
      setCurrentWeather(response.data.current)
    })
    .catch(error => {
      console.log(error)
    })
  },[])
  
  console.log(currentWeather)
  console.log(forecast)

  return(
    <div className='weatherDisplay' >
      <Location
        name={location.name}
        region={location.region}
        country={location.country}
        localtime={location.localtime}
        timeZone={location.tz_id}
      />

    </div>
  )
}

export default Forecast
import { useState, useEffect } from 'react'
import axios from 'axios'
const APIKEY = import.meta.env.VITE_REACT_APP_API
const CITY = 'Provo'
const DAYS = '3'

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
  console.log(location)

  return(
    <div className='weatherDisplay' >
      <h1>Forcast</h1>

    </div>
    
    
    
  )
}

export default Forecast
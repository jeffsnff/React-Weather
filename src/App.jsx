import { useState, useEffect } from 'react'
import axios from 'axios'

const APIKEY = import.meta.env.VITE_REACT_APP_API

function App() {
  const [localWeather, setLocalWeather ] = useState([]);
  
  
  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=provo,us&APPID=${APIKEY}`)
    .then(response => {
      setLocalWeather(response.data)
    })
  },[])

    console.log(localWeather)
  

  return (
   <h1>Weather Project</h1>
  )
}

export default App

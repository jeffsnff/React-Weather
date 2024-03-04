import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [localWeather, setLocalWeather ] = useState([]);
  const APIKEY = '83bd5de0e78499f0f5c97cc0883851d8'
  
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

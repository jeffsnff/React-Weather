const CurrentWeather = ({weatherUnit, currentWeather}) => {

    console.log(currentWeather)
  
  return(

    <>
      <h3>{weatherUnit}</h3>
      <p><img src={currentWeather.icon} /> {currentWeather.text}</p>   
      <p>Feels Like : {currentWeather.feelslike} {weatherUnit}</p>
      <p>Current Temperature : {currentWeather.temp} {weatherUnit}</p>
    </>
  )
}

export default CurrentWeather;
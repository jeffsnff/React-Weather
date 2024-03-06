const CurrentWeather = ({weatherUnit, currentWeather}) => {

    console.log(currentWeather)
  
  return(

    <>
      <h3>{weatherUnit}</h3>
      <p><img src={currentWeather.icon} /> {currentWeather.text}</p>   
      <p>Feels Like : {currentWeather.feelslike}</p>
      <p>Current Temperature : {currentWeather.temp} F</p>
    </>
  )
}

export default CurrentWeather;
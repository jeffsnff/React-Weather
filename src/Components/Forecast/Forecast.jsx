
const Forecast = ({forecastArray}) => {
  console.log(forecastArray)

  const displayForecast = forecastArray.map((day) => {
    console.log(day)
  })
  return(
    <h1>Forecast Page</h1>
  );
}

export default Forecast;
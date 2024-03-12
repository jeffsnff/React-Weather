import ForecastDisplay from "../ForecastDisplay/ForecastDisplay.jsx"

const Forecast = ({forecastArray, displayUnit}) => {

  

  const displayForecast = forecastArray.map((day) => {
    return(
      <ForecastDisplay key={day.date_epoch} forecastDay={day} displayUnit={displayUnit} />
    )
  })
  return(
    <div>
      {displayForecast}
    </div>
  );
}

export default Forecast;
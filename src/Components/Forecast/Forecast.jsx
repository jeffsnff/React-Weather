import ForecastDisplay from "../ForecastDisplay/ForecastDisplay.jsx"
import './Forecast.css';
const Forecast = ({forecastArray, displayUnit}) => {

  const Fahrenheit = 'Fahrenheit';
  const Celsius = 'Celsius';

  const displayForecast = forecastArray.map((day) => {
    const date = day.date
    const key = day.date_epoch
    const astro = {
      sunrise: day.astro.sunrise,
      sunset: day.astro.sunset
    }
    const weather = {
      text: day.day.condition.text,
      icon: day.day.condition.icon
    }
    const imperial = {
      maxtemp: day.day.maxtemp_f,
      mintemp: day.day.mintemp_f
    }
    const metric = {
      maxtemp: day.day.maxtemp_c,
      mintemp: day.day.mintemp_c
    }

    if(displayUnit === Fahrenheit){
      return (
        <ForecastDisplay
          key={key}
          date={date}
          temp={imperial}
          weather={weather}
          astro={astro}
          unit={'F'}
        />
      )
    }else{
      return (
        <ForecastDisplay 
          key={day.date_epoch}
          date={date}
          temp={metric}
          weather={weather}
          astro={astro}
          unit={'C'}
        />
      )
    }
  })
  return(
    <div className='forecast-div'>
      {displayForecast}
    </div>
  );
}

export default Forecast;
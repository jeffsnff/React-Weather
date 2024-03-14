import './ForecastDisplay.css';
const ForecastDisplay = ({date, temp, weather, astro, unit}) => {

  return(
    <div className='forecastDisplay-div'>
      <h3>{date}</h3>
      <h3>Astro</h3>
      <div>
        <p>
          Sunrise : {astro.sunrise} <tab />
          Sunset : {astro.sunset}
        </p>
        <h3>Forecast</h3>
        <p>
          Weather : {weather.text}
          <img src={weather.icon}/>
        </p>
        <p>
          Temp Range : {temp.mintemp} {unit} - {temp.maxtemp} {unit}
        </p>
      </div>
    </div>
  )
}

export default ForecastDisplay;
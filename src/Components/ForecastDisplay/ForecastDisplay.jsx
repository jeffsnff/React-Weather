
const ForecastDisplay = ({forecastDay, displayUnit}) => {
  console.log(forecastDay)
  
  return(
    
    <div>
      <h3>{forecastDay.date}</h3>
      <h3>Astro</h3>
      <div>
        <p>
          Sunrise : {forecastDay.astro.sunrise} 
          Sunset : {forecastDay.astro.sunset}
        </p>
        <p>
          Weather : {forecastDay.day.condition.text}
          <img src={forecastDay.day.condition.icon}/>
        </p>
        <p>
          Temp Range : {forecastDay.day.mintemp_f} - {forecastDay.day.maxtemp_f}
        </p>
      </div>
    </div>
  )
}

export default ForecastDisplay;
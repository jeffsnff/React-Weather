import './CurrentWeather.css'

const CurrentWeather = ({weatherUnit, currentWeather}) => {

  
  return(
    <div className='currentWeather-div'>
      <div>
        <h3>Current Weather</h3>
        <div className='current-div'>
          <p>Currently : {currentWeather.text} </p>
          <img className='current-icon' src={currentWeather.icon} />
        </div>
        <p>Feels Like : {currentWeather.feelslike} {weatherUnit}</p>
        <p>Current Temperature : {currentWeather.temp} {weatherUnit}</p>
      </div>
      
    </div>
  )
}

export default CurrentWeather;
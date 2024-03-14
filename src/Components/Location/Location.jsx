import './Location.css'

const Location = ({name, country, localtime, region, timeZone, currentWeatherIcon, handleSearchChange, getWeather}) => {
  return(
    <div className='location-div'>
      <div>
        <div className='location-info'>
        <img src={currentWeatherIcon} />
        <h2>{name} {region}</h2>
      </div>
      <p>{country}</p>
      <p>Current Time : {localtime} {timeZone}</p>
      <input onChange={handleSearchChange} type='text' placeholder='City Name'/>
      <button onClick={() => getWeather()} >Search</button>
      </div>
    </div>
  )
}

export default Location;
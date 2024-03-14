import './Location.css'

const Location = ({name, country, localtime, region, timeZone, currentWeatherIcon}) => {
  return(
    <div className='location-div'>
      <div>
        <div className='location-info'>
        <img src={currentWeatherIcon} />
        <h2>{name} {region}</h2>
      </div>
      <p>{country}</p>
      <p>Current Time : {localtime} {timeZone}</p>
      </div>
      
    </div>
  )
}

export default Location;
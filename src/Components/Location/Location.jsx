
const Location = ({name, country, localtime, region, timeZone}) => {
  return(
    <div>
      <h2>{name} {region}</h2>
      <p>{country}</p>
      <p>Current Time : {localtime} {timeZone}</p>
    </div>
  )
}

export default Location;
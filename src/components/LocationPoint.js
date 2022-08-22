import { Icon } from '@iconify/react'
import volcanoIcon from '@iconify/icons-mdi/volcano'
import fireIcon from '@iconify/icons-mdi/pine-tree-fire'
import stormIcon from '@iconify/icons-mdi/weather-lightning'

const LocationPoint = ({ lat, lng, onClick, symbol }) => {
  let locationIcon = volcanoIcon;
  let iconClass = 'location-marker-volcano'
  if(symbol == 'fire') {
    locationIcon = fireIcon;
    iconClass = 'location-marker-fire'
  } else if(symbol == 'storm') {
    locationIcon = stormIcon;
    iconClass = 'location-marker-storm'
  }
  return (
    <div className="location-point" onClick={onClick}>
      <Icon icon={locationIcon} className={iconClass} />
    </div>
  )
}

export default LocationPoint
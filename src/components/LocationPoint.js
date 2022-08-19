import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/cloud-alert'

const LocationPoint = ({ lat, lng, onClick }) => {
  return (
    <div className="location-point" onClick={onClick}>
      <Icon icon={locationIcon} className="location-marker" />
    </div>
  )
}

export default LocationPoint
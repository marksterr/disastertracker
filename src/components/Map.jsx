import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPoint from './LocationPoint'
import InfoBox from './InfoBox'

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)

  const points = eventData.map(ev => {
    if(ev.categories[0].id == 'volcanoes') {
      return <LocationPoint lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]}
      onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} symbol={'volcano'}/>
    } else if (ev.categories[0].id == 'wildfires') {
      return <LocationPoint lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]}
      onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} symbol={'fire'}/>
    } else {
      return <LocationPoint lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]}
      onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} symbol={'storm'}/>
    }
    return null
  })

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDHyvBbr0LkkC_T-dmN6O80-VoGF_kydcM' }}
        defaultCenter={ center } 
        defaultZoom={ zoom }
      >
        {points}
      </GoogleMapReact>
      {locationInfo && <InfoBox info={locationInfo}/>}
    </div>
  )
}

// default props
Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
}

export default Map
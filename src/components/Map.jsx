import GoogleMapReact from 'google-map-react'
import LocationPoint from './LocationPoint'

const Map = ({ eventData, center, zoom }) => {
  const points = eventData.map(ev => {
    if(ev.categories[0].id == 'wildfires') {
      return <LocationPoint lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]}/>
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
import GoogleMapReact from 'google-map-react'
import LocationPoint from './LocationPoint'

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDHyvBbr0LkkC_T-dmN6O80-VoGF_kydcM' }}
        defaultCenter={ center } 
        defaultZoom={ zoom }
      >
        <LocationPoint lat={center.lat} lng={center.lng}/>
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
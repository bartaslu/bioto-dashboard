import React from 'react'
import './map.scss'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: 54.86374288415455,
    lng: 24.586038775462193,
  };

const Map = () => {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyCcilbbFqMwj9c_Tq69dbUdmEXfe29MsSo"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])




    return isLoaded ? (
        <div className="map">
            <div className="container">
                <div className="title">
                  <span>Elektrinės lokacija</span>
                </div>
                <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                >
                </GoogleMap>
            </div>
        </div>
    ) : <></>
}

export default React.memo(Map)
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import React from 'react';

const MapGoogle = () => {

    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    const center = {
        lat: 40.837680822574484,
        lng: 31.158745927524024
    };

    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        >
            <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={18}
                  >
                  <Marker position={center} />
            </GoogleMap>
        </LoadScript>

    );
};

export default MapGoogle;
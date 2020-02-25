import React, { Component } from "react";
import {
  GoogleMap,
  withGoogleMap,
  DirectionsRenderer,
  Marker
} from "react-google-maps";

export default class Map extends Component {
  render() {
    const { pickup, destination, directions, width, height } = this.props;
    const WrappedMap = withGoogleMap(() => (
      <GoogleMap
        defaultCenter={
          pickup
            ? pickup
            : destination
            ? destination
            : { lat: -36.8485, lng: 174.7633 }
        }
        defaultZoom={10}
      >
        {directions ? (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                strokeColor: "#3a3973",
                strokeWeight: 4
              },
              suppressMarkers: true
            }}
          />
        ) : (
          <div></div>
        )}
        {pickup ? (
          <Marker
            position={pickup}
            icon={{
              url: "/assets/img/pin-up.png",
              scaledSize: new window.google.maps.Size(40, 40)
            }}
          />
        ) : (
          <div />
        )}
        {destination ? (
          <Marker
            position={destination}
            icon={{
              url: "/assets/img/pin-down.png",
              scaledSize: new window.google.maps.Size(40, 40)
            }}
          />
        ) : (
          <div />
        )}
      </GoogleMap>
    ));

    return (
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ width: width, height: height }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    );
  }
}

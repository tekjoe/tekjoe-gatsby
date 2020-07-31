import React, { Component } from "react"
import { Map, Marker, TileLayer, Popup } from "react-leaflet"

const apiKey = process.env.GATSBY_API_KEY

export default class LeafletMap extends Component {
  state = {
    lat: 42.995701,
    lng: -87.897196,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    if (typeof window !== "undefined") {
      return (
        <Map
          center={position}
          zoom={this.state.zoom}
          zoomControl={true}
          scrollWheelZoom={false}
          style={{ gridColumn: "1/-1", height: 500, marginTop: "3rem" }}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={`https://api.mapbox.com/styles/v1/tekjoe/ck558iss20d681cqeyj4u2ov6/tiles/256/{z}/{x}/{y}@2x?access_token=${apiKey}`}
          />
          <Marker position={position}>
            <Popup>
              <p>When I'm not online, I'm here.</p>
            </Popup>
          </Marker>
        </Map>
      )
    }
    return null
  }
}

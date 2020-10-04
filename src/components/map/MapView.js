import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../../assets/data';
import Markers from './VenueMarkers';
import styles from './map.module.css';
//import state from '../quiz/Quiz';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 40, lng: -95 },
      zoom: 4,
    }
    /*
    if (state.Animals) {
      const category = Animals;
    }
    else if (state.Environment) {
      const category = Environment;
    }
    else if (state.Blm) {
      const category = Blm;
    }
    else if (state.Covid) {
      const category = Covid;
    }
    else if (state.Homelessness) {
      const category = Homelessness;
    }
    else if (state.Disability) {
      const category = Disability;
    }
    else if (state.Health) {
      const category = Health;
    }
    else if (state.Voting) {
      const category = Voting;
    }
    else if (state.Immigration) {
      const category = Immigration;
    }
    else if (state.Refugee) {
      const category = Refugee;
    }
    else if (state.Education) {
      const category = Education;
    }
    */
  }
  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <div className={styles.container}>
        <Map center={currentLocation} zoom={zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />

          <Markers venues={data.venues}/>
        </Map>
      </div>
    );
  }
}

export default MapView;

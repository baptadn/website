import React, { Component } from 'react';
import MapBox from 'mapbox.js';
import moment from 'moment';
import run from '../run.json';

export default class RunMap extends Component {

  constructor() {
    super();

    this.map = null;
    this.state = { info: ''};
  }

  initMap() {
    window.L.mapbox.accessToken = 'pk.eyJ1Ijoic2hpbmV3b3JrIiwiYSI6IlJ2eW9LalkifQ.2hEyr-Y9_cMlaW-UohSmig';
    this.map = window.L.mapbox.map('map', 'shinework.d48cc5ab', { zoomControl: false, attributionControl:false });
    this.map.scrollWheelZoom.disable();

    var date = moment(run.start).format('D/MM/YY');
    var info = date + ' - ' + Math.ceil(run.distance / 1000) + ' Km / ' + Math.ceil(run.duration / 60) + ' minutes / ' + Math.ceil(run.calories) + ' calories';

    var arrayPoint = [];
    run.path.forEach((e) => {
      arrayPoint.push([e.longitude, e.latitude]);
    });

    this.drawRun(arrayPoint);
    this.setState({ info: info });
    this.map.setView(new L.LatLng(run.path[0].latitude, run.path[0].longitude), 13);
  }

  drawRun(arrayPoint) {
    var myLines = [{'type': 'LineString', 'coordinates': arrayPoint }];
    var myStyle = { 'color': '#a41212', 'weight': 5, 'opacity': 0.7 };
    L.geoJson(myLines, { style: myStyle }).addTo(this.map);
  }

  componentDidMount() {
    this.initMap();
  }

  render() {
    return (
      <div>
        <div id="map">
          <p>{ this.state.info }</p>
        </div>
      </div>
    );
  }
}

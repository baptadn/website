import React, { Component } from 'react';
import MapBox from 'mapbox.js';
import moment from 'moment';

import runJson from '../run.json';

export default class RunMap extends Component {

  constructor() {
    super();

    this.layers = [];
    this.map = null;
    this.runContainer = null;
  }

  initMap() {
    window.L.mapbox.accessToken = 'pk.eyJ1Ijoic2hpbmV3b3JrIiwiYSI6IlJ2eW9LalkifQ.2hEyr-Y9_cMlaW-UohSmig';
    this.map = window.L.mapbox.map('map', 'shinework.d48cc5ab', { zoomControl: false, attributionControl:false });
    this.map.scrollWheelZoom.disable();

    var runs = runJson.runs;
    var self = this;
    runs.forEach(function(run, i) {
      var date = moment(run.start).format('D/MM');
      self.runContainer += '<li class="run" data-run="' + i + '"><span>Run #' + (runs.length - i) + ' / ' + Math.ceil(run.distance / 1000) + 'km / ' + Math.ceil(run.duration / 60) + 'mn / ' + Math.ceil(run.calories) + ' calories (' + date + ')</span></li>';
      var arrayPoint = [];

      run.path.forEach(function (e) {
        arrayPoint.push([e.longitude, e.latitude]);
      });

      if (i === 0) {
        self.drawRun(arrayPoint);
        self.map.setView(new L.LatLng(runs[0].path[0].latitude, runs[0].path[0].longitude), 13);
      }

    });
  }

  drawRun(arrayPoint) {
    var self = this;

    this.layers.forEach(function(layer) {
      self.map.removeLayer(layer);
    });

    this.layers = [];
    var myLines = [{
      'type': 'LineString',
      'coordinates': arrayPoint
    }];

    var myStyle = {
      'color': 'black',
      'weight': 5,
      'opacity': 1
    };

    var layer = L.geoJson(myLines, {
      style: myStyle
    }).addTo(this.map);

    this.layers.push(layer);
  }

  componentDidMount() {
    this.initMap();
  }

  render() {
    return (
      <div id="map">
      </div>
    );
  }
}

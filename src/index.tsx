import React from 'react';
import ReactDOM from 'react-dom/client';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { MapsApp } from './MapsApp';

 
mapboxgl.accessToken = 'pk.eyJ1IjoiZWR6YW0iLCJhIjoiY2xlbnAwb2p1MDZidjNybDEwd2p0cmY3ZiJ9.jDGD_W8NsKO8b9RLi85RIQ';

if(!navigator.geolocation){
  alert('Tu navegador no tiene opción de Geolocalización');
  throw new Error('Tu navegador no tiene opción de Geolocalización');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);

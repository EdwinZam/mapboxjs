import axios from 'axios';

const directionsApi = axios.create({
    baseURL:'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        language: 'es',
        overview: 'full',
        steps: false,
        access_token: 'pk.eyJ1IjoiZWR6YW0iLCJhIjoiY2xlbnAwb2p1MDZidjNybDEwd2p0cmY3ZiJ9.jDGD_W8NsKO8b9RLi85RIQ'
    }
})

export default directionsApi;
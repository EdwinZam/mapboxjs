import axios from 'axios';

const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        languaje: 'es',
        access_token: 'pk.eyJ1IjoiZWR6YW0iLCJhIjoiY2xlbnAwb2p1MDZidjNybDEwd2p0cmY3ZiJ9.jDGD_W8NsKO8b9RLi85RIQ'
    }
})

export default searchApi;
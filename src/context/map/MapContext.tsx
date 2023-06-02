import { Map } from 'mapbox-gl';
import { createContext } from 'react';

interface MapContextPops {
    isMapReady: boolean;
    map?: Map,

    //Methods
    setMap: (map: Map) => void;
    getRouteBetweenPoints: (start: [number, number], end: [number, number]) => Promise<void>;
}

export const MapContext = createContext({} as MapContextPops )
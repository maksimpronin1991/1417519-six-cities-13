import {useEffect, useState, useRef, MutableRefObject} from 'react';
import { Map,TileLayer} from 'leaflet';
import { City } from '../../types/offer';

type UseMapScreenProps = {
  city: City;
  mapRef: MutableRefObject<HTMLElement | null>;
}

function useMap({mapRef, city}:UseMapScreenProps) {

  const [map, setMap] = useState<Map | null>();
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;

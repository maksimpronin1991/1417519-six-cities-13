import { useEffect, useRef,MutableRefObject} from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../custom-hooks/use-map';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../consts';
import { City, Offers } from '../../types/offer';

type MapScreenProps = {
  city: City;
  points: Offers;
}

function Map({city,points}:MapScreenProps) {
  const mapRef:MutableRefObject<HTMLElement | null> = useRef(null);
  const map = useMap({mapRef, city});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });


  useEffect(()=>{
    if(map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          })
          .addTo(map);
      });
    }
  },[map,points]);

  return (
    <section
      className='cities__map map'
      ref={mapRef}
    >
    </section>
  );
}

export default Map;

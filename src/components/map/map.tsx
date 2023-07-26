import { useEffect, useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import {layerGroup, Marker} from 'leaflet';
import useMap from '../custom-hooks/use-map';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../consts';
import { City, Offer, Offers } from '../../types/offer';

type MapScreenProps = {
  city: City;
  points: Offers;
  selectedPoint: Offer | undefined;
}

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


function Map({city,points,selectedPoint}:MapScreenProps) {

  const mapRef = useRef(null);
  const map = useMap({mapRef, city});

  useEffect(()=>{
    if(map) {
      const markerLayer = layerGroup().addTo(map);

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });
        marker.setIcon(
          selectedPoint !== undefined && point.id === selectedPoint.id
            ? currentCustomIcon
            : defaultCustomIcon
        )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  },[map,points,selectedPoint]);

  return (
    <section
      className='cities__map map'
      ref={mapRef}
    >
    </section>
  );
}

export default Map;

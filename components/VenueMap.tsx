import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState, useRef } from 'react';
import L from 'leaflet';

const DefaultIcon = L.icon({
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const VenueMap = () => {
  const [isMounted, setIsMounted] = useState(false);
  const mapRef = useRef(null);
  
  const position: [number, number] = [-11.029168018648132, -37.10135933106766];
  
  useEffect(() => {
    setIsMounted(true);
    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);


  if (!isMounted) return null;
  
  return (
    <div style={{ height: '300px', width: '100%', marginBottom: '20px', position: 'relative' }}>
      <MapContainer 
        center={position} 
        zoom={15} 
        style={{ height: '100%', width: '100%', borderRadius: '8px' }}
        dragging={false}
        touchZoom={false}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Villa Floresta <br /> Local do casamento
          </Popup>
        </Marker>
      </MapContainer>
      
    </div>
  );
};

export default VenueMap;
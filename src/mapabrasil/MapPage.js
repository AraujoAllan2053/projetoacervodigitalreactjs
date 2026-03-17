import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { hardRockLocations } from './locations';
import 'leaflet/dist/leaflet.css';

const MapPage = () => {
  const navigate = useNavigate();
  const centerBrasil = [-14.2350, -51.9253]; // Centro geográfico aproximado

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={centerBrasil} zoom={4} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        
        {hardRockLocations.map((loc) => (
          <CircleMarker
            key={loc.id}
            center={[loc.lat, loc.lng]}
            pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.5 }}
            radius={15} // Círculo grande conforme solicitado
            eventHandlers={{
              click: () => navigate(`/details/${loc.id}`)
            }}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1}>
              {loc.city} - Clique para detalhes
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;
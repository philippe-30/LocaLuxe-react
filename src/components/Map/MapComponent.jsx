import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

const MapComponent = ({ offres, locationVisible, setLocationVisible }) => {
  const [map, setMap] = useState(null);

  // Créez des icônes personnalisées pour chaque type d'offre
  const maisonIcon = L.icon({
    iconUrl: '../../../images/house.png',
    iconSize: [20, 20],
    iconAnchor: [16, 32],
  });

  const appartementIcon = L.icon({
    iconUrl: '../../../images/appartement.png',
    iconSize: [20, 20],
    iconAnchor: [16, 32],
  });
  const bureauIcon = L.icon({
    iconUrl: '../../../images/bureau.png',
    iconSize: [15, 15],
    iconAnchor: [16, 32],
  });

  const chaletIcon = L.icon({
    iconUrl: 'https://us.123rf.com/450wm/julimurt/julimurt2010/julimurt201000042/156846370-paysage-d-hiver-maison-dans-les-bois-maison-parmi-la-for%C3%AAt-d-hiver-illustration-vectorielle.jpg?ver=6',
    iconSize: [20, 20],
    iconAnchor: [16, 32],
  });

  // Fonction pour filtrer les marqueurs visibles en fonction de la carte
  const filterMarkers = (map) => {
    const visibleMarkers = offres.filter(offre => map.getBounds().contains([offre.localisation.latitude, offre.localisation.longitude]));
    setLocationVisible(visibleMarkers);
  };


  useEffect(() => {
    if (map) {
      map.on('zoomend', () => filterMarkers(map));
      map.on('moveend', () => filterMarkers(map));
      filterMarkers(map);
    }
  }, [map, offres, , filterMarkers]);



  // Custom hook pour obtenir la carte actuelle
  const CurrentMap = () => {
    const currentMap = useMapEvents({
      load: () => setMap(currentMap),
      zoomend: () => filterMarkers(currentMap),
      moveend: () => filterMarkers(currentMap),
    });

    return null;
  };


  return (
    <MapContainer center={[46.603354, 1.888334]} zoom={6} style={{ height: '500px', width: '60%' }} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <CurrentMap />
      {locationVisible.map((offre) => (
        <Marker
          key={offre.id}
          position={[offre.localisation?.latitude || 0, offre.localisation?.longitude || 0]}
          icon={
            offre.type === 'Maison'
              ? maisonIcon
              : offre.type === 'Appartement'
                ? appartementIcon
                : offre.type === 'Chalet'
                  ? chaletIcon
                  : bureauIcon
          }
        >
          <Popup>
            <strong> {offre.type} </strong>
            <br />
            Ville : {offre.ville}
            <br />
            Prix : {offre.prix} €
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;

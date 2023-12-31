import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

const MapComponent = ({ offres, locationVisible, setLocationVisible }) => {
  // const [locationVisible, setLocationVisible] = useState(offres);
  const [map, setMap] = useState(null);



  const createCustomIcon = (iconUrl, iconSize) => {
    return L.icon({
      iconUrl: iconUrl,
      iconSize: iconSize,
      iconAnchor: [16, 32],
    });
  };

  // Utilisation de la fonction pour créer des icônes personnalisées
  const maisonIcon = createCustomIcon('../../../images/house.png', [20, 20]);
  const appartementIcon = createCustomIcon('../../../images/appartement.png', [20, 20]);
  const bureauIcon = createCustomIcon('../../../images/bureau.png', [15, 15]);
  const chaletIcon = createCustomIcon('https://us.123rf.com/450wm/julimurt/julimurt2010/julimurt201000042/156846370-paysage-d-hiver-maison-dans-les-bois-maison-parmi-la-for%C3%AAt-d-hiver-illustration-vectorielle.jpg?ver=6', [20, 20]);

  // Custom hook pour obtenir la carte actuelle
  const CurrentMap = () => {
    const currentMap = useMapEvents({
      load: () => {
        setMap(currentMap);
        filterMarkers(currentMap);
      },
      zoomend: () => filterMarkers(currentMap),
      moveend: () => filterMarkers(currentMap),
    });

    return null;
  };

  // Fonction pour filtrer les marqueurs visibles en fonction de la carte
  const filterMarkers = (currentMap) => {
    const visibleMarkers = offres.filter(offre => currentMap.getBounds().contains([offre.localisation.latitude, offre.localisation.longitude]));
    setLocationVisible(visibleMarkers);
  };

  //mettre à jour la liste des offres visibles lorsque la carte est zoomée ou déplacée.
  useEffect(() => {
    if (map) {
      filterMarkers(map);
      map.on('zoomend', () => filterMarkers(map));
      map.on('moveend', () => filterMarkers(map));
    }
  }, [map, offres]);

  return (
    <MapContainer center={[46.603354, 1.888334]} zoom={6} style={{ height: '600px', width: '60%' }}>
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

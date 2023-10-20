import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import annonces from '../../data/annonces.json';
import L from 'leaflet';

// Créez des icônes personnalisées pour chaque type d'offre
const maisonIcon = L.icon({
  // iconUrl: 'https://img.lovepik.com/free-png/20211224/lovepik-house-png-image_400236441_wh300.png',
  iconUrl: '../../../images/house.png',
  iconSize: [20, 20],
  iconAnchor: [16, 32],
});

const appartementIcon = L.icon({
  // iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZFAxHsjtfXYqQZFQ2jVxazJ9FNC7O6MCapzfPYzXrYRUJf_SEG1CFEm4XMcJo-snwtU&usqp=CAU',
  iconUrl: '../../../images/appartement.png',
  iconSize: [20, 20],
  iconAnchor: [16, 32],
});
const bureauIcon = L.icon({
  iconUrl: '../../../images/bureau.png',
  // iconUrl: 'https://png.pngtree.com/thumb_back/fw800/background/20230702/pngtree-executive-red-leather-chair-in-a-professional-round-meeting-room-with-image_3743532.jpg',
  iconSize: [15, 15],
  iconAnchor: [16, 32],
});

const chaletIcon = L.icon({
  iconUrl: 'https://us.123rf.com/450wm/julimurt/julimurt2010/julimurt201000042/156846370-paysage-d-hiver-maison-dans-les-bois-maison-parmi-la-for%C3%AAt-d-hiver-illustration-vectorielle.jpg?ver=6',
  iconSize: [20, 20],
  iconAnchor: [16, 32],
});

const MapComponent = () => {
  const [offres, setOffres] = useState([]);
  useEffect(() => {
    // Récupérez les offres du fichier JSON
    setOffres(annonces.offres);
  }, []);
  return (
    <MapContainer center={[46.603354, 1.888334]} zoom={6} style={{ height: '600px', width: '80%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {offres.map((offre) => (
        <Marker
          key={offre.id}
          position={[offre.localisation.latitude, offre.localisation.longitude]}
          icon={offre.type === 'Maison' ? maisonIcon : offre.type === 'Appartement' ? appartementIcon : offre.type === 'Chalet' ? chaletIcon : bureauIcon}
        >
          <Popup>
            <strong>{offre.titre}</strong>
            <br />
            Type : {offre.type}
            <br />
            Prix : {offre.prix} €
            <br />
            Description : {offre.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapComponent;

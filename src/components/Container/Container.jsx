import React from 'react'
import './container.css'

const Container = ({ locationVisible }) => {
    if (!locationVisible) {
        return null; // Ou renvoyez un composant de chargement ou un message d'erreur
    }
    return (
        <>
            {locationVisible.images.map((image, index) => (
                <img key={index} src={image} alt="" className="imageOffre" />
            ))}
            {/* <img src={locationVisible.images} alt={`appartement ${locationVisible.titre}`} className="appartement" /> */}
            <div className="barre">
                <p><strong> {locationVisible.type} </strong>. {locationVisible.chambres} Piéces. {locationVisible.sallesDeBain} Salles de Bain. <strong>Surface :</strong> {locationVisible.surface}m2</p>
                <p><strong>{locationVisible.ville}</strong>. <strong>Prix :</strong> {locationVisible.prix}€</p>
            </div>
        </>)
}

export default Container;
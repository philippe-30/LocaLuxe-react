import React from 'react'

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
                <div>
                    <p>{locationVisible.type} - {locationVisible.chambres}Chambres - {locationVisible.sallesDeBain} - {locationVisible.surface}m2</p>
                    <p>{locationVisible.titre}  ( <b>{locationVisible.ville}</b> )</p>
                    <p className="price"> {locationVisible.prix}€</p>
                </div>
            </div>
        </>)
}

export default Container;
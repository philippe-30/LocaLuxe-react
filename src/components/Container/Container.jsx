import React from 'react'
import './container.css'

const Container = ({ locationVisible }) => {
    if (!locationVisible || locationVisible.length === 0) {
        return null;
    }
    return (
        <div className='containerOffre'>
            {locationVisible.images.map((image, index) => (
                <img key={index} src={image} alt="" className="imageOffre" />
            ))}
            <div className="containerList">
                <p>
                    <strong className='type'> {locationVisible.type} </strong>:
                    {locationVisible.chambres} Piéces.
                    {locationVisible.sallesDeBain} Salles de Bain.
                    <strong>Surface :</strong> {locationVisible.surface}m2.
                    <strong>Ville:</strong>  <strong className='ville'>{locationVisible.ville}</strong>.
                    <strong>Prix :</strong> {locationVisible.prix}€
                </p>
            </div>
        </div>)
}

export default Container;
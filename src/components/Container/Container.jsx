import React from 'react';
import './container.css';
import annonces from '../../data/annonces.json';


const Container = () => {
    return (
        <main className="mainOffre">
            {annonces.offres.map((offre) => (
                <div key={offre.id} className="offre">
                    <h3>{offre.titre}</h3>
                    {offre.images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index + 1}`} />
                    ))}
                    <p>Type :{offre.type}. Prix :  {offre.prix} €</p>
                    <p>Description : {offre.description}</p>
                </div>
            ))}
        </main>
    );
}

export default Container;
import React from 'react';
import './listMarkers.css';
import Container from '../Container/Container';

const ListMarkers = ({ locationVisible }) => {
    // console.log(locationVisible);

    return (
        <div className='offre' >
            {locationVisible.map((offreA) => (
                // <div key={offre.id}>{offre.titre}</div>
                <Container key={offreA.id} locationVisible={offreA} />
              
            ))}
        </div>
    );
}

export default ListMarkers;
import React from 'react';
import './listMarkers.css';
import Container from '../Container/Container';

const ListMarkers = ({ locationVisible }) => {
    // console.log(locationVisible);

    return (
        <div className='offre' >
            {locationVisible.map((offre) => (
                <Container key={offre.id} locationVisible={offre} />
            ))}
        </div>
    );
}

export default ListMarkers;
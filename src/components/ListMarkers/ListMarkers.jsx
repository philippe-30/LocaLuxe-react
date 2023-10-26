// ListMarkers.jsx
import React, { useEffect } from 'react';
import './listMarkers.css';
import Container from '../Container/Container';

const ListMarkers = ({ locationVisible }) => {
    useEffect(() => {
        // console.log("locationVisible has changed:", locationVisible);
    }, [locationVisible]);

    if (!Array.isArray(locationVisible) || locationVisible.length === 0) {
        return <div className='offre'>Aucun offrre trouvé <strong className='ville'>Zoomé ou déplacé la carte</strong> </div>;
    }

    return (
        <div className='offre'>
            {locationVisible.map((offre) => (
                <Container key={offre.id} locationVisible={offre} />
            ))}
        </div>
    );
}

export default ListMarkers;

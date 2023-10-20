import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Container from '../components/Container/Container';
import MapComponent from '../components/Map/MapComponent';

const Accueil = () => {
    return (
        <>
            <NavBar />
            <main className='container'>
                <MapComponent />
                <Container />
            </main>
        </>
    )
}

export default Accueil
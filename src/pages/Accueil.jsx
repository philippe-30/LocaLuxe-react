import React, { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import ListMarkers from '../components/ListMarkers/ListMarkers';
import MapComponent from '../components/Map/MapComponent';
import annonces from '../jsonData/annonces.json';

export const Context = React.createContext();

const Accueil = () => {
    const [locationVisible, setLocationVisible] = useState([]);
 
    return (
        <>
            <Context.Provider value={[locationVisible, setLocationVisible]}>
                <NavBar />
                <main className='container'>
                    <MapComponent offres={annonces.offres} locationVisible={locationVisible} setLocationVisible={setLocationVisible} />
                    <ListMarkers locationVisible={locationVisible} />
                </main>
            </Context.Provider>
        </>
    )
}

export default Accueil;
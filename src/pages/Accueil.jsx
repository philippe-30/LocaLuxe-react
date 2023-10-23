import React, {useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import ListMarkers from '../components/ListMarkers/ListMarkers';
import MapComponent from '../components/Map/MapComponent';
import annonces from '../data/annonces.json';

export const Context = React.createContext();

const Accueil = () => {
    const  [locationVisible, setLocationVisible] = useState([]);
    // const [offres, setOffres] = useState([]);

    // useEffect(() => {
    //     // Récupérez les offres du fichier JSON
    //     setOffres(annonces.offres);
    //     setLocationVisible(annonces.offres);
    //   }, []);

    return (
        <>
            <Context.Provider value={[locationVisible, setLocationVisible]}>
            <NavBar />
            <main className='container'>
                <MapComponent offres={annonces.offres} locationVisible={locationVisible} setLocationVisible={setLocationVisible}/>
                <ListMarkers locationVisible={locationVisible} />
            </main>
            </Context.Provider>
        </>
    )
}

export default Accueil;
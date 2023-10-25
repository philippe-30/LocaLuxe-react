import React, { createContext, useEffect, useState }  from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Accueil from './pages/Accueil';
import About from './pages/About';
import SeConnecter from './pages/SeConnecter';
import Contact from './pages/Contact';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Accueil />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/connexion',
      element: <SeConnecter />
    }
  ]
);
// Créez un contexte global
export const GlobalContext = createContext();

function App() {
  const [myData, setMyData] = useState([]);

   // Utilisez un effet pour charger les données à partir de localStorage au montage
   useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('myData'));
    if (storedData) {
      console.log('Données chargées depuis localStorage :', storedData);
      setMyData(storedData);
    }
  }, []);

  // Utilisez un effet pour enregistrer les données dans localStorage chaque fois qu'elles changent
  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(myData));
    console.log('Données enregistrées dans localStorage :', myData);

  }, [myData]);


  return (
    
        <GlobalContext.Provider value={{ myData, setMyData }}>

      <div className='containerTotal'>
        <RouterProvider router={router} />
        <Footer />
      </div>
      </GlobalContext.Provider>

  );
}

export default App;

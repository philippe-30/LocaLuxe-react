import React from 'react';
import './App.css';
// import Footer from './components/Footer/Footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Accueil from './pages/Accueil';
import About from './pages/About';
import SeConnecter from './pages/SeConnecter';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';

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

function App() {
  return (
    <>
      <div className='containerTotal'>
        <RouterProvider router={router} />
      <Footer/>
      </div>
    </>
  );
}

export default App;

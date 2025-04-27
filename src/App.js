import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import MadeByApple from './components/MadeByApple';
import Newsletter from './components/Newsletter'; // 🔥 Nouvel import
import Footer from './components/Footer'; // 🔥 Import du composant Footer

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Categories />
      <FeaturedProducts />
      <MadeByApple />
      <Newsletter /> {/* 🔥 Ajout du composant Newsletter ici */}
      <Footer /> {/* 🔥 Ajout du footer ici */}
      {/* Autres composants ici */}
    </div>
  );
}

export default App;

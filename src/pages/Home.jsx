import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Products from '../components/Products';
import GrowersStories from '../components/GrowersStories';
import Gallery from '../components/Gallery';

const Home = () => {
  useEffect(() => {
    document.title = "Agrarian | Sustainable Crop Solutions";
  }, []);

  return (
    <main className="flex-grow pt-20 animate-fade-in-up">
      <Hero />
      <Stats />

      <Products />
      <GrowersStories />
      <Gallery />
    </main>
  );
};

export default Home;

import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import CategoryBar from '../components/CategoryBar';
import Promotes from '../components/Promotes';
import Stats from '../components/Stats';
import SolutionsSection from '../components/SolutionsSection';
import Products from '../components/Products';
import FinanceSection from '../components/FinanceSection';
import GrowersStories from '../components/GrowersStories';

const Home = () => {
  useEffect(() => {
    document.title = "Agrarian | Sustainable Crop Solutions";
  }, []);

  return (
    <main className="flex-grow pt-20 animate-fade-in-up">
      <Hero />
      <CategoryBar />
      <Promotes />
      <Stats />
      <SolutionsSection />
      <Products />
      <FinanceSection />
      <GrowersStories />
    </main>
  );
};

export default Home;

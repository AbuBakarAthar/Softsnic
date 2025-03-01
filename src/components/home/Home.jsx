import React from 'react';
import HeroSection from './HeroSection';
import Layout from '../../layout/Layout';
import Carousel from './Carousel';
import CardList from './Cardlist';
import HomeL from './HomeL';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Carousel />
      <CardList />
      <HomeL />
    </Layout>
  );
};

export default Home;
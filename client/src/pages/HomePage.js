import React, { useState } from 'react';
import Indicator from '../components/atoms/Indicator';
import Gallery from '../components/homePage/Gallery';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return <>{isLoading ? <Indicator /> : <Gallery/>}</>;
};

export default HomePage;

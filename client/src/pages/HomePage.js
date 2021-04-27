import React, { useState } from 'react';
import Indicator from '../components/atoms/Indicator';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return <>{isLoading ? <Indicator /> : <div>HomePage</div>}</>;
};

export default HomePage;

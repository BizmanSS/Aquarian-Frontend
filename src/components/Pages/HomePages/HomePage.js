import React from 'react';
import Component1 from '../../Homepage/Component1';
import Component2 from '../../Homepage/Component2';
import Banner from '../../Homepage/Banner';
import Component5 from '../../Homepage/Component5';
import Component3 from '../../Homepage/Component3';
import Component4 from '../../Homepage/Component4';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
};

export default HomePage;

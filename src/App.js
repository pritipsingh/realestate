import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalStyle from './GlobalStyle';
import { SliderData } from './data/SliderData'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData}/>

    </>
  );
}

export default App;

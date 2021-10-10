import React from 'react'
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonal from './components/Testimonal';
import Blog from './components/Blog';
const App = () => {
  return (
    <div>
      <Preloader/>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonal/>
      <Blog/>
    </div>
  )
}

export default App


import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

// Video: https://www.youtube.com/watch?v=3HNyXCPDQ7Q
// Code: https://github.com/adrianhajdin/project_professional_portfolio

// STOPPED AT: 2:09:00 => Next: Work Section

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;

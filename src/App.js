import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

// Video: https://www.youtube.com/watch?v=3HNyXCPDQ7Q
// Code: https://github.com/adrianhajdin/project_professional_portfolio

// Live Portfolio: https://sanitycms-portfolio.netlify.app/
// Live Sanity Studio: https://sanity-portfolio-answebdev.sanity.studio

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

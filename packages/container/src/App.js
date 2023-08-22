import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <h1>Micro-frontend Application!!!</h1>
        <MarketingApp />
      </div>
    </BrowserRouter>
  )
}

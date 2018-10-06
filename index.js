import React from 'react';
import { render } from 'react-dom';
import home-page from './src/components/home-page/home-page';
import Prueba1 from './src/components/prueba1';

const app = document.getElementById('app');


render(
  <div>
      <home-page />
  </div>,

  app);
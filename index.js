'use strict';

import React from 'react';
import { render } from 'react-dom';
import Homepage from './src/layout/Homepage';
import Nav from './src/components/Nav';
import Myname from './src/components/name';
import styled from "styled-components";


const app = document.getElementById('app');

const Wrapper = styled.section`
  background-color: #f4f6fa;
  font-family: "Roboto", sans-serif;
`;

render(
  <Wrapper>
      <Homepage /><Nav /><Myname />
  </Wrapper>,

app);
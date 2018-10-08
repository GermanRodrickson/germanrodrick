'use strict';

import React from 'react';
import { render } from 'react-dom';
import Homepage from './src/layout/Homepage';
import Nav from './src/components/Nav';
import styled from "styled-components";


const app = document.getElementById('app');

const Container = styled.section`

`;

const Header = styled.section`

`;

const Wrapper = styled.section`
  background-color: #f4f6fa;
  font-family: "Roboto", sans-serif;
`;

render(
  <Wrapper>
    <Header>
      <Nav />
    </Header>

  <Container>
    <Homepage />
  </Container>

  </Wrapper >,

app);




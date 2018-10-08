'use strict';

import React from 'react';
import { render } from 'react-dom';
import styled from "styled-components";

//Components 

import Homepage from "./src/components/Homepage";
import Nav from "./src/components/Nav";
import Footer from "./src/components/Footer";


const app = document.getElementById('app');


const Wrapper = styled.section`
  background-color: #f4f6fa;
  font-family: "Roboto", sans-serif;
  padding-right: 150px;
  padding-left: 150px;
`;

const Container = styled.section`

`;

const Header = styled.section`

`;

const RSSFooter = styled.section`
  background-color: #ffffff;

`;



render(
  <Wrapper>
    <Header>
      <Nav />
    </Header>

  <Container>
    <Homepage />
  </Container>

  <footer>
    <Footer />
  </footer>

  </Wrapper >,

app);




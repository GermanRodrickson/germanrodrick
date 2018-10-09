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
`;

const Container = styled.section`

`;

const Header = styled.section`
  margin-left: 150px;
  margin-right: 150px;
`;

const FooterContainer = styled.section`
  background: #FFFFFF;
  padding-top: 30px;
`;


render(
  <Wrapper>
    <Header>
      <Nav />
    </Header>

  <Container>
    <Homepage />
  </Container>

  <FooterContainer>
    <Footer />
  </FooterContainer>

  </Wrapper >,

app);




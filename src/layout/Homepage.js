'use strict';

import React, { Component } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;

  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

const Wrapper = styled.section`
  padding: 2em;
  background: #f4f6fa;
`;

const theme = {
  main: "mediumseagreen"
};

class Homepage extends Component {
  render() {
    return (
      <Wrapper>
        <Title theme={theme}>German R. Ojeda 1</Title>
        <Title>German R. Ojeda 2</Title>
      </Wrapper>
    )
  }
}

export default Homepage;

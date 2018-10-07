"use strict";

import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;


class Homepage extends Component {
  render() {
    return (
      <Wrapper>
        <Title>German R. Ojeda</Title>
      </Wrapper>
    );
  }
}

export default Homepage;

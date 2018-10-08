'use strict';

import React, { Component } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Box, Flex, Heading, Text, Button } from "rebass";

const Title = styled.h1`
  font-size: 43px;
  text-align: center;
  color: #726cfb;
`;

class Homepage extends Component {
  render() {
    return (
      <Flex
        mt={250}
        justifyContent='space-around'
        alignItems='center'>
        <Title>Frontend Developer</Title>
        <Title>Frontend Developer</Title>
      </Flex>
    )
  }
}

export default Homepage;

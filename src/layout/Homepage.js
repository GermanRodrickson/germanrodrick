'use strict';

import React, { Component } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Box, Flex, Heading, Text, Button, Image } from "rebass";

const Title = styled.h1`
  font-size: 43px;
  color: black;
  margin-top: 100px;
  margin-bottom: 10px;
`;


const Paragraph = styled(Text)`
  font-size: 23px;
  width: 500px;
  color: #111111;
  line-height: 2em;
`;

const Btns = styled(Button)`
  border-radius: 40px;
  width: 200px;
  padding: 20px;
  background-color: #726cfb;
  font-weight: 100;
  margin-top: 20px;
  font-size: 20px;
`

class Homepage extends Component {
  render() {
    return <Flex justifyContent="space-around" alignItems="center">
        <Box>
          <Title>Frontend Developer</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </Paragraph>
        <Btns bg='magenta'>Know more</Btns> 
        </Box>
        <Title>Frontend Developer</Title>
      </Flex>;
  }
}

export default Homepage;

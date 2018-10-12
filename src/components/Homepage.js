'use strict';

import React, { Component } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Box, Flex, Heading, Text, Button, Image } from "rebass";

const Title = styled.h1`
  font-size: 43px;
  color: #211520;
  margin-bottom: 10px;
`;


const Paragraph = styled(Text)`
  font-size: 23px;
  width: 500px;
  line-height: 1.5em;

  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

const Btns = styled(Button)`
  margin-top: 30px;
  font-size: 24px;
  color: #FFFFFF;
  border: 2px solid #29b7ff;
  padding: 10px 15px;
  background: #0087cb;
  position: absolute;
  display: inline-block;
  z-index: 2;
  box-shadow: -6px 5px 0 0 #494949, -6px 5px 0 2px #29b7ff;
  transition: all 0.3s ease-out;

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: -2px 1px 0 0 #494949, -2px 1px 0 2px #29b7ff;
    transform: translate3d(-4px, 4px, 0);
  }
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  float: left;
`;

var handleClick = (event) => {
  console.log(theme.main)
}
var theme = {
  main: "mediumseagreen"
};

class Homepage extends Component {
  render() {
    return <Flex alignItems="center" mt={150}>
        <Box mb={50}>
          <Title>Frontend Developer</Title>
        <Paragraph theme={theme}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </Paragraph>
        <Btns onClick={handleClick}>Know more</Btns>
        </Box>

        <Img src="../../content/img/descarga.png" width={450} height={450} /> 
      </Flex>;
  }
}

export default Homepage;

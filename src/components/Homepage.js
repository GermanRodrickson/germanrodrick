'use strict';

import React, { Component } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Box, Flex, Heading, Text, Button, Image } from "rebass";

const Title = styled.h1`
  font-size: 63px;
  color: #211520;
  margin-bottom: 10px;
  letter-spacing: 10px;
`;


const Paragraph = styled(Text)`
  font-size: 23px;
  width: 500px;
  color: #bcc2cf;
  line-height: 1.5em;

  

  /* color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main}; */
`;

const Btns = styled(Button)`
  margin-top: 30px;
  font-family: yukari, sans-serif;
  font-size: 24px;
  color: #662d91;
  border: 2px solid #662d91;
  padding: 10px 15px;
  background: #ffdc71;
  position: absolute;
  display: inline-block;
  z-index: 2;
  box-shadow: -6px 5px 0 0 #f7931e, -6px 5px 0 2px #58277e;
  transition: all 0.3s ease-out;

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: -2px 1px 0 0 #f7931e, -2px 1px 0 2px #58277e;
    transform: translate3d(-4px, 4px, 0);
  }
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
`;

 var handleClick = (event) => {
 
}

class Homepage extends Component {
  render() {
    return <Flex justifyContent="space-around" mt={150}>
        <Box mb={50}>
          <Title>Frontend</Title>
          <Title>Developer</Title>
          <Paragraph >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </Paragraph>
          <Btns bg="magenta" onClick={handleClick}>
            Know more
          </Btns>
        </Box>
        <Box>
          <Img src="../../content/img/descarga.png" width={450} height={450} />
        </Box>
      </Flex>;
  }
}

export default Homepage;

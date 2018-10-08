'use strict'; 

import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "rebass";

const Name = styled.h2`
  font-size: 26px;
  position: absolute;
  top: 50px;
  left: 100px;
  color: #726cfb;
`;

const List = styled(Box)`
  color: #726cfb;
  padding: 30px;
  font-size: 20px;
`;

class Nav extends Component {
  render() {
    return (
      <Flex 
        flex-direction='row'>
          <List>About</List>
          <List>Experience</List>
          <List>Education</List>
          <List>Contact</List>
      </Flex>
    );
  }
}

export default Nav;
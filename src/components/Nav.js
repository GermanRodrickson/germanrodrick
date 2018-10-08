'use strict'; 

import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "rebass";

const Name = styled.h2`
  font-size: 26px;
  color: #726cfb;
  padding: 120px 30px;
  line-height: 20px;
  display: inline-block;
`;

const List = styled(Box)`
  color: #726cfb;
  padding: 120px 30px;
  font-size: 20px;
`;

const Container = styled(Flex)`


`


class Nav extends Component {
  render() {
    return (
      <Container>
        <Name>German R. Ojeda</Name>
        <Flex
          justify-content='flex-end'
          flex-direction='row'>
          <List>About</List>
          <List>Experience</List>
          <List>Education</List>
          <List>Contact</List>
        </Flex>
      </Container>
    );
  }
}

export default Nav;
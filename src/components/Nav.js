'use strict'; 

import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "rebass";

const Name = styled.h2`
  font-size: 26px;
  color: #726cfb;
  line-height: 20px;
  position:absolute;
  bottom: 50px;
`;

const List = styled(Box)`
  color: #726cfb;
  margin: 50px 30px;
  font-size: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`;


class Nav extends Component {
  render() {
    return (
      <section>
        <Name>German R. Ojeda</Name>
        <FlexContainer>
          <List>About</List>
          <List>Experience</List>
          <List>Education</List>
          <List>Contact</List>
        </FlexContainer>
      </section>
    );
  }
}

export default Nav;
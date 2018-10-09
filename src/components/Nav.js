'use strict'; 

import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "rebass";

const Name = styled.h2`
  font-size: 26px;
  color: #726cfb;
  margin: 120px 30px;
  line-height: 20px;
  display: inline-block;
  transition: 0.5s;

  &:hover {
    color: red;
  }
`;

const List = styled(Box)`
  color: #726cfb;
  margin: 120px 30px;
  font-size: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: -270px;
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
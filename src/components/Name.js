'use strict';

import React, { Component } from "react";
import styled from "styled-components";

const Name = styled.h2`
  font-size: 26px;
  position: absolute;
  top: 50px;
  left: 100px;
  color: #726cfb;
`;

class Myname extends Component {
  render() {
    return (
      <Name>German R. Ojeda</Name>
    );
  }
}

export default Myname;
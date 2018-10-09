'use strict';

import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "rebass";


const Img = styled.img`
  width: 50px;
  height: 50px;
  transition: 0.5s;

  &:hover {
    transform: translate3d(0px, 5px, 0px);
  }
`;


class Footer extends Component {
  render() {
    return (
      <Flex justifyContent="space-around" alignItems="center">
        <Box><Img
        src="../../content/img/github-brands.svg"
        />
        </Box>
        <Box><Img
        src="../../content/img/linkedin-brands.svg"
        />
        </Box>
        <Box><Img
        src="../../content/img/file-pdf-regular.svg"
        />
        </Box>
        <Box><Img
        src="../../content/img/codepen-brands.svg"
        />
        </Box>
      </Flex>
    )
  }
}

export default Footer;
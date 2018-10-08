'use strict';

import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "rebass";


class Footer extends Component {
  render() {
    return (
      <Flex justifyContent="space-around" alignItems="center">
        <Box><img
        src="../../content/img/github-brands.svg"
        width={50}
        height={50}
        />
        </Box>
        <Box><img
        src="../../content/img/linkedin-brands.svg"
        width={50}
        height={50}
        />
        </Box>
        <Box><img
        src="../../content/img/file-pdf-regular.svg"
        width={50}
        height={50}
        />
        </Box>
      </Flex>
    )
  }
}

export default Footer;
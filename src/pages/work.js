import React from 'react';
import Styled from 'styled-components';
import { Box, Link } from 'rebass/styled-components';
import SEO from '../components/seo';
import Header from '../components/Header';
import Container from '../styles/Container';
import HeaderWithContent from '../layouts/HeaderContent';

const WorkFlex = Styled.div(props => `
  display: flex;
  min-height: 200px;
  width: 100%;
  @media(min-width: ${props.theme.breakpoints[1]}) {
    &:nth-of-type(odd) {
      justify-content: flex-start;
    }
    &:nth-of-type(even) {
      justify-content: flex-end;
    }
    ${Box} {
      width: 50%
    }
  }
`);

function Work() {

  return (
    <HeaderWithContent>
      <SEO title="Work" />
      <HeaderWithContent.Header>
        <Header/>
      </HeaderWithContent.Header>
      <HeaderWithContent.Content>
        <Container fluid width="100%">
          <h1>Work</h1>
          <p>Unless I spend my weekend hiking, I like to explore new technology and work on my projects. Some of which is listed below.</p>
          <WorkFlex>
            <Box>
              <h2>explore.krd</h2>
              <p><Link target="_blank" title="explore.krd" href="https://explore.krd">explore.krd</Link> (all lowercase) is platform for exploring Kurdistan's nature hidden gems. <strong>It is a WIP</strong>. I own <Link target="_blank" title="visit.krd" href="https://visit.krd">visit.krd</Link> if you have an idea for it.</p>
            </Box>
          </WorkFlex>
          <WorkFlex>
            <Box>
              <h2>Ethereum Mining</h2>
              <p>I had my first Bitcoin in 2012. In mid-2017, I started mining Ethereum ($ETH) with one <Link target="_blank" href="https://www.amd.com/en/products/graphics/radeon-rx-480">AMD RX 480</Link>. I then scaled it to a fleet of 19 GPUs.</p>
            </Box>
          </WorkFlex>
          <WorkFlex>
            <Box>
              <h2>Deng PWA</h2>
              <p>Deng (Sound in Kurdish) is a PWA for streaming music, heaviliy inspired by Spotify. It was my capstone at AUIS. A WIP version is available at <Link target="_blank" href="https://getdeng.com">getdeng.com</Link></p>
            </Box>
          </WorkFlex>
          <WorkFlex>
            <Box>
              <h2>BildX</h2>
              <p>BildX is the self-hosted version of imgix. Contribute on <Link target="_blank" href="https://github.com/adamazad/bildx">GitHub</Link></p>
            </Box>
          </WorkFlex>
        </Container>
      </HeaderWithContent.Content>
    </HeaderWithContent>
  )

}

export default Work;
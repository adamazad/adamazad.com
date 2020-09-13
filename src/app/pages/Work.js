import React from 'react';
import { Box, Flex, Link } from 'rebass';
import Header from '../components/Header';
import Container from '../styles/Container';
import HeaderWithContent from '../layouts/HeaderContent';

function Work() {

  return (
    <HeaderWithContent>
      <HeaderWithContent.Header>
        <Header/>
      </HeaderWithContent.Header>
      <HeaderWithContent.Content>
        <Container fluid width="100%">
          <h1>Work</h1>
          <p>Unless I spend my weekend hiking, I like to explore new technology and work on my projects. Some of which is listed below.</p>
          <Flex minHeight={ 200 } mx="auto" mb={ 10 } width="100%">
            <Box width={ 1 / 2 } px={ 2 }>
              <h2>explore.krd</h2>
              <p><Link target="_blank" title="explore.krd" href="https://explore.krd">explore.krd</Link> (all lowercase) is platform for exploring Kurdistan's nature hidden gems. <strong>It is a WIP</strong>. I own <Link target="_blank" title="visit.krd" href="https://visit.krd">visit.krd</Link> if you have an idea for it.</p>
            </Box>
            <Box width={ 1 / 2 } px={ 2 }></Box>
          </Flex>
          <Flex minHeight={ 200 } mx="auto" mb={ 10 } width="100%">
            <Box width={ 1 / 2 } px={ 2 }></Box>
            <Box width={ 1 / 2 } px={ 2 }>
              <h2>Ethereum Mining</h2>
              <p>I had my first Bitcoin in 2012. In mid-2017, I started mining Ethereum ($ETH) with one <Link target="_blank" href="https://www.amd.com/en/products/graphics/radeon-rx-480">AMD RX 480</Link>. I then scaled it to a fleet of 19 GPUs.</p>
            </Box>
          </Flex>
          <Flex minHeight={ 200 } mx="auto" mb={ 10 } width="100%">
            <Box width={ 1 / 2 } px={ 2 }>
              <h2>Deng PWA</h2>
              <p>Deng (Sound in Kurdish) is a PWA for streaming music, heaviliy inspired by Spotify. It was my capstone at AUIS. A WIP version is available at <Link target="_blank" href="https://getdeng.com">getdeng.com</Link></p>
            </Box>
            <Box width={ 1 / 2 } px={ 2 }></Box>
          </Flex>
          <Flex minHeight={ 200 } mx="auto" mb={ 10 } width="100%">
            <Box width={ 1 / 2 } px={ 2 }></Box>
            <Box width={ 1 / 2 } px={ 2 }>
              <h2>BildX</h2>
              <p>BildX is the self-hosted version of imgix. Contribute on <Link target="_blank" href="https://github.com/adamazad/bildx">GitHub</Link></p>
            </Box>
          </Flex>
        </Container>
      </HeaderWithContent.Content>
    </HeaderWithContent>
  )

}

export default Work;
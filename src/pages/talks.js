import React from 'react';
import { Flex, Box } from 'rebass/styled-components';
import Styled from 'styled-components';
import { Center, HeaderWithContent } from '../layouts';
import Header from '../components/Header';
import Container from '../styles/Container';
import SEO from '../components/seo';

function Talks() {

  return (
    <HeaderWithContent>
      <SEO title="Talks" />
      <HeaderWithContent.Header>
        <Header/>
      </HeaderWithContent.Header>
      <HeaderWithContent.Content>
        <Container fluid width="100%">
          <h1>Talks</h1>
          <Flex minHeight={200} mx="auto" mb={10} width="100%">
            <Box width={ 1 / 2 } px={ 2 }>
              <h2>2019</h2>
              <p>First batch</p>
            </Box>
            <Box width={ 1 / 2 } px={ 2 }>
              <div>
                <h3>Conference on Cultural Heritage and New Technologies</h3>
                <p><a target="_blank" title="CHNT24" href="https://chnt.at">Vienna, Austria</a></p>
                <p>November 2019</p>
              </div>
            </Box>
          </Flex>
          <Flex minHeight={200} mx="auto" mb={10} width="100%">
            <Box width={ 1 / 2 } px={ 2 }>
              <h2>2018</h2>
              <p>Auxiliary</p>
            </Box>
            <Box width={ 1 / 2 } px={ 2 }>
              <div>
                <h3>IST301 - Introduction to Blockchain</h3>
                <p><a target="_blank" href="https://auis.edu.krd">Sulaimani, Iraq</a></p>
                <p>December 2018</p>
              </div>
            </Box>
          </Flex>
        </Container>
      </HeaderWithContent.Content>
    </HeaderWithContent>
  );

}

export default Talks;
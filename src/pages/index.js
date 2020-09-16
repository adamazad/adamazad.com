import React from 'react';
import SEO from '../components/seo';
import Header from '../components/Header';
import Container from '../styles/Container';
import HeaderWithContent from '../layouts/HeaderContent';

function Home() {
  return (
    <HeaderWithContent>
      <SEO title="Home" />
      <HeaderWithContent.Header>
        <Header />
      </HeaderWithContent.Header>
      <HeaderWithContent.Content>
        <Container fluid width="100%">
          <h1>Adam Azad</h1>
          <h3>Full Stack Engineer, Leader, Speaker, & More</h3>
          <p>Adam is a Full Stack Engineer and Digital Entrepurenr.</p>
          <p>In 2011, at the age of 16, with a business partner from Sweden, he started his first online start-up project.</p>
          <p>He has worked with web development studios and clients in Canada, Europe, South East Asia.</p>
          <p>When he is not working, he likes to educate others about Blockchain, Smart Contracts and Decentralized Finance (DeFi).</p>
          <p>He is currently residing in <u>Sulaimani</u>.</p>
        </Container>
      </HeaderWithContent.Content>
    </HeaderWithContent>
  );
}

export default Home;
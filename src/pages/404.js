import React from 'react';
import { Link } from 'gatsby';
import { Center } from '../layouts';
import SEO from '../components/seo';
import Container from '../styles/Container';

const NotFoundPage = () => (
  <Container fluid height="100vh">
    <Center>
      <SEO title="Not Found" />
      <h1>Not Found</h1>
      <p>Let's get you back home safely. <Link to="/">Click here</Link></p>
    </Center>
  </Container>
)

export default NotFoundPage;
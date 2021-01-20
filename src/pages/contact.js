import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Box, Link } from 'rebass'
import React from 'react'

import { HeaderWithContent } from '../layouts'
import Container from '../styles/Container'
import Header from '../components/Header'
import SEO from '../components/seo'

function Contact() {
  const links = [
    {
      title: "Let's network",
      text: 'LinkedIn',
      href: 'https://linkedin.com/in/adamazad',
    },
    {
      title: 'Book A Meeting',
      text: 'Calendly',
      href: 'https://calendly.com/adamazad',
    },
    {
      title: 'Send me crypto memes',
      text: 'Twitter',
      href: 'https://twitter.com/in/adamazad',
    },
    {
      title: 'Approve my PR!',
      text: 'GitHub',
      href: 'https://github.com/adamazad',
    },
    {
      title: 'Stack Overflow',
      text: 'Stack Overflow',
      href: 'https://stackoverflow.com/users/2151050/adam-azad',
    },
    {
      title: 'Instagram',
      text: 'Instagram',
      href: 'https://instagram.com/adamazad',
    },
  ]

  return (
    <HeaderWithContent>
      <SEO title="Contact" />
      <HeaderWithContent.Header>
        <Header />
      </HeaderWithContent.Header>
      <HeaderWithContent.Content>
        <Container fluid width="100%">
          <h1>Let's Talk</h1>
          <p>
            <Link href="mailto:adam@adamazad.com&subject=Hi Adam!">adam@adamazad.com</Link>. Simple and neat, isn't it?
          </p>
          <p>Other places</p>
          <Box>
            <p>
              {links.map(({ href, title, text }) => (
                <Link target="_blank" as={OutboundLink} mr={2} href={href} title={title}>
                  {text}
                </Link>
              ))}
            </p>
          </Box>
        </Container>
      </HeaderWithContent.Content>
    </HeaderWithContent>
  )
}

export default Contact

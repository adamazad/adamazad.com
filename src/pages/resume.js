import React, { useState } from 'react';
import Moment from 'moment';
import Styled from 'styled-components';
import Header from '../components/Header';
import Container from '../styles/Container';
import Gridume from '../components/Gridume';
import Section from '../components/Gridume/Section';
import HeaderWithContent from '../layouts/HeaderContent';
import SEO from '../components/seo';

const Grid = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Skills = () => (
  <Section>
    <Section.Title>Skills</Section.Title>
    <p>Programming: JavaScript, PHP</p>
    <p>Programming: JavaScript, PHP</p>
  </Section>
);

const Awards = () => (
  <Section>
    <Section.Title>Awards</Section.Title>
    <p>2018 | Best Case Study | Rome Business Game 2018</p>
    <p>2014 Academic Excellence Scholarship at AUIS</p>
  </Section>
);

const resume = require('./resume.json');

function Resume() {

  const [header, setHeader] = useState({
    name: 'Adam Azad',
    lastUpdated: Moment().format("YYYY-MM-DD"),
    contact: "[you@hey.com](mailto:me@hey.com) | [me.dev](https://me.dev)"
  });

  // For managing the states
  const [contentColumns, setContentColumns] = useState({
    leftColumn: {},
    rightColumn: {}
  });

  // An array of values
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [awards, setAwards] = useState([]);
  const [skills, setSkills] = useState('');
  const [links, setLinks] = useState('');
  const [research, setResearch] = useState('');
  const [jsonTree, setJsonTree] = useState(resume);

  const onChange = ({ target }) => {
    try {
      const newJson = JSON.parse(target.value);
      console.log(newJson);
      setJsonTree(newJson);
    } catch (e) {
      console.log(e);
    }
  }

  console.log(header);

  return (
    <HeaderWithContent>
      <SEO title="Resume" />
      <HeaderWithContent.Header>
        <Header />
      </HeaderWithContent.Header>
      <HeaderWithContent.Content>
        <Container fluid>
          <Gridume resume={ jsonTree } />
        </Container>
      </HeaderWithContent.Content>
    </HeaderWithContent>
    );
}

  // <Header>
  //   <LastUpdated/>
  //   <Title>Adam Azad</Title>
  //   <p>
  //     {`<Phone Removed>`} |
  //     <a href="mailto:adam@adamazad.com">adam@adamazad.com</a> |
  //     <a href="https://adamazad.com">adamazad.com</a>
  //   </p>
  // </Header>

  /*

  {/* <textarea  onChange={ onChange } value={ JSON.stringify(jsonTree, null, 2) }/>


  <div>
  <header>
  <label>Name <input value={ header.name } onChange={ event => setHeader({ ...header, name: event.target.value }) }/></label>
  <label>Contact <textarea value={ header.contact } onChange={ event => setHeader({ ...header, contact: event.target.value }) }/></label>
          </header>
          <div>
            <label>
              Links
              <textarea value={ links } onChange={ (event) => setLinks(event.target.value) }/>
            </label>
          </div>
          <div>
            <label>
              Research
              <textarea value={ research } onChange={ (event) => setResearch(event.target.value) }/>
            </label>
          </div>
          <div>
            <label>
              Skills
              <textarea value={ skills } onChange={ (event) => setSkills(event.target.value) }/>
            </label>
          </div>
        </div>

        */

export default Resume;
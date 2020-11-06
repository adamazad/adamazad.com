import React from 'react'
import Markdown from 'markdown-to-jsx'
import LastUpdated from './LastUpdated'
import { Column, Content, Grid, Header, Title, HeaderMeta } from './Elements'
import Section from './Section'
import Education from './Education'
import Experience from './Experience'
import Project from './Project'
import Publication from './Publication'
import Skills from './Skills'
import Award from './Award'
import Links from './Links'
import { TYPES } from './constants'
import styled, { ThemeProvider } from 'styled-components'
import Theme from './Theme'
import Languages from './Languages'

/**
 * @typedef GridumeEducation
 * @property {string} degree
 * @property {string} organisation
 * @property {string} startDate
 * @property {string} endDate
 * @property {string} location
 * @property {string} description
 */

/**
 * @typedef GridumeExperience
 * @property {string} position
 * @property {string} employer
 * @property {string} startDate
 * @property {string} endDate
 * @property {string} location
 * @property {string} description
 */

/**
 * @typedef GridumeContent
 * @property {GridumeExperience[]} experience
 * @property {GridumeEducation[]} education
 * @property {GridumeAwards[]} awards
 * @property {GridumeResearch[]} awards
 * @property {GridumePublications[]} publications
 * @property {GridumeLinks[]} links
 * @property {GridumeLinks[]} links
 */

/**
 * @typedef GridumeHeader
 * @property {string} name
 * @property {string} contact
 * @property {string|Date} lastUpdated
 */

/**
 * @typedef Gridume
 * @property {GridumeHeader} header
 * @property {GridumeContent} leftColumn
 * @property {GridumeContent} rightColumn
 */

function ColumnItems({ items }) {
  return (
    <>
      {Object.keys(items).map(title => {
        // Ignore non-supported keys
        if (!TYPES.hasOwnProperty(title)) {
          return null
        }

        const sectionItems = items[title]

        return (
          <Section>
            <Section.Title>{title}</Section.Title>
            {title === TYPES.experience &&
              sectionItems.map(sectionItem => <Experience {...sectionItem} />)}
            {title === TYPES.projects &&
              sectionItems.map(sectionItem => <Project {...sectionItem} />)}
            {title === TYPES.volunteering &&
              sectionItems.map(sectionItem => <Experience {...sectionItem} />)}
            {title === TYPES.education &&
              sectionItems.map(sectionItem => <Education {...sectionItem} />)}
            {title === TYPES.research &&
              sectionItems.map(sectionItem => <Education {...sectionItem} />)}
            {title === TYPES.publications &&
              sectionItems.map((publication, i) => (
                <Publication number={++i} publication={publication} />
              ))}
            {title === TYPES.skills && <Skills skills={sectionItems} />}
            {title === TYPES.languages && (
              <Languages languages={sectionItems} />
            )}
            {title === TYPES.awards &&
              sectionItems.map((award, i) => <Award {...award} />)}
            {title === TYPES.links && <Links links={sectionItems} />}
          </Section>
        )
      })}
    </>
  )
}

const CvImage = styled.img`
  height: 150px;
`

/**
 * Builds
 * @param {object} props Component props
 * @param {Gridume} props.resume
 * @param {string} props.maxWidth
 * @returns {JSX.Element}
 */
function Gridume({ resume, maxWidth = 1200, imageUrl }) {
  const { header, leftColumn, rightColumn } = resume

  return (
    <ThemeProvider theme={Theme}>
      <Grid>
        <Header alignItems={imageUrl ? 'flex-start' : 'center'}>
          <div>{imageUrl && <CvImage src={imageUrl} />}</div>
          <LastUpdated date={header.lastUpdated} />
          <HeaderMeta>
            <Title>{header.name}</Title>
            <Markdown>{header.contact}</Markdown>
          </HeaderMeta>
        </Header>
        <Content>
          <Column>
            <ColumnItems items={leftColumn} />
          </Column>
          <Column>
            <ColumnItems items={rightColumn} />
          </Column>
        </Content>
      </Grid>
    </ThemeProvider>
  )
}

export default Gridume

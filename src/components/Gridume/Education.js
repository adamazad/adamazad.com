import React from 'react';
import Moment from 'moment';
import { compiler } from 'markdown-to-jsx';
import { DATE_FORMAT } from './constants';
import { Heading6, Meta, Description } from './Elements';

/**
 *
 * @param {import('.').GridumeEducation} experience
 */
function Education({ position, organization, startDate, endDate, location, description }) {

  startDate = Moment(startDate).format(DATE_FORMAT);
  endDate = endDate.toLocaleLowerCase() === 'present' ? 'Present' : Moment(endDate).format(DATE_FORMAT);

  return (
    <article>
      <header>
        <Heading6>{ organization }</Heading6>
        <Meta>{ startDate } - { endDate } { location && ` | ${location}` }</Meta>
      </header>
      <Description>
        { compiler(description) }
      </Description>
    </article>
  )
}

export default Education;

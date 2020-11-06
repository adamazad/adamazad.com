import React from 'react'
import Moment from 'moment'
import { compiler } from 'markdown-to-jsx'
import { DATE_FORMAT } from './constants'
import { Heading6, Meta, Description } from './Elements'

/**
 *
 * @param {import('.').GridumeExperience} experience
 */
function Experience({
  position,
  employer,
  startDate,
  endDate,
  location,
  description,
}) {
  startDate = Moment(startDate).format(DATE_FORMAT)
  endDate =
    endDate.toLocaleLowerCase() === 'present'
      ? 'Present'
      : Moment(endDate).format(DATE_FORMAT)

  employer = employer ? `${position ? ' | ' : ''}${employer}` : ''

  return (
    <article>
      <Heading6>
        {position ? position : ''}
        {employer}
      </Heading6>
      <Meta>
        {startDate} - {endDate}
        {location && ` | ${location}`}
      </Meta>
      {description && <Description>{compiler(description)}</Description>}
    </article>
  )
}

export default Experience

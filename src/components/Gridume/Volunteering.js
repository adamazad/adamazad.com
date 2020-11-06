import React from 'react'
import Moment from 'moment'
import { compiler } from 'markdown-to-jsx'
import { DATE_FORMAT } from './constants'
import { Heading6, Meta, Description } from './Elements'

/**
 *
 * @param {import('.').GridumeExperience} experience
 */
function Volunteering({ title, description }) {
  return (
    <article>
      <Heading6>{title}</Heading6>
      {description && <Description>{compiler(description)}</Description>}
    </article>
  )
}

export default Volunteering

import React from 'react';
import Moment from 'moment';
import Styled from 'styled-components';
import { compiler } from 'markdown-to-jsx';

/**
 *
 * @param {import('.').GridumeExperience} experience
 */
function Publication({ number, publication }) {

  return (
    <article>
      <p>[{number}] { compiler(publication) }</p>
    </article>
  )
}

export default Publication;

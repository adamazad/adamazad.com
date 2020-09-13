import React from 'react';
import { compiler } from 'markdown-to-jsx';

function Award({ title, date }) {

  return (
    <article>
      { date } { compiler(title) }
    </article>
  )
}

export default Award;

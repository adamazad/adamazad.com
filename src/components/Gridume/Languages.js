import React from 'react'
import { compiler } from 'markdown-to-jsx'

function Languages({ languages }) {
  return <article>{compiler(languages)}</article>
}

export default Languages

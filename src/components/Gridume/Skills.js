import React from 'react'
import { compiler } from 'markdown-to-jsx'

function Skills({ skills }) {
  return <article>{compiler(skills)}</article>
}

export default Skills

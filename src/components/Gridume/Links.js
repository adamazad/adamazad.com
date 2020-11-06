import React from 'react'
import Markdown from 'markdown-to-jsx'

function Links({ links }) {
  console.log({ links })
  return (
    <article>
      <Markdown>{links}</Markdown>
    </article>
  )
}

export default Links

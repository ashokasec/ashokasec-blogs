import React from 'react'
import Card from './card'

const Development = () => {
  return (
    <ul className='list-none !ml-0 divide-y mb-8'>
        <Card title='Why JWE Outperforms JWT in Client-Side Security? (Test Blog)' description="Here's something better than JWT that most Devs are unaware of and risking their user's confidential data on client-side." link='/sample-blog-for-article-ui' />
    </ul>
  )
}

export default Development
import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <>
    <div>HomePage</div>
    <Link to='/testgit/about'>
      <button>ABOUT</button>
    </Link>
    </>
  )
}

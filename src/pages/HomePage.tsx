import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <>
    <div>HomePage</div>
    <Link to='/about'>
      <button>ABOUT</button>
    </Link>
    </>
  )
}

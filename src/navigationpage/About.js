import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h2>Welcome to About page</h2>
      <nav>
        <ul>
            <li><Link to="team">Our Team</Link></li>
            <li><Link to="company">Our company</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default About
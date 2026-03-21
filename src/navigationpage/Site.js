import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Team from './Team'
import Company from './Company'


function Site() {
  return (
    <div>
      <BrowserRouter>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/about" element={<About />}>
                <Route path='team' element={<Team />}></Route> {/* don't use '/team' cause /means root and team is child so don't use */}
                <Route path='company' element={<Company />}></Route>
            </Route>
            <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Site
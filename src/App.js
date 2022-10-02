import React from 'react'
import { useSelector } from 'react-redux'
import Contact from './components/Contact'
import Education from './components/Education/Education'
import Intro from './components/Intro/Intro'

import Navbar from './components/Navbar'
import Project from './components/Project/Project'
import Skills from './components/Skills/Skills'


const App = () => {
  const isDark=useSelector(state=>state.toggle.isDark)
  return (
    <div style={{background:isDark ? 'black':'#fff',color:isDark?'#fff':'black'}}>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Education/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
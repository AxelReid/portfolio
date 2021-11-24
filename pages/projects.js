import React, { useReducer } from 'react'
import Component from '@/components/Component'
import Projects from '@/components/Projects'
import { useSelector } from 'react-redux'

const Pprojects = () => {
  const projects = useSelector((state) => state.projects)

  return (
    <Component title='Projects' desc='A collection of my some projects'>
      <h1 className='mb-10'>Projects</h1>
      <Projects projects={projects} />
    </Component>
  )
}

export default Pprojects

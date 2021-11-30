import React from 'react'
import Component from '@/components/Component'
import Projects from '@/components/Projects'
import { useSelector } from 'react-redux'

const Pprojects = () => {
  const projects = useSelector((state) => state.projects)

  return (
    <Component title='Projects' desc='A collection of my some projects'>
      <h1 className='mb-10'>Projects</h1>
      <p>
        More projects coming soon. Most of my projects are local and i
        couldn&apos;t take time to sum up them for showcase. Now working on it.
      </p>
      <Projects projects={projects} />
    </Component>
  )
}

export default Pprojects

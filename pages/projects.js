import React, { useReducer } from 'react'
import Component from '@/components/Component'
import Projects from '@/components/Projects'
import { reducer, defaultState } from '@/components/home/data'

const Pprojects = () => {
  const [data, dispatchData] = useReducer(reducer, defaultState)

  return (
    <Component title='Projects' desc='A collection of my some projects'>
      <h1 className='mb-10'>Projects</h1>
      <Projects projects={data.projects} />
    </Component>
  )
}

export default Pprojects

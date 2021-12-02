import React, { useEffect } from 'react'
import Component from '@/components/Component'
import Projects from '@/components/Projects'
import Search from '@/components/Search'
import { useSelector, useDispatch } from 'react-redux'
import { clear_p_sort } from '@/data/store/reducers/projectsReducer'

const Pprojects = () => {
  const dispatch = useDispatch()
  const sorted = useSelector((state) => state.projects.sorted_p)

  useEffect(() => {
    dispatch(clear_p_sort())
  }, [])

  return (
    <Component title='Projects' desc='A collection of my some projects'>
      <h1 className='mb-10'>Projects</h1>
      <p>
        More projects coming soon. Most of my projects are local and i
        couldn&apos;t take time to sum up them to showcase. Now working on it.
      </p>
      <Search count={sorted.length} />
      {sorted && <Projects projects={sorted} />}
    </Component>
  )
}

export default Pprojects

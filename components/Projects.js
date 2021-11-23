import React, { useCallback, useState } from 'react'
import style from 'styles/home.module.scss'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import Project from './Project'

const Projects = ({ projects }) => {
  const [selected, setSelected] = useState(null)

  const toggleExpand = useCallback((pr) => {
    setSelected(pr)
    if (!pr) {
      const wait = setTimeout(() => {
        document.body.style.overflowY = 'scroll'
        document.body.style.paddingRight = '0px'
      }, [600])
      return () => clearTimeout(wait)
    }
    document.body.style.overflowY = 'hidden'
    document.body.style.paddingRight = '10px'
  }, [])

  return (
    <section id={style.projects}>
      <AnimateSharedLayout>
        <section className='mt-50'>
          <AnimatePresence>
            {projects.map((project) => (
              <Project
                key={project.id}
                project={project}
                expanded={false}
                toggleExpand={toggleExpand}
              />
            ))}
          </AnimatePresence>
        </section>
        <AnimatePresence>
          {selected && (
            <>
              <motion.span
                data-expand-back
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='aside-back'
              ></motion.span>
              <aside>
                <div className='container'>
                  <Project
                    project={selected}
                    expanded={true}
                    toggleExpand={toggleExpand}
                  />
                </div>
              </aside>
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </section>
  )
}

export default Projects

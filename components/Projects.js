import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import style from 'styles/home.module.scss'
import { FaAngleUp, FaTimes, FaLink } from 'react-icons/fa'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'

const Projects = ({ projects }) => {
  const [selected, setSelected] = useState(null)

  const toggleExpand = useCallback((pr) => {
    setSelected(pr)
    if (!pr) {
      const wait = setTimeout(() => {
        document.body.style.overflowY = 'scroll'
        document.body.style.paddingRight = '0px'
      }, [200])
      return () => clearTimeout(wait)
    }
    document.body.style.overflowY = 'hidden'
    document.body.style.paddingRight = '10px'
  }, [])

  return (
    <section id={style.projects}>
      <AnimateSharedLayout>
        <section className='mt-50'>
          {projects.map((project) => (
            <Project
              key={project.id}
              project={project}
              expanded={false}
              toggleExpand={toggleExpand}
            />
          ))}
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

const Project = ({ project, expanded, toggleExpand }) => {
  const { id, imgs, link, title } = project
  return (
    <motion.div
      layoutId={id + title}
      className='radius-light shadow card-glass'
      id={style.project}
    >
      {expanded && (
        <header>
          <motion.h3 layoutId={id + 'title'}>{title}</motion.h3>
          <motion.button
            className='circle shadow hover-scale'
            onClick={() => toggleExpand(null)}
          >
            <FaTimes />
          </motion.button>
        </header>
      )}
      {expanded ? (
        imgs.map((img, i) => (
          <motion.div
            key={i}
            layoutId={img.id + id}
            className='radius-light'
            data-project-img
          >
            <Image
              src={img.img}
              layout='responsive'
              alt='img'
              placeholder='blur'
            />
          </motion.div>
        ))
      ) : (
        <motion.div layoutId={imgs[0].id + id} className='radius-light'>
          <Image
            src={imgs[0].img}
            layout='responsive'
            placeholder='blur'
            alt='img'
          />
        </motion.div>
      )}

      <article>
        {!expanded && (
          <motion.h3 layoutId={id + 'title'} className='mb-10'>
            {title}
          </motion.h3>
        )}
        <a
          href={link}
          rel='noreferrer'
          target='_blank'
          className='cut-line -at-1'
        >
          <i>
            <FaLink />
          </i>
          {link}
        </a>
        <p className={expanded ? '' : 'cut-line -at-2'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          repudiandae alias adipisci odit, vel cum, quo nobis soluta harum
        </p>
      </article>
      {!expanded && (
        <button
          className='circle shadow hover-scale'
          onClick={() => toggleExpand(project)}
        >
          <FaAngleUp />
        </button>
      )}
    </motion.div>
  )
}
export default Projects

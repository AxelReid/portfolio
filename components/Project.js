import React, { memo } from 'react'
import Image from 'next/image'
import { FaAngleUp, FaTimes, FaLink } from 'react-icons/fa'
import style from 'styles/home.module.scss'
import { motion } from 'framer-motion'

const Project = memo(({ project, expanded, toggleExpand }) => {
  const { id, imgs, link, title, desc = 'no desc' } = project

  const transition = {
    duration: 0.5,
    type: 'spring',
    stiffness: 70,
    damping: 15,
    // inertia
    // just
    // keyframes
    // spring
    // tween
  }

  return (
    <motion.div
      layoutId={id + title}
      className='radius-light shadow card-glass'
      transition={transition}
      id={style.project}
    >
      {expanded && (
        <header>
          <motion.h3 transition={transition} layoutId={id + 'title'}>
            {title}
          </motion.h3>
          <button
            className='circle shadow hover-scale'
            onClick={() => toggleExpand(null)}
          >
            <FaTimes />
          </button>
        </header>
      )}
      {expanded ? (
        imgs.map((img, i) => (
          <motion.div
            key={i}
            layoutId={img.id + id}
            transition={transition}
            exit={{
              opacity: imgs[0].id === img.id ? 1 : 0,
              transition: { duration: 0.2 },
            }}
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
        <motion.div
          transition={transition}
          layoutId={imgs[0].id + id}
          className='radius-light'
        >
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
          <motion.h3
            transition={transition}
            layoutId={id + 'title'}
            className='mb-10'
          >
            {title}
          </motion.h3>
        )}
        <motion.a
          layoutId={id + link}
          transition={transition}
          href={link}
          rel='noreferrer'
          target='_blank'
          className='cut-line -at-1'
        >
          <i>
            <FaLink />
          </i>
          {link}
        </motion.a>
        <motion.p
          transition={transition}
          layoutId={id + 'desc'}
          className={expanded ? '' : 'cut-line -at-2'}
        >
          {desc}
        </motion.p>
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
})

Project.displayName = 'Project'
export default Project

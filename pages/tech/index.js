import React from 'react'
import Component from '@/components/Component'
import style from '@/styles/tech.module.scss'
import Timeline from '@/components/home/Timeline'

import Pic from 'public/images/pic.jpg'
import Mongodb from 'public/images/mongodb.png'
import Express from 'public/images/express.png'
import ReactJs from 'public/images/react.png'
import NodeJs from 'public/images/node.png'
import NextJs from 'public/images/next.png'
import HtmlCss from 'public/images/html-css.png'
import Javascript from 'public/images/javascript.png'
import Sass from 'public/images/sass-logo.png'
import Sc from 'public/images/sc.png'
import FMotion from 'public/images/framer-motion.png'

const techs = [
  {
    id: 0,
    img: HtmlCss,
    title: 'Html, Css',
    desc: 'The core technologies for building Web pages',
    className: 'filter -invert',
    y: 50,
  },
  {
    id: 1,
    img: Javascript,
    title: 'Javascript',
    desc: 'For complex features on web pages',
  },
  {
    id: 2,
    img: ReactJs,
    title: 'React JS',
    desc: 'JS front-end UI library for SPA',
  },
  {
    id: 3,
    img: Sass,
    title: 'Scss, Sass',
    desc: 'Syntactically awesome style sheets',
  },
  {
    id: 4,
    img: Sc,
    title: 'Styled-components',
    desc: 'Css-in-js library',
  },
  {
    id: 5,
    img: FMotion,
    title: 'Framer-motion',
    desc: 'Motion library for React on the web',
    y: 65,
    className: 'filter -invert',
  },
  {
    id: 6,
    img: NodeJs,
    title: 'Node JS',
    desc: 'Back-end JavaScript runtime environment',
    className: 'filter -shadow',
    y: 42,
  },
  {
    id: 7,
    img: Express,
    title: 'Express JS',
    desc: 'A back end web app framework for Node.js',
  },
  {
    id: 8,
    img: Mongodb,
    title: 'MongoDB',
    desc: 'Document-oriented NoSQL Database program',
    className: 'filter -shadow',
  },
  {
    id: 9,
    img: NextJs,
    title: 'Next JS',
    desc: 'Full stack web Framework on top of React and Node Js',
    className: 'filter -invert',
    y: 45,
  },
]

const index = () => {
  return (
    <Component title='Technologies' desc='These are my skill set'>
      <div id={style.tech_wrapper}>
        <h2>I use</h2>
        <section>
          {techs.map((tech, i) => (
            <Timeline
              key={tech.id}
              img={tech.img}
              title={tech.title}
              desc={tech.desc}
              y={tech.y || 70}
              className={tech.className}
            />
          ))}
        </section>
      </div>
    </Component>
  )
}

export default index

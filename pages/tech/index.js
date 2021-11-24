import React from 'react'
import Component from '@/components/Component'
import style from '@/styles/tech.module.scss'
import Timeline from '@/components/home/Timeline'
import { useSelector } from 'react-redux'

const index = () => {
  const data = useSelector((state) => state.tech)

  return (
    <Component title='Technologies' desc='These are my skill set'>
      <div id={style.tech_wrapper}>
        {data.map(({ type, techs }, i) => (
          <div key={'tech-' + i}>
            <h2 className='h2 mb-10'>{type}</h2>
            <section key={'techs-' + i}>
              {techs.map((tech) => (
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
        ))}
      </div>
    </Component>
  )
}

export default index

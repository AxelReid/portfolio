import { useCallback, useReducer } from 'react'
import Image from 'next/image'
import style from 'styles/home.module.scss'
import Certicifations from '@/components/Certicifations'
import Component from '@/components/Component'
import { reducer, defaultState } from '@/components/home/data'

import Pic from 'public/images/pic.jpg'
import Mongodb from 'public/images/mongodb.png'
import Express from 'public/images/express.png'
import ReactJs from 'public/images/react.png'
import NodeJs from 'public/images/node.png'
import NextJs from 'public/images/next.png'
import Timeline from '@/components/home/Timeline'

export default function Home() {
  const [data, dispatchData] = useReducer(reducer, defaultState)

  const dispatch = useCallback((type, payload) => {
    dispatchData({ type: type, payload: payload })
  }, [])

  return (
    <Component>
      <section className={style.hero}>
        <div data-user>
          <div data-userinfo>
            <h1 className='big-title'>Asilbek Anvarbekov</h1>
            <p>MERN Stack Web Developer, Javascript Engineer</p>
            <p>Senior front-end, middle back-end full stack web developer</p>
          </div>
          <div data-pic>
            <Image
              width='150'
              height='150'
              alt='profile image'
              src={Pic}
            ></Image>
          </div>
        </div>
        <div data-walkthrough>
          <h2>Timeline</h2>
          <div data-timeline-wrapper>
            {data.timeline.map((line) => (
              <div key={line.year}>
                <h3 data-timeline-year>{line.year}</h3>
                <div>
                  {line.data.map((lin) => (
                    <Timeline key={lin.id} {...lin} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <section>
            <div data-nextjs>
              <Image layout='responsive' src={NextJs} alt='nextjs'></Image>
            </div>
            <div data-express>
              <Image layout='responsive' src={Express} alt='expressjs'></Image>
            </div>
            <div data-nodejs>
              <Image layout='responsive' src={NodeJs} alt='nodejs'></Image>
            </div>
            <div data-mongodb>
              <Image
                layout='responsive'
                src={Mongodb}
                alt='mongodb'
                priority
              ></Image>
            </div>
            <div data-react>
              <Image layout='responsive' src={ReactJs} alt='reactjs'></Image>
            </div>
          </section>
        </div>
      </section>
      <Certicifations />
    </Component>
  )
}

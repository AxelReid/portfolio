import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from 'styles/home.module.scss'
import Certicifations from '@/components/Certicifations'
import Component from '@/components/Component'
import Timeline from '@/components/Timeline'
import Projects from '@/components/Projects'
import { useSelector, useDispatch } from 'react-redux'
import { top_projects } from '@/data/store/reducers/projectsReducer'
import {
  Pic,
  Mongodb,
  Express,
  ReactJs,
  NodeJs,
  NextJs,
} from 'data/store/initialState'

export default function Home() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.home)
  const someProjects = useSelector((state) => state.projects.top_projects)

  useEffect(() => {
    dispatch(top_projects())
  }, [dispatch])

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
        <div data-walkthrough className='mt-section'>
          <h2 className='mb-10 h2'>Timeline</h2>
          <p>Quick demonstration of my programming walkthrough</p>
          <div data-timeline-wrapper className='mt-50'>
            {data.timeline.map((line) => (
              <div key={line.year}>
                <h3 data-timeline-year>{line.year}</h3>
                <div>
                  {line.data.map((lin) => (
                    <Timeline key={lin.id} {...lin} collapsed={false} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <section>
            <div data-nextjs className='filter -invert'>
              <Image layout='responsive' src={NextJs} alt='nextjs'></Image>
            </div>
            <div data-react>
              <Image layout='responsive' src={ReactJs} alt='reactjs'></Image>
            </div>
            <div data-nodejs className='filter -shadow'>
              <Image layout='responsive' src={NodeJs} alt='nodejs'></Image>
            </div>
            <div data-mongodb className='filter -shadow'>
              <Image layout='responsive' src={Mongodb} alt='mongodb'></Image>
            </div>
            <div data-express>
              <Image layout='responsive' src={Express} alt='expressjs'></Image>
            </div>
          </section>
        </div>
      </section>
      <section className='mt-section' id={style.someProjects}>
        <h2 className='mb-10 h2'>Projects</h2>
        <p>
          To see more project, navigate to{' '}
          <span className='link'>
            <Link href='/projects' className='link'>
              projects
            </Link>
          </span>{' '}
          page
        </p>
        <Projects projects={someProjects} />
        <Link href='/projects' passHref={true}>
          <h4>. . . more projects</h4>
        </Link>
      </section>
      <Certicifations certifications={data.certifications} />
    </Component>
  )
}

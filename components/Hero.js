import React from 'react'
import Image from 'next/image'
import style from 'styles/home.module.scss'
import Pic from 'public/images/pic.jpg'
import Mongodb from 'public/images/mongodb.png'
import Express from 'public/images/express.png'
import ReactJs from 'public/images/react.png'
import NodeJs from 'public/images/node.png'
import NextJs from 'public/images/next.png'

const Hero = () => {
  return (
    <section className={style.hero}>
      <div data-user>
        <div data-userinfo>
          <h1 className='big-title'>Asilbek Anvarbekov</h1>
          <p>MERNN Stack Developer, Javascript Engineer</p>
          <p>Senior Front-end, middle back-end full stack web developer</p>
        </div>
        <div data-pic>
          <Image width='150' height='150' src={Pic}></Image>
        </div>
      </div>
      <div data-walkthrough>
        <h2>Walkthrough (2019 - now)</h2>
        <div data-timespam>
          <h3>Html, Css</h3>
          <h3>Javascript</h3>
          <h3>React Js, SCSS, Styled-components, Framer-motion</h3>
          <h3>Node Js, Express Js</h3>
          <h3>MongoGB</h3>
          <h3>Next Js</h3>
        </div>
        <section>
          <div>
            <Image layout='responsive' src={Mongodb} priority></Image>
          </div>
          <div>
            <Image layout='responsive' src={Express}></Image>
          </div>
          <div>
            <Image layout='responsive' src={ReactJs}></Image>
          </div>
          <div>
            <Image layout='responsive' src={NodeJs}></Image>
          </div>
          <div>
            <Image layout='responsive' src={NextJs}></Image>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Hero

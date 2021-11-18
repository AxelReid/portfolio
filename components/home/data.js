export const reducer = (state, action) => {
  switch (action.type) {
    case 'xsfd':
      return { ...state }
    default:
      return { ...state }
  }
}

import ProofM001 from 'public/assets/certifications/mongodb/M001_proof_of_completion.jpeg'
import ProofM220 from 'public/assets/certifications/mongodb/M220JS_proof_of_completion.jpeg'
// nextjs+framer-motion+sass
import Fm1 from 'public/assets/projects/next+motion/fm1.png'
import Fm2 from 'public/assets/projects/next+motion/fm2.png'
// my old portdolio
import Port1 from 'public/assets/projects/old-portfolio/port1.png'
import Port2 from 'public/assets/projects/old-portfolio/port2.png'
// phone store via vanilla js
import PhSBlack from 'public/assets/projects/phone-store/phstore_black.png'
import PhSWhite from 'public/assets/projects/phone-store/phstore_white.png'
import PhSItem from 'public/assets/projects/phone-store/phstore_item.png'
// vanilla js my talking tom tore
import MyTom from 'public/assets/projects/my-talking-tom-store/shopping-cart.png'
// rps game
import RPSG from 'public/assets/projects/rps-game/rps-game.png'
// react store
import RS from 'public/assets/projects/react-store/shopping-cart.jpg'

export const defaultState = {
  timeline: [
    {
      year: '2019 - 2020',
      data: [
        {
          id: 0,
          title: 'Html, Css, Javscript',
          desc: 'Struggled so much on learning Javascript ',
        },
      ],
    },
    {
      year: '2020 - 2021',
      data: [
        {
          id: 1,
          title: 'React Js, some UI tools',
          desc: 'After alot of strugle, i could build any front-end web application',
        },
        {
          id: 2,
          title: 'Got my first front-end developer job',
          desc: 'I gained so much confidence about my front-end skills by joning a large scale project for 5 months in Radiomer uz',
        },
        {
          id: 3,
          title: 'Node Js, Express Js',
          desc: 'Eventually i learned to build a server for my front-end apps',
        },
        {
          id: 4,
          title: 'MongoDB',
          desc: 'I have been taking the official courses and got some certifications',
        },
        {
          id: 5,
          title: 'Next Js',
          desc: 'I can opine that NEXT JS is the future of web development',
        },
      ],
    },
  ],
  certifications: [
    {
      id: 0,
      image: ProofM001,
      width: 500,
      height: 380,
      link: 'https://university.mongodb.com/course_completion/814b5a40-5476-4a32-9a80-6f6ea696d1db',
    },
    {
      id: 1,
      image: ProofM220,
      width: 500,
      height: 380,
      link: 'https://university.mongodb.com/course_completion/e6bba0a8-2761-419f-837e-758b5f64217f',
    },
  ],
  projects: [
    {
      id: 1,
      title: 'My old portdolio',
      link: 'https://axelreid-webdev.netlify.app',
      imgs: [
        { id: 'img-1', img: Port1 },
        { id: 'img-2', img: Port2 },
      ],
    },
    {
      id: 2,
      title: 'Next JS + Framer Motions + Scss',
      link: '/',
      imgs: [
        { id: 'img-1', img: Fm1 },
        { id: 'img-2', img: Fm2 },
      ],
    },
    {
      id: 3,
      title: 'E-commerce Store',
      link: 'https://axelreid-store.netlify.app',
      imgs: [
        { id: 'img-1', img: PhSBlack },
        { id: 'img-2', img: PhSWhite },
        { id: 'img-3', img: PhSItem },
      ],
    },
    {
      id: 4,
      title: 'My Talking Tom Store',
      link: 'https://axel-js-project-mytalkingtom.netlify.app',
      imgs: [{ id: 'img-1', img: MyTom }],
    },
    {
      id: 5,
      title: 'RPS Game',
      link: 'https://axel-js-project-rps-game.netlify.app',
      imgs: [{ id: 'img-1', img: RPSG }],
    },
    {
      id: 6,
      title: 'React Store',
      link: 'https://axel-react-project-shopping-cart.netlify.app',
      imgs: [{ id: 'img-1', img: RS }],
    },
  ],
}

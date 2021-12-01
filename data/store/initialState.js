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
import Bootstrap from 'public/images/bootstrap.svg'
import JqueryLogo from 'public/images/jquery.png'
import PhpLogo from 'public/images/PHP-logo.png'
import ReactNative from 'public/images/react-native-logo.png'
import ReduxLogo from 'public/images/redux.png'
import TailwindCss from 'public/images/tailwind-css.png'
import PythonLogo from 'public/images/python.png'
import DjangoLogo from 'public/images/django.png'

import ProofM001 from 'public/assets/certifications/mongodb/M001_proof_of_completion.jpeg'
import ProofM220 from 'public/assets/certifications/mongodb/M220JS_proof_of_completion.jpeg'
// instagram mern clone
import Insta1 from 'public/assets/projects/instagram-clone-mern/Insta-mern-1.png'
import Insta2 from 'public/assets/projects/instagram-clone-mern/insta-mern-2.png'
import Insta3 from 'public/assets/projects/instagram-clone-mern/insta-mern-3.png'
import Insta4 from 'public/assets/projects/instagram-clone-mern/insta-mern-4.png'
import Insta5 from 'public/assets/projects/instagram-clone-mern/insta-mern-5.png'
// mern-app
import Mern1 from 'public/assets/projects/mern-app/1.png'
import Mern1_2 from 'public/assets/projects/mern-app/1-2.png'
import Mern1_3 from 'public/assets/projects/mern-app/1-3.png'
import Mern2 from 'public/assets/projects/mern-app/2.png'
import Mern2_1 from 'public/assets/projects/mern-app/2-1.png'
import Mern3 from 'public/assets/projects/mern-app/3.png'
import Mern3_1 from 'public/assets/projects/mern-app/3-1.png'
import Mern3_2 from 'public/assets/projects/mern-app/3-2.png'
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

const descs = [
  `There is no live demo but you can clone the source code and try locally. I did not deploy this because i did not want people play around with my database or upload there sensitive things.`,
]
export const nav = {
  theme: '',
  activeLink: '',
  menu_open: false,
  links: [
    {
      id: 0,
      href: '/blogs',
      name: 'Blogs',
    },
    {
      id: 1,
      href: '/projects',
      name: 'Projects',
    },
    {
      id: 2,
      href: '/tech',
      name: 'Technologies',
    },
    {
      id: 3,
      href: '/about',
      name: 'About',
    },
  ],
}
export const timeline = [
  {
    year: '2019 - 2020',
    data: [
      {
        id: 'jdefh98',
        title: 'Html, Css',
        desc: 'Started learning html and css on my own. Felt in love with CSS and have spent so much time on designing.',
      },
      {
        id: 'oh_javascript_was_so_hard_to_learn',
        title: 'JavaScript',
        desc: 'Struggled so much time to learn it and took me almost a year to master after a lot of dedication.',
      },
    ],
  },
  {
    year: '2020 - 2021',
    data: [
      {
        id: 1,
        title: 'React Js, Framer-motion, Styled-components',
        desc: 'After mastering pure css and javascript, extended my front-end skill with these modern UI tools.',
      },
      {
        id: 2,
        title: 'Got my first React Front-end web developer job',
        desc: 'Job experience gave me so much confidence about my front-end skills by joining a large scale project for 5 months in Radiomer uz.',
      },
      {
        id: 3,
        title: 'Node Js, Express Js',
        desc: 'Learned JavScript backend tools and fulfilled my knowledge.',
      },
      {
        id: 4,
        title: 'MongoDB',
        desc: `I'm in love with this NoSQL database program and have been taking the official courses and so far got a couple of certifications.`,
      },
      {
        id: 5,
        title: 'Next Js',
        desc: 'My solution for Full Stack Javascript Web Framework.',
      },
      {
        id: 6,
        title: 'Redux and Performance Optimization.',
        desc: 'Learned Redux and ways to increase performance of React Apps. My previous state management for React was Context API + Reducer Hook.',
      },
    ],
  },
]
export const certifications = [
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
]
export const projects = [
  {
    id: 11,
    title: 'Instagram Clone (with MERN)',
    link: 'https://github.com/AxelReid/mern-instagram-clone',
    imgs: [
      { id: 'img-1', img: Insta1 },
      { id: 'img-2', img: Insta2 },
      { id: 'img-3', img: Insta3 },
      { id: 'img-4', img: Insta4 },
      { id: 'img-5', img: Insta5 },
    ],
    desc: 'Full stack instagram clone. ' + descs[0],
    top: true,
  },
  {
    id: 12,
    title: 'Full MERN app',
    link: 'https://github.com/AxelReid/mern-app',
    imgs: [
      { id: 'img-12-1', img: Mern1 },
      { id: 'img-12-2', img: Mern1_2 },
      { id: 'img-12-3', img: Mern1_3 },
      { id: 'img-12-4', img: Mern2 },
      { id: 'img-12-5', img: Mern2_1 },
      { id: 'img-12-7', img: Mern3 },
      { id: 'img-12-8', img: Mern3_1 },
      { id: 'img-12-9', img: Mern3_2 },
    ],
    desc: 'Post & Admin Panel mern app. ' + descs[0],
    top: true,
  },
  {
    id: 1,
    title: 'My old portfolio',
    link: 'https://axelreid-webdev.netlify.app',
    imgs: [
      { id: 'img-1', img: Port1 },
      { id: 'img-2', img: Port2 },
    ],
    desc: 'Built in React JS, React-router, CSS and heavily relied on Framer-motion. This was my first React project and built it as a resume to showcase my front-end skills.',
    top: true,
  },
  {
    id: 2,
    title: 'Animated Layout',
    link: 'https://nextjs-framer-motion.vercel.app',
    imgs: [
      { id: 'img-1', img: Fm1 },
      { id: 'img-2', img: Fm2 },
    ],
    desc: 'A demonstation of the power of Framer-motion with Next JS',
    top: true,
  },
  {
    id: 3,
    title: 'Simple E-commerce Store',
    link: 'https://axelreid-store.netlify.app',
    imgs: [
      { id: 'img-1', img: PhSBlack },
      { id: 'img-2', img: PhSWhite },
      { id: 'img-3', img: PhSItem },
    ],
    desc: 'Built in pure Vanilla Javascript (no third-party libraries)',
  },
  {
    id: 4,
    title: 'My Talking Tom Store',
    link: 'https://axel-js-project-mytalkingtom.netlify.app',
    imgs: [{ id: 'img-1', img: MyTom }],
    desc: 'Built in pure Vanilla Javascript (no third-party libraries).',
  },
  {
    id: 5,
    title: 'RPS Game',
    link: 'https://axel-js-project-rps-game.netlify.app',
    imgs: [{ id: 'img-1', img: RPSG }],
    desc: 'A game built in pure Vanilla Javascript (no third-party libraries).',
  },
  {
    id: 6,
    title: 'React Store',
    link: 'https://axel-react-project-shopping-cart.netlify.app',
    imgs: [{ id: 'img-1', img: RS }],
    desc: 'Built in React JS, React-router, Context API (my second React js APP).',
  },
]
export const technologies = [
  {
    type: 'I use',
    techs: [
      {
        id: 'sdm43g',
        img: Javascript,
        title: 'Javascript',
        desc: 'For complex features on web pages',
      },
      {
        id: 'sdw',
        img: HtmlCss,
        title: 'Html, Css',
        desc: 'The core technologies for building Web pages',
        className: 'filter -invert',
        y: 50,
      },
      {
        id: 'd23gf',
        img: ReactJs,
        title: 'React JS',
        desc: 'JS front-end UI library for SPA',
      },
      {
        id: 'd234gd',
        img: Sass,
        title: 'Scss, Sass',
        desc: 'Syntactically awesome style sheets',
      },
      {
        id: '=-=1s',
        img: NextJs,
        title: 'Next JS',
        desc: 'Full stack web Framework on top of React and Node Js',
        className: 'filter -invert',
        y: 45,
      },
      {
        id: '090ksl',
        img: Sc,
        title: 'Styled-components',
        desc: 'Css-in-js library',
      },
      {
        id: ',.dw.e',
        img: Mongodb,
        title: 'MongoDB',
        desc: 'Document-oriented NoSQL Database program',
        className: 'filter -shadow',
      },
      {
        id: ']/s1',
        img: FMotion,
        title: 'Framer-motion',
        desc: 'Motion library for React on the web',
        y: 65,
        className: 'filter -invert',
      },
      {
        id: '1aqs3df',
        img: NodeJs,
        title: 'Node JS',
        desc: 'Back-end JavaScript runtime environment',
        className: 'filter -shadow',
        y: 42,
      },
      {
        id: 'fwegr',
        img: TailwindCss,
        title: 'Tailwind CSS',
        desc: 'CSS Library to build astounding designs.',
        y: 40,
      },
      {
        id: '3d2cv',
        img: Express,
        title: 'Express JS',
        desc: 'A back end web app framework for Node.js',
      },
      {
        id: 'wfgrvcw',
        img: ReduxLogo,
        title: 'Redux',
        desc: 'State Management tool for Javascript frameworks.',
        y: 65,
        className: 'filter -invert',
      },
    ],
  },
  {
    type: `I've used but don't use now`,
    techs: [
      {
        id: 'dwef',
        img: Bootstrap,
        title: 'Bootstrap',
        desc: 'UI tool',
      },
      {
        id: 'dfwe',
        img: JqueryLogo,
        title: 'Jquery',
        desc: 'The most popular Javscript library (write less, do more)',
        className: 'filter -invert',
      },
      {
        id: 'xvcbn',
        img: PhpLogo,
        title: 'Php',
        desc: 'Web back-end tool',
        y: 45,
      },
    ],
  },
  {
    type: `I'm gonna learn`,
    techs: [
      {
        id: '-034=1ef',
        img: PythonLogo,
        title: 'Python',
        desc: 'General-purpose high-level programming language.',
      },
      {
        id: '.,mnbyuiop',
        img: DjangoLogo,
        title: 'Django',
        desc: 'Python Full Stack Web Framework.',
      },
      {
        id: '32-4rt3ofl',
        img: ReactNative,
        title: 'React Native JS',
        desc: 'Javscript Framerwork to build native both IOS and Android app.',
        y: 80,
      },
    ],
  },
]

export {
  Pic,
  Mongodb,
  Express,
  ReactJs,
  NodeJs,
  NextJs,
  // HtmlCss,
  // Javascript,
  // Sass,
  // Sc,
  // FMotion,
  // Bootstrap,
  // JqueryLogo,
  // PhpLogo,
  // ReactNative,
  // ReduxLogo,
  // TailwindCss,
  // PythonLogo,
  // DjangoLogo,
}

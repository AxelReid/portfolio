export const reducer = (state, action) => {
  switch (action.type) {
    case 'xsfd':
      return { ...state }
    default:
      return { ...state }
  }
}

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
}

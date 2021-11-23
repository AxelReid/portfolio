import Image from 'next/image'
import Component from '@/components/Component'

import Snow2021 from 'public/assets/about/first-snow-2021.jpg'
import GardenLong from 'public/assets/about/garden-long.jpg'
import Mountain from 'public/assets/about/mountain.jpg'

const About = () => {
  return (
    <Component title='About' desc='Some information about myself'>
      <h3>Hi, I am Asilbek Anvarbekov</h3>
      <br />
      <br />
      <p>
        I am from Uzbekistan, resides in Andijan province and am 21 years old.
      </p>
      <br />
      <p>
        I am a Mern Full Stack Web Developer, Javascript Engineer, UI and UX
        Designer, Languages and Calithenics enthusiast.
      </p>
      <br />
      <p>
        I have grown up in Imom-ota village which is one of the most beautiful
        places of Andijan and it is considered as a touristic zone and welcomes
        a lot of people visiting there every summer around Uzbekistan. Its
        surrounding of mountains makes it so astounding and this is what i most
        like about my hometown.
      </p>
      <br />
      <br />
      <h3>Here are some pictures of my hometown.</h3>
      <br />
      <p>
        Follow me on{' '}
        <a
          className='link'
          href='https://www.instagram.com/mern_stack_boy/'
          rel='noreferrer'
          target='_blank'
        >
          Instagram
        </a>{' '}
        to see more...
      </p>
      <br />
      <section>
        <Image
          src={Snow2021}
          placeholder='blur'
          layout='responsive'
          quality='50'
          alt='hometown;'
        />
        <Image
          src={GardenLong}
          placeholder='blur'
          layout='responsive'
          quality='50'
          alt='hometownt'
        />
        <Image
          src={Mountain}
          placeholder='blur'
          layout='responsive'
          quality='50'
          alt='hometownt'
        />
      </section>
    </Component>
  )
}

export default About

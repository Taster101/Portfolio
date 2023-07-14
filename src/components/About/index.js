import { useState } from 'react'
//useEffect,
import Loader from 'react-loaders'
import AnimatedCharacters from '../AnimatedCharacters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const About = () => {
    const [characterClass] = useState('text-animate')
    // , setCharacterClass

  return (
    <>
    <div className="conatainer about-page">
      <div className="text-zone">
        <h1>
          <AnimatedCharacters
          characterClass={characterClass}
            characterArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            index={15}
          />
        </h1>
        <p>
          Welcome to my software engineer portfolio! I'm Davonta Henderson, a
          passionate software engineer with a unique perspective on the IT
          industry. My experience as an IT sales excutive opened my eyes to the
          endless possibilities and transformative power of technology. It
          inspired me to pursue a deeper understanding of software engineering,
          and I am currently studying Full Stack web development at Georgia
          Tech.
        </p>
        <p>
          Throughout my journey, I have acquired a comprehensive set of
          technical skills in web development. I am proficient in JavaScript, a
          versatile language that forms the foundation of modern web
          development. I have expertise in frameworks like React and Node.js,
          which allow me to build interactive and scalable applications.
          Additionally, I am skilled in database management systems, front-end
          development, and have a keen eye for writing clean and efficient code.
        </p>
        <p>
          In my portfolio, you will find projects that showcase my technical
          abilities, problem-solving skills, and creativity. Each project
          represents my commitment to delivering robust and scalable software
          solutions. I am dedicated to staying up-to-date with the latest
          advancements in technology and industry best practices, ensuring that
          I can adapt to evolving project requirements and deliver high-quality
          code.
        </p>
        <p>
          Thank you for visiting my portfolio and taking the time to learn about
          my journey as a software engineer. If you have any questions or would
          like to discuss potential collaborations, please feel free to reach
          out. I look forward to connecting with you!
        </p>
      </div>
    
    <div className='stage-cube-cont'>
      <div className='cubespinner'>
        <div className='face1'>
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className='face2'>
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className='face3'>
          <FontAwesomeIcon icon={faNodeJs} color="#36C720" />
        </div>
        <div className='face4'>
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
        </div>
        <div className='face5'>
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className='face6'>
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
        </div>
      </div>
    </div>
    </div>
    <Loader type="cube-transition" />
    </>
  )
}

export default About
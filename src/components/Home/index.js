import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
// import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
import AnimatedCharacters from '../AnimatedCharacters';
import './index.scss'
import IMG_0932 from '../../assets/IMG_0932.HEIC'


const Home = () => {
    const [characterClass ] = useState('text-animate')
    const nameArray = [ ' ','Z', 'a', 'c', 'k', ' ', 'M', 'i', 'l', 'l', 'e', 'r']
    const titleArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ','E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    // WHY WONT THIS WORK!?!?!
    // useEffect(() => {
    //     return setTimeout(() => {
    //       setCharacterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])
    
    return (
        <>
        <div className="container home-page">
            <img src={IMG_0932}></img>
            <div className="text-zone">
                <h1>
                    <span className={characterClass}>H</span>
                    <span className={`${characterClass} _12`}>i,</span>
                {/* <img src={} alt="developer" /> */}
                <br />
                <span className={`${characterClass} _13`}>I</span>
                <span className={`${characterClass} _14`}>'m </span>
                <AnimatedCharacters characterClass={characterClass}
                characterArray={nameArray}
                index={15}/>
                <br />
                <AnimatedCharacters characterClass={characterClass}
                characterArray={titleArray}
                index={22}/>
                </h1>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div> 
        </div>
        <Loader type="cube-transition" />
        </>
    )
}

export default Home
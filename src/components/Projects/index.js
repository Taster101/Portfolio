import { useState } from 'react'
// useEffect,
import Loader from 'react-loaders'
import AnimatedCharacters from '../AnimatedCharacters'
import projects from "../../projects.json"
import "./index.scss"


const Projects = () => {
    const [characterClass] = useState('text-animate')
    // , setCharacterClass
    return (
        <>
            <div className="conatainer projects-page">
                <div className="text-zone">
                    <h1 className="projects-title">
                        <AnimatedCharacters
                            characterClass={characterClass}
                            characterArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            index={15}
                        />
                    </h1>
                    {projects.length ? projects.map((proj) => (
                        <div className='card'>
                            <h2 className= 'project-name'>{proj.name}</h2>
                            {proj.video ? (
                                <iframe
                                    src={proj.video.replace("/view?usp=sharing", "/preview")}
                                    title={proj.name}
                                    className="projVideo"
                                    allow="autoplay"
                                    allowFullScreen
                                />
                            ) : (
                                <img src={proj.image} alt={proj.name} className="projImg" />
                            )}
                            <p>{proj.description}</p>
                            <div>
                                <button><a href={proj.github}>Repo</a></button>
                                <button><a href={proj.live}>Live</a></button>
                            </div>
                        </div>
                    )) : null}



                </div>
            </div>
            <Loader type="cube-transition" />
        </>
    )
}

export default Projects
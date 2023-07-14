import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedCharacters from '../AnimatedCharacters';
import resumeImage from '../../assets/9854f172b4f346ace716af6feddb4fba-0.jpeg';
import './index.scss';

const Resume = () => {
  const [characterClass] = useState('text-animate');

  return (
    <>
      <div className="container resume-page">
        <div className="text-zone">
          <h1>
            <AnimatedCharacters
              characterClass={characterClass}
              characterArray={['R', 'e', 's', 'u', 'm', 'e']}
              index={15}
            />
          </h1>
          <div className="image-zone">
            <img src={resumeImage} alt="Resume" />
          </div>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default Resume;

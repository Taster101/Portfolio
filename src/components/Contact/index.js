import { useState } from 'react'
//useEffect,
import Loader from 'react-loaders'
import AnimatedCharacters from '../AnimatedCharacters'
// import { useRef } from 'react'
// import emailjs from "@emailjs/browser"
import './index.scss'

const Contact = () => {
    const [characterClass] = useState('text-animate')
    // , setCharacterClass
    // const contactForm = useRef()
    
    // const sendEmail = (e) => {
    //     e.preventDefault()
    
    //     emailjs
    //       .sendForm('gmail', 'service_ygi9gyd', contactForm.current, 'nzHfp9qgXNB_DUtfo')
    //       .then(
    //         () => {
    //           alert('Message successfully sent!')
    //           window.location.reload(false)
    //         },
    //         () => {
    //           alert('Failed to send the message, please try again')
    //         }
    //       )
    //   }
    
    
    return (
        <>
        <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedCharacters 
                    characterClass= {characterClass}
                    characterArray={['C', 'o', 'n','t', 'a', 'c', 't', ' ', 'M', 'e']}
                    index={15}
                />
            </h1>
            <div className="contact-form">
                <form> 
                    {/* ref={contactForm} onSubmit={sendEmail} */}
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className='half'>
                            <input type='email' name='email' placeholder='Email' />
                        </li>
                        <li>
                            <input placeholder='Subject' type='text' name='subject' required />
                        </li>
                        <li>
                           <textarea placeholder='Message' name='message' required>
                            </textarea> 
                        </li>
                        <li>
                            <input type="submit" className="flat-button" place="SEND">
                            </input>
                        </li>
                    </ul>
                </form>
            </div>
            </div>
        </div>
        <Loader type="cube-transition"/>
        </>
    )
}

export default Contact
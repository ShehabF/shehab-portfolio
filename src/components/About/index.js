import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJava,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            index={15}
                        />
                    </h1>
                    <p>
                        I'm a highly motivated full stack developer looking for
                        the next step in my career. Through my professional and
                        academic experience, I have honed my skills in software
                        development, teamwork, and problem-solving, making me a
                        well-rounded candidate eager to contribute to your
                        innovative team.
                    </p>
                    <p>
                        In 2020, I graduated from the Georgia Institute of
                        Technology with a B.Sc. in Computer Science and
                        concentrations in people and media. I had the opportunity
                        to lead the development of the official website for Plantlanta.
                        As the team lead I actively engaged in client communication,
                        UX research, appilcation development, and team sprint planning.
                    </p>
                    <p>
                        During my two-year tenure at T-Mobile, I had the
                        privilege of collaborating with a dynamic team of
                        engineers to develop Nova, a pivotal platform hosting
                        critical web applications and an app store for
                        T-Mobile's development teams and product owners. This
                        experience has provided me with a solid foundation in
                        Java, ReactJS, TypeScript, JavaScript, HTML, CSS,
                        GraphQL, and SQL.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faReact} color="#00A0DD" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJava} color="#DD0031" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon
                                icon={faJsSquare}
                                color="#EFD81D"
                            />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                    <div>
                        <a
                            className="flat-button"
                            href='Shehab Farooqui Resume 2023 (13).pdf'
                            download='Shehab Farooqui Resume'
                        >
                            DOWNLOAD RESUME
                            <FontAwesomeIcon className='download-icon' icon={faArrowAltCircleDown} />
                        </a>
                    </div>
                </div>
            </div>

            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default About

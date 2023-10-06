import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [
        'S',
        'h',
        'e',
        'h',
        'a',
        'b',
        ' ',
        'F',
        'a',
        'r',
        'o',
        'o',
        'q',
        'u',
        'i',
    ]
    const jobArray = [
        'S',
        'o',
        'f',
        't',
        'w',
        'a',
        'r',
        'e',
        ' ',
        'E',
        'n',
        'g',
        'i',
        'n',
        'e',
        'e',
        'r',
    ]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            index={15}
                        />

                        <br />

                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            index={18}
                        />
                    </h1>
                    <h2> Full Stack Developer/ UI/UX Design / Photography</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
                <Logo />
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Home

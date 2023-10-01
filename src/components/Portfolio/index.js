import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'o', 'r', 't', 'f', 'o ', 'l', 'i', 'o']}
                            index={15}
                        />
                    </h1>
                    <div className='message'>
                        This page is under construction
                        <FontAwesomeIcon className="wrench-icon" icon={faWrench} color='4d4d4e' />
                    </div>
                </div>

            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )

}

export default Portfolio
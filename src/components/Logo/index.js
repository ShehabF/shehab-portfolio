import LogoS from '../../assets/images/s-high-resolution-logo-white-on-transparent-background.png'
import { useRef } from 'react'
import './index.scss'

const Logo = () => {
    const bgRef = useRef()
    const solidLogoRef = useRef()

    return (
        <div className="logo-container" ref={bgRef}>
            <img
                className="solid-logo"
                ref={solidLogoRef}
                src={LogoS}
                alt="JavaScript,  Developer"
            />
        </div>
    )
}

export default Logo

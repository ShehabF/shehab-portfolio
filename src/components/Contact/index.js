import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                'template_zeea94j',
                refForm.current,
                'LBe811nTrYekzJMAq'
            )
            .then(
                () => {
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send messsage, please try again')
                }
            )
    }
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={[
                                'C',
                                'o',
                                'n',
                                't',
                                'a',
                                'c',
                                't',
                                ' ',
                                'M',
                                'e',
                            ]}
                            index={15}
                        />
                    </h1>

                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="zarah1@example.com"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Please provide your contact info in the message..."
                                        name="message"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        type="submit"
                                        className="flat-button"
                                        value={'SEND'}
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Shehab Farooqui
                    <br />
                    Atlanta, Georgia
                    <br />
                    <span>shehab_zx1@hotmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer
                        center={[33.8982, -84.2833]}
                        zoom={13}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[33.8982, -84.2833]} />
                    </MapContainer>
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Contact

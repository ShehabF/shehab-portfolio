import Loader from 'react-loaders'
import './index.scss'
import useFireStore from '../../hooks/useFirestore'

const Gallery = () => {
    const { docs } = useFireStore('images')
    console.log(docs)

    return (
        <>
            <div className='container gallery-page'>
                {docs && docs.map(doc => (
                    <div className='img-wrap' key={doc.id}>
                        <img src={doc.url} alt='photograph' />
                    </div>
                ))}
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Gallery
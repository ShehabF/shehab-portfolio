import Loader from 'react-loaders'
import './index.scss'
import useFireStore from '../../hooks/useFirestore'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Gallery = () => {
    const { docs } = useFireStore('images')
    console.log(docs)

    return (
        <>
            <div className='container gallery-page'>
                {docs && docs.map((doc, index) => index < 8 && (
                    <div className='img-wrap' key={doc.id}>
                        <LazyLoadImage
                            src={doc.url}
                            key={doc.id}
                            width={400}
                            height={350}
                            effect='opacity'
                            placeholderSrc={doc.url}
                        />
                    </div>
                ))}
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Gallery
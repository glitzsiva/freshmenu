

import { v4 as uuid } from "uuid"


const bannerImages = [
    {
        id: uuid(),
        imageUrl: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_384/rng/md/carousel/production/k7xunqkohzfzczqlqprn'
    },
    {
        id: uuid(),
        imageUrl: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_384/rng/md/carousel/production/k7xunqkohzfzczqlqprn'
    },
    {
        id: uuid(),
        imageUrl: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_384/rng/md/carousel/production/k7xunqkohzfzczqlqprn'
    },
    {
        id: uuid(),
        imageUrl: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_384/rng/md/carousel/production/k7xunqkohzfzczqlqprn'
    },
]


const BannerSlider = () => {

    return (
        <div style={{
            overflowX: 'auto'
        }} className='d-flex scrollbar my-3' >
            {
                bannerImages.map(({ id, imageUrl }) =>
                    (<img key={id} className='rounded me-3' alt='slider' height='192px' src={imageUrl} />)
                )
            }
        </div >
    )
};


export default BannerSlider;


import { useSelector } from "react-redux";


const BannerSlider = () => {
    const bannerImages = useSelector(state => state.bannerSlider);
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
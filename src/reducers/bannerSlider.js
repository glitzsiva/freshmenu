
import { v4 as uuid } from "uuid";




const bannerSliderDefaultState = [
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


const bannerSliderReducer = (state = bannerSliderDefaultState, action) => {
    return state
}
export default bannerSliderReducer;
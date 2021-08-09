



import { combineReducers } from 'redux';


import quickLinksReducer from './quickLinks';
import bannerSliderReducer from './bannerSlider';
import foodDetailsReducer from './foodDetails';
import cartItemsReducer from './cartItems';
import authenticationReducer from './authentication';

export default combineReducers({
    quickLinks: quickLinksReducer,
    bannerSlider: bannerSliderReducer,
    foodDetails: foodDetailsReducer,
    cartItems: cartItemsReducer,
    auth: authenticationReducer
})


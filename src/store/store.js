import { createStore, combineReducers } from 'redux';

//Custom Imports
import quickLinksReducer from '../reducers/quickLinks';
import bannerSliderReducer from '../reducers/bannerSlider';


const configurStore = () => {
    const store = createStore(
        combineReducers({
            quickLinks: quickLinksReducer,
            bannerSlider: bannerSliderReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
}



export default configurStore;
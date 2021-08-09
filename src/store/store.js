import { createStore } from 'redux';

//Custom Imports




import rootReducers from '../reducers/rootReducers';




const configurStore = () => {
    const store = createStore(
        rootReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
}



export default configurStore;
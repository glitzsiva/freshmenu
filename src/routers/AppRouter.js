
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
// import Cart from '../components/cart/Cart';
import Home from '../screens/home/Home';
import configurStore from '../store/store'
import { Provider } from 'react-redux';


const store = configurStore();

const AppRouter = () => (

    <Provider store={store}>
        <BrowserRouter>
            <>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                </Switch>
            </>
        </BrowserRouter>
    </Provider>
);

export default AppRouter;
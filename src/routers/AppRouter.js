
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
// import Cart from '../components/cart/Cart';
import Home from '../screens/home/Home';





const AppRouter = () => (


    <BrowserRouter>
        <>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                {/* <Route exact path='/cart'>
                    <Cart />
                </Route> */}
            </Switch>
        </>
    </BrowserRouter>
);

export default AppRouter;
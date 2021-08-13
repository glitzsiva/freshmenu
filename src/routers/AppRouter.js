
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


/// Custom Imports 
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Login from '../screens/Login';
import configurStore from '../store/store'
import { Provider } from 'react-redux';
import Register from '../screens/Register';
import requiresAuth from '../hoc/requiresAuth';
import CartRoute from './CartRoute';

import UserRoute from './UserRoute';


const store = configurStore();

const AppRouter = () => (

    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={requiresAuth(Home)} />
                <Route path='/cart' component={requiresAuth(CartRoute)} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={requiresAuth(Register)} />
                <Route path='/user' component={UserRoute} />
                <Route path='/explore' component={Explore} />
            </Switch>

        </BrowserRouter>
    </Provider>
);

export default AppRouter;
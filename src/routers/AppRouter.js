
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


/// Custom Imports 
import Home from '../screens/Home';
import Login from '../screens/Login';
import configurStore from '../store/store'
import { Provider } from 'react-redux';
import Register from '../screens/Register';
import LayoutWrapper from '../hoc/LayoutWrapper';

const store = configurStore();

const AppRouter = () => (

    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LayoutWrapper(Home)} />

                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route exact path='/register'>
                    <Register />
                </Route>
            </Switch>

        </BrowserRouter>
    </Provider>
);

export default AppRouter;
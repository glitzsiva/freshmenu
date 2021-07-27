
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import AppRouter from './routers/AppRouter';

ReactDOM.render(
    <React.Fragment>
        <AppRouter />
    </React.Fragment>,
    document.getElementById('root')
);
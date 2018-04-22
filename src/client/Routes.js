import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import App from './App';

export default [
    {
        ...App,
        routes: [
            {
                path: '/',
                ...HomePage,
                exact: true
            },
            {
                path: '/users',
                loadData: UsersListPage.loadData,
                component: UsersListPage.component,
                // ...UsersListPage // this also works
            }
        ]
    }
]


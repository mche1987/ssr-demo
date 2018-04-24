import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import AdminsPage from './pages/AdminsPage';

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
            },
            {
                path: '/admins',
                ...AdminsPage
            },
            {
                ...NotFoundPage
                // no path needed, catch-all
            }
        ]
    }
]


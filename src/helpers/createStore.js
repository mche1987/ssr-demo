import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';

export default (req) => {
    const axiosInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        // this time attaching cookie for serverside
        headers: { cookie: req.get('cookie') || '' }
    })
    const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)))

    return store;
};
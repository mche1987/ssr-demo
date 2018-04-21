import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public')); // app contains public files
app.get('*', (req, res) => {
    const store = createStore();

    const matchedRoutesRes = matchRoutes(Routes, req.path);
    const promises = matchedRoutesRes.map( ({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });

    // console.log(promises);
    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });
});

app.listen(3000, () => {
    console.log("listening on 3000")
})
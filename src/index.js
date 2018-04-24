import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    // course specific configs below
    proxyReqOptDecorator(opts) {
        // settings the origins so it redirects to oauth process
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
})) // express middleware
app.use(express.static('public')); // app contains public files
app.get('*', (req, res) => {
    const store = createStore(req);

    const matchedRoutesRes = matchRoutes(Routes, req.path);
    const promises = matchedRoutesRes
        .map(({ route }) => {
            // console.log(store, "store being passed in as arg for pages")
            return route.loadData ? route.loadData(store) : null;
        }).map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve)
            })
        }
    })

    // console.log(promises);
    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        if (context.url) {
            return res.redirect(301, context.url)
        }

        if (context.notFound) { // being set on the NotFoundPage via renderer when route matches
            res.status(404);
        }

        res.send(content);
    });
});

app.listen(3000, () => {
    console.log("listening on 3000")
})
import express, { Application } from 'express';
import fileUpload from 'express-fileupload';
import compression from 'compression';
import dotenv from 'dotenv';

dotenv.config();

import api from './api';
import Page404 from './pages/404';

import { mockProducts } from './mock';
import { get } from './models/product/product';

const app: Application = express();

app.use(compression());
app.use('/static', express.static('static'));

// simplify fileupload
app.use(fileUpload());

app.use('/api', api);

app.get('/', async (_req, res) => {
    const productModel = await get();

    const preloadedState = {
        config: {
            imagesLocation: process.env.IMAGES_PATH,
        },
        products: {
            products: productModel.getProducts(),
        },
    };

    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png">
        <link rel="manifest" href="/static/favicon/site.webmanifest">
        <link rel="stylesheet" href="/static/app/style.css">
      </head>
      <body>
        <div id="root" />
      </body>
      <script type="application/json" id="preloaded-state">${JSON.stringify(
          preloadedState
      ).replace(/</g, '\\u003c')}</script>
      <script type="text/javascript" src="/static/app/bundle.js"></script>
    </html>`);
});

app.use((req, res) => {
    res.status(404).send(Page404());
});

const port = process.env.PORT || 9009;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

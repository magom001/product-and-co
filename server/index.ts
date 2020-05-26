import express, { Application } from 'express';

const app: Application = express();

// better use nginx
app.use('/assets', express.static('static'));

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png">
        <link rel="manifest" href="/assets/favicon/site.webmanifest">
        <link rel="stylesheet" href="/assets/style.css">
      </head>
      <body>
        <div id="root" />
      </body>
      <script type="text/javascript" src="/assets/bundle.js"></script>
    </html>`);
});

const port = process.env.PORT || 9009;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

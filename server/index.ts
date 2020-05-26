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

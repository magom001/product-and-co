const Page404 = () => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png">
    <link rel="manifest" href="/assets/favicon/site.webmanifest">
    <link rel="stylesheet" href="/assets/app/style.css">
    <style>
        .container {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #222;
        }

        .error {
            text-align: center;
            font-size: 44px;
            margin-bottom: 12px;
        }

        .link {
            text-decoration: none;
            color: inherit;
        }

        .link:hover {
            text-decoration: underline;
        }
    </style>
  </head>
  <body>
    <div class="container">
        <h1 class="error">Page not found</h1>
        <a class="link" href="/">Back to main page</a>
    </div>
  </body>
</html>`;

export default Page404;

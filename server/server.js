import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../common/App';

const app = express();

app.use(cors({ optionSuccessStatus: 200 }));

app.use(express.static('.build'));

app.get('/', function(req, res) {
  const script =
    app.get('env') === 'production'
      ? 'client.js'
      : 'http://localhost:4002/client.js';

  let application = renderToString(<App />);

  let html = `<!doctype html>
  <html class="no-js" lang="">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Request Header Microservice | freeCodeCamp</title>
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width,  initial-scale=1">
      <link href="https://fonts.googleapis.com/css?family=Fira+Mono|Lato|Noto+Sans:400,700" rel="stylesheet">
    </head>
    <body>
      <div id="root">${application}</div>
      <script src="${script}"></script>
    </body>
  </html>`;

  res.send(html);
});

app.get('/api/whoami', function(req, res) {
  res.json({
    ipaddress: req.get('X-Forwarded-For'),
    language: req.get('Accept-Language'),
    software: req.get('User-Agent')
  });
});

export default app;

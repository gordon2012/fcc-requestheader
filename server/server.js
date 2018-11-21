import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({ optionSuccessStatus: 200 }));

app.get('/', function(req, res) {
  res.json({ message: 'front end' });
});

app.get('/api/whoami', function(req, res) {
  res.json({
    ipaddress: req.get('X-Forwarded-For'),
    language: req.get('Accept-Language'),
    software: req.get('User-Agent')
  });
});

export default app;

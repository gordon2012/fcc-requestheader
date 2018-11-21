import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors({ optionSuccessStatus: 200 }));

// app.enable('trust proxy');

// maybe
// app.use(express.static('public'));

app.get('/', function(req, res) {
  // res.sendFile(path.resolve('views/index.html'));
  res.json({ message: 'front end' });
});

app.get('/api/whoami', function(req, res) {
  // console.log(req.ip);
  // console.log(req.get('Accept-Language'));
  // console.log(req.get('User-Agent'));

  res.json({
    ipaddress: {
      ip: req.ip,
      ips: req.ips,
      'X-Forwarded-For': req.get('X-Forwarded-For')
    },
    language: req.get('Accept-Language'),
    software: req.get('User-Agent')
  });
});

export default app;

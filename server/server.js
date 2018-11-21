import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors({ optionSuccessStatus: 200 }));

// maybe
// app.use(express.static('public'));

app.get('/', function(req, res) {
  // res.sendFile(path.resolve('views/index.html'));
  res.json({ message: 'front end' });
});

app.get('/api/whoami', function(req, res) {
  res.json({ message: 'api endpoint' });
});

export default app;

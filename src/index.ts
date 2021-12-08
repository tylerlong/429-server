import express from 'express';

const app = express();

app.get('*', (req, res) => {
  res.status(429);
  res.send({hello: 'world'});
});
app.post('*', (req, res) => {
  res.status(429);
  res.send({hello: 'world'});
});

app.listen(8000, () => {
  console.log('Example app listening at http://localhost:8000');
});

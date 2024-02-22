const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Привет, Октагон!');
});

app.get('/static', (req, res) => {
  const response = { header: 'Hello', body: 'Octagon NodeJS Test' };
  res.json(response);
});

app.get('/dynamic', (req, res) => {
  const { a, b, c } = req.query;

  if (!a || !b || !c || isNaN(a) || isNaN(b) || isNaN(c)) {
      const errorResponse = { header: 'Error' };
      res.json(errorResponse);
  } else {
      const result = (parseInt(a) * parseInt(b) * parseInt(c)) / 3;
      const response = { header: 'Calculated', body: result.toString() };
      res.json(response);
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

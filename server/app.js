var express = require('express'),
  app = express(),
  port = 3001,
  cors = require('cors');

app.use(cors());

app.get('/items', (req, res) => {
  var shoppingItems = require('./data/items.json');
  res.json(shoppingItems);
});

// handle not found route
app.use(function(req, res) {
  res.status(404).send({
    message: 'Not Found'
  });
});

app.listen(port, () => {
  console.log('Server is listening on port 3001');
});

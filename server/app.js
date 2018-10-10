var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  cors = require('cors');

app.use(cors());

app.get('/api/items', (req, res) => {
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
  console.log(`Server is listening on port ${port}`);
});

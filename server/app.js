var express = require('express'),
  app = express(),
  port = 3001,
  cors = require('cors');

app.use(cors());

// handle not found route
app.use(function(req, res) {
  res.status(404).send({
    message: 'Not Found'
  });
});

app.listen(port, () => {
  console.log('Server is listening on port 3001');
});

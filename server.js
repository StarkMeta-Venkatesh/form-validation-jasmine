const express = require('express');
const app = express();

app.use(express.static('public/src'));

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
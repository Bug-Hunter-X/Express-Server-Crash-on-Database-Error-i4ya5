const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//Error:The server does not handle the error properly and crashes if there is an issue with the database or other external resources. 
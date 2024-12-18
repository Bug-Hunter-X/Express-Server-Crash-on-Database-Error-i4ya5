const express = require('express');
const app = express();

app.use(async (req, res, next) => {
  try {
    // Your asynchronous operations here
    // For example, database interaction
    await someAsyncOperation();
    next();
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
});

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//Simulates an Asynchronous operation that could fail
async function someAsyncOperation(){
  // Simulate database failure
  // throw new Error('Database connection failed');
}

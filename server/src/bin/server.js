import app from '../app.js';

// Safety net 2 : If there are uncaught exceptions
process.on('uncaughtException', err => {
  console.log('Uncaught Exception. Shutting down…');
  console.log(err.name, err.message);
  // Shutting server down
  process.exit(1); // 0 = success | 1 = Uncaught Exception
});

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});
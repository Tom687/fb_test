import app from '../app.js';

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});
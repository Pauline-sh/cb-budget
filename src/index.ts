import express from 'express';

const app = express();

const PORT = 8888;

app.listen(PORT, () => {
  const a: number = 2;

  console.log(`Listening at ${PORT}`, a);
});

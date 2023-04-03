import express from 'express'

const PORT = 3000;
const app = express();

app.get( '/', (req, res) => {
  res.send('The Index');
});

app.get('/hoodie', (req, res) => {
  res.send('I am a hoodie!');
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});


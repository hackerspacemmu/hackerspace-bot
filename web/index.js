import express from 'express';
import path from 'path';
const __dirname = path.resolve();
const pages_directory = '/web/pages/';

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, pages_directory, 'index.html'));
});

app.listen(3000, () => console.log('Hackerspace MMU web server started'));
